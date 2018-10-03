<template>
    <div class="StartChargePage">
      <h3>Start Charging</h3>
      <div id="feedbackDiv"></div>
    <div>
      <p id="output"></p>
      <button class="button1" @click="startCharging">Start Charging</button>
        <button class="button1" @click="charge">Back</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "StartCharge",
  data() {
    return {};
  },
  methods: {
    charge() {
      this.$router.push({ name: "Charge" });
    },
    startCharging() {
      var output = document.getElementById("output");
      output.innerHTML = "Requesting Bluetooth Device...";
      navigator.bluetooth
        .requestDevice({
          filters: [{ name: "mPower" }]
        })
        .then(device => {
          output.innerHTML += "<br /> Connecting to GATT Server...";
          return device.gatt.connect();
        })
        .then(server => {
          output.innerHTML += "<br />Getting Battery Service...";
          return server.getPrimaryService("battery_service");
        })
        .then(service => {
          output.innerHTML += "<br />Getting Battery Level Characteristic...";
          return service.getCharacteristic("battery_level");
        })
        .then(characteristic => {
          output.innerHTML += "<br />Reading Battery Level...";
          return characteristic.readValue();
        })
        .then(value => {
          let batteryLevel = value.getUint8(0);
          output.innerHTML += "<br /> Battery Level is " + batteryLevel + "%";
        })
        .catch(error => {
          output.innerHTML += "<br />Argh! " + error;
        });
    }
  }
};
</script>
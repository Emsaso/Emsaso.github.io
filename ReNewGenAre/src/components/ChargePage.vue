<template>
    <div class="ChargePage">
      <h3>Charge or purchase charges</h3>
      <div id="feedbackDiv"></div>
    <div>
        <button class="button1" @click="startCharge">Start charging</button>
        </div>
    <div>
        <button class="button1" @click="buyCharge">Purchase charges</button>
        </div>
    <div>
        <button class="button1" @click="home">Back</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "Charge",
  data() {
    return {};
  },
  methods: {
    startCharge() {
      this.$router.push({ name: "StartCharge" });
    },
    buyCharge() {
      this.$router.push({ name: "BuyCharge" });
    },
    home() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
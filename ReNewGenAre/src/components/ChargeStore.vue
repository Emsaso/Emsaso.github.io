<template>
    <div class="ChargeStore">
      <h3>Purchase Charges</h3>
      <div id="feedbackDiv"></div>
    <div>
        <button class="button1" @click="charge">Back</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "BuyCharge",
  data() {
    return {};
  },
  methods: {
    charge() {
      this.$router.push({ name: "Charge" });
    }
  }
};
</script>
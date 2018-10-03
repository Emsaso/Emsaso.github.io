<template>
  <div class="Index">
    <form>
      <h3>Charge your devices</h3>
    <button class="button1" @click="login">Log In</button>
    <button class="button1" @click="signup">Sign Up</button>  
    </form>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push({ name: "Login" });
    },
    signup() {
      this.$router.push({ name: "Signup" });
    }
  }
};
</script>

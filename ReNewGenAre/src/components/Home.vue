<template>
    <div class="Home">
      <h3>Logged in</h3>
      <div id="feedbackDiv"></div>
    <div>
        <button class="button1" @click="charge">Charge</button>
        </div>
      <div>
        <button class="button1" @click="logout">Log out</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Index' })
      })
    },
    charge() {
      this.$router.push({ name: "Charge" });
    }
  }
};
</script>
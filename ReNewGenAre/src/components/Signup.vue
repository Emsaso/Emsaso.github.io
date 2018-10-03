<template>
    <div class="Signup">
      <form @submit.prevent="signup">
      <div id="feedbackDiv"></div>
      <div class="field">
        <label for="firstName">First name</label>
        <input id="firstName" type="text" v-model="firstName">
      </div>
      <div class="field">
        <label for="lasttName">Last name</label>
        <input id="lastName" type="text" v-model="lastName">
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <div class="field">
        <label for="name">User name</label>
        <input id="name" type="text" v-model="alias">
      </div>
      <p v-if="feedback != null" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="button1">Signup</button>
        <button class="button1" @click="index">Main Menu</button>
        </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: "Signup",
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      alias: null,
      slug: null,
      feedback: null
      }
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
    index() {
      this.$router.push({ name: "Index" });
    },
    signup(){
      if((this.email != null) && (this.password !== null)) {
        this.feedback = null
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(cred => {
            db.collection('users').doc(cred.user.uid).set({
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                alias: this.alias,
                geolocation: null,
                user_id: cred.user.uid
            })
        }).then(() => {
            this.$router.push({ name: 'HomeScreen' })
        })
        .catch(err => {
            this.feedback = err.message
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
    }
  }
};
</script>

<style <style scoped>
.signup{
  margin: auto;
  max-width: 400px;
  margin-top: 60px;
}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  text-align: left;
  margin-bottom: 6px;
}
.signup button {
  width: 100%;
}
</style>
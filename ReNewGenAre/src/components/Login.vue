<template>
    <div class="login">
      <form class="card-panel"> <!--@submit.prevent="login"-->
        <h2 class="center">Login</h2>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password">
        </div>
        <p v-if="feedback" class="red-text center">{{ feedback }}</p>
        <div class="center">
          <button class="button1" @click="login">Login</button>
        </div>
        <div>
          <button class="button1" @click="index">Main Menu</button>
        </div>
      </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    index() {
      this.$router.push({ name: "Index" });
    },
    login() {
      if (this.email && this.password) {
        this.feedback = null;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user.uid);
            this.$router.push({ name: "Home", params: { id: cred.user.uid } });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = "Please fill in both fields";
      }
    }
  }
};
</script>

<style scoped>
.login {
  margin: auto;
  max-width: 400px;
  margin-top: 60px;
}
.login h2 {
  font-size: 2.4em;
}
.login .field {
  text-align: left;
  margin-bottom: 16px;
}
.login button {
  width: 100%;
}
.button1 {
  width: 10px;
}
</style>
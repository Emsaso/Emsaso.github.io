<template>
  <div class="navbar">
    <nav class="">
      <div class="nav-wrapper blue">
        <img src="../../assets/logo.png" style="float: left; width:7%; height:100%;"/>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
          <li v-if="user"><a>{{ user.email }}</a></li>
          <li v-if="user"><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
      <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
      <hr>
      <li v-if="user"><a>{{ user.email }}</a></li>
      <li v-if="user"><a @click="logout">Logout</a></li>
    </ul>
  </div>
</template>

<script>

import firebase from 'firebase'
import 'materialize-css'
import Login from '@/components/Login';

export default {
  name: 'Navbar',
  data(){
    return{
      user: null
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Index' })
      })
    }
  },
  mounted() {
    // let elems = document.querySelectorAll('.sidenav');
    // let instances = M.Sidenav.init(elems, options);
    M.AutoInit(); // That way, it is only initialized when the component is mounted
  },
  created(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.user = user
      } else {
        this.user = null
      }
    })
    
  }
}
</script>
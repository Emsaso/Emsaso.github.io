<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
 
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#logo {
  height: 20%;
  width: 20%;
}

.button1 {
  margin: auto;
  width: 40%;
  margin: 0.5%;
  padding: 2%;
  padding-bottom: 2.25%;
  font-size: 200%;
  background-color: rgb(150, 150, 150);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  outline: none;
}

input {
  padding: 1%;
  padding-left: 2%;
  border-radius: 10px;
  outline: none;
}

form {
  margin: 0 20%;
}

</style>

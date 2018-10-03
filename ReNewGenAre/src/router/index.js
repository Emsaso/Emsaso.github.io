import firebase from 'firebase';
//import Bluetooth from '@/bluetooth/BluetoothTest1';
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Home from '@/components/Home';
import Charge from '@/components/ChargePage';
import BuyCharge from '@/components/ChargeStore';
import StartCharge from '@/components/StartChargePage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/chargePage',
      name: 'Charge',
      component: Charge
    },
    {
      path: '/chargeStore',
      name: 'BuyCharge',
      component: BuyCharge
    },
    {
      path: '/startChargePage',
      name: 'StartCharge',
      component: StartCharge
    }
  ]
});

// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      // User is signed in. Proceed to route
      next();
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'Index'
      });
    }
  } else {
    // if route is not guarded by auth, proceed
    next();
  }
});

export default router;
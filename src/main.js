import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import firebase from "firebase/compat";
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAiwPdc14JpKWb2jILarkJTnaVxXOho0IA",
    authDomain: "habit-tracker-52b34.firebaseapp.com",
    projectId: "habit-tracker-52b34",
    storageBucket: "habit-tracker-52b34.appspot.com",
    messagingSenderId: "695175740641",
    appId: "1:695175740641:web:dd66185ed8a37bf1f1cba0",
    measurementId: "G-JHKQMVF50Y"
};

firebase.initializeApp(firebaseConfig);
// firebase.auth().onAuthStateChanged(()=> {
//
// })

Vue.config.productionTip = false;

Vue.use(vuetify, {
    iconfont: 'mdi'
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

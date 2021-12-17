<template>
  <div id="app">
       <Header />
      <Home />
       <Aboutus />
       <how />
       <faq />
       <usersection />
       <!-- <currency/> -->
       <Contactus />
      
          <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Aboutus from './components/Aboutus.vue'
import how from './components/how.vue'
import faq from './components/faq.vue'

import usersection from './components/usersection.vue'
// import currency from './components/currency.vue'
import Contactus from './components/Contactus.vue'

import Footer from './components/Footer.vue'
import './main.css'; 

import './assets/css/main.css'; 
import './assets/css/app.css'; 

import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
import './assets/css/review/style.css'; 


 


export default {
  name: 'App',
  components: {
    Header,
     Home,
     Aboutus,
     how,
     faq,
    usersection,
    // currency,
    Contactus,

     Footer

  }
}
</script>

<style>

</style>

<template>
    <div class="login">
      <Header/>
      <LogIn/>
      <Footer/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import LogIn from '@/components/LogIn.vue'
  
  
  export default {
    name: 'LogInView',
    components: {
      Header,
      Footer,
      HelloWorld,
      LogIn
    }
  }
  </script>
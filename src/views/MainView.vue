<template>
  <div class="main">
    <Header/>
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Posts/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Posts from '@/components/Posts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'View',
  components: {
    HelloWorld,
    Header,
    Posts,
    Footer
  }
}
</script>

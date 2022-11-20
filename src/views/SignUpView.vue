<template>
  <div class="signup">
    <Header/>
    <Posts/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'SignUpView',
  components: {
    Header,
    Footer,
    Posts,
    HelloWorld
  }
}
</script>
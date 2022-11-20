<template>
  <div class="signup">
    <Header/>
    <Form/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Form from '@/components/Form.vue'


export default {
  name: 'SignUpView',
  components: {
    Header,
    Footer,
    HelloWorld,
    Form
  }
}
</script>
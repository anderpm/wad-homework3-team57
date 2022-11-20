<template>
  <div class="main">
    <Header />
    <LeftSide />
    <Post />
    <Button v-on:click="ResetAllLikes">Reset likes</Button>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Post from '@/components/Post.vue'
import Footer from '@/components/Footer.vue'
import LeftSide from '@/components/LeftSide.vue'

export default {
  name: 'View',
  methods: {
    ResetAllLikes: function () {
      this.$store.dispatch("ResetAllLikes")
    }
  },  
  components: {
    HelloWorld,
    Header,
    Post,
    Footer,
    LeftSide
  }
}
</script>

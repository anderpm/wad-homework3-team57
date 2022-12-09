<template>
  <div class="main">
    <Header />
    <div class="middle">
      <div class="left">

      </div>

      <div class="center">
        <Post />
      </div>

      <div class="right">

      </div>
    </div>

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

<style>

.middle {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      margin-left: 5px;
      margin-right: 5px;
  }

  .left{
      display: inline;
      margin-right: 10px;
      background-color: rgb(192, 192, 192);
      border-radius: 15px;
      margin-top: 70px;
  }

  .center{
      display: inline;
      margin-right: 10px;
      margin-bottom: -10px;
      height: auto;
      width: auto;
  }

  .right{
    display: inline;
    background-color: rgb(192, 192, 192);
    border-radius: 15px;
    margin-top: 70px;
}

  /* 
    Applies when the browser's width is 0px wide or wider and less than 500px: 
  */
  @media (min-width: 0px) and (max-width: 500px){

  .left {
      display: none;
  }
  .center{
      width: 100%;
      margin-left: auto;
      margin-right: auto;
  }
  .right {
      display: none;
  }

  }

  /* 
  Applies when the browser's width is 500px wide or wider: 
  */
  @media (min-width: 500px) {

  .left {
      width: 20%;
  }
  .center{
      width: 60%;
  }
  .right {
      width: 20%;
  }

  }
</style>
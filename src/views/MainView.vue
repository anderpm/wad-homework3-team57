<template>
  <div class="main">
    <Header/>
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Post postId=1, authorId=10, authorName="Mikel Oyarzabal" createTime="Oct 24, 2022" comment="Tartu 2022" likes=21 photo="../assests/tartu.jpg"/>
    <Post postId=2, authorId=7, authorName="Cristiano Ronaldo" createTime="Oct 6, 2022" comment="Anyone knows in which room is the lab today?" likes=384 photo=""/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Post from '@/components/Post.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'View',
  components: {
    HelloWorld,
    Header,
    Post,
    Footer
  }
}
</script>

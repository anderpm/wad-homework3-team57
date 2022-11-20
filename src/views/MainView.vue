<template>
  <div class="main">
    <Header/>
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Post postId=1, authorId=10, authorName="Mikel Oyarzabal" createTime="Oct 24, 2022" comment="Tartu 2022" likes=21 photo="../assets/tartu.jpg"/>
    <Post postId=2, authorId=7, authorName="Cristiano Ronaldo" createTime="Oct 6, 2022" comment="Anyone knows in which room is the lab today?" likes=384 photo=""/>
    <Post postId=3, authorId=20, authorName="Aritz Basurco" createTime="Oct 23, 2022" comment="Fox, one of my favorite animals" likes=21 photo="../assets/fox.jpg"/>
    <Post postId=4, authorId=22, authorName="Ander Pollacino" createTime="Oct 22, 2022" comment="San Sebastian" likes=21 photo="../assets/ss.jpg"/>
    <Post postId=5, authorId=19, authorName="Alo Vahtre" createTime="Oct 2, 2022" comment="Tallin, the capital of Estonia" likes=384 photo="../assets/tallin.jpg"/>
    <Post postId=6, authorId=23, authorName="Victoria Federica" createTime="Oct 3, 2022" comment="I'm hungry" likes=1000 photo=""/>
    <Post postId=7, authorId=24, authorName="German Garmendia" createTime="Oct 31, 2022" comment="I love you" likes=2 photo=""/>
    <Post postId=8, authorId=25, authorName="Vinicius Jr" createTime="Oct 3, 2022" comment="The planet earth turns slowly" likes=800 photo=""/>
    <Post postId=9, authorId=26, authorName="Africa Maria" createTime="Oct 18, 2022" comment="I'm a Swiftie" likes=3000 photo=""/>
    <Post postId=10, authorId=27, authorName="Sofia Bravo" createTime="Oct 2, 2022" comment="I need a pug i'm my life" likes=2 photo=""/>
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

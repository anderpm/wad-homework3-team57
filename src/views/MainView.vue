<template>
  <div class="main">
    <Header/>
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="middle">

      <div class="left">

      </div>

      <div class="center">
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
      </div>

      <div class="right">

      </div>
    </div>

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
      margin-top: 70px;
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
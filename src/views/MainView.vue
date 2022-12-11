<template>
  <div class="main">
    <Header/>
    <div class="middle">
      <div class="left">

      </div>

      <div class="center">
        <button class="bLogout" v-if = "authResult" @click="Logout">Logout</button>
        
        <Post />
        <div class="dButtons">
          <router-link to="/addpost" custom v-slot="{ navigate }"><button class="bAddpost" @click="navigate" role="link">Add posts</button></router-link>
          <button type="button" class="bDeleteall" @click="DeleteAllPosts">Delete all</button>
        </div>
      </div>

      <div class="right">

      </div>
    </div>

    <!--<Button v-on:click="ResetAllLikes">Reset likes</Button>-->
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
import LinkButton from '@/components/LinkButton.vue'
import auth from "../auth";

export default {
  name: 'View',
  components: {
    HelloWorld,
    Header,
    Post,
    Footer,
    LeftSide,
    LinkButton
  },
  data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },

  methods: {
    ResetAllLikes: function () {
      this.$store.dispatch("ResetAllLikes")
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },

    DeleteAllPosts(){
      fetch("http://localhost:3000/api/posts/all", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
  }, 

  mounted() {
        fetch('http://localhost:3000/api/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
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
    margin-top: 80px;
  }

  .center{
    display: inline;
    margin-right: 10px;
    margin-bottom: -10px;
    height: auto;
    width: auto;
  }

  button {
        background-color: #81a8d7;
        border: none;
        color: rgb(0, 0, 0);
        padding: 5px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 25px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 25px;
    }

  .center .bLogout{
    margin-top: 80px;
    margin-bottom: -100px;
  }
  
  .center .dButtons .bAddpost{
    display: inline-block;
    float: left;
    margin-left: 10%;
    margin-bottom: 10px;
  }

  .center .dButtons .bDeleteall{
    display: inline-block;
    float: right;
    margin-right: 10%;
    margin-bottom: 5px;
  }

  .right{
    display: inline;
    background-color: rgb(192, 192, 192);
    border-radius: 15px;
    margin-top: 80px;
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
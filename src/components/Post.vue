<template>

    <div class="center">
        <div class="post">
            <div class="postAddon"></div>
            
        </div>
        
        <div class="post" v-for="post in postList" :key="post.postId"  :id="post.postId">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="../assets/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date">{{ post.createTime }}</p>
            </div>
            <img class="photo" src="../assets/tartu.jpg" alt="Post photo"><a></a>
            <p class="comment">{{ post.comment }}</p>
            <div >
                <img class="like" src="../assets/like.png" v-on:click="LikeButtonPressed" :id="post.postId" alt="Like button">
                <span class="likes">{{ post.likes }}</span>
             </div>
            
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: ["postList"],
  computed: {
    postList(){
        return this.$store.state.postList
      }
  },
methods: {
    LikeButtonPressed: function(event){
        console.log(event.currentTarget.id)
        var id = event.currentTarget.id
        this.$store.dispatch("PostLiked", {postid: id})
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .post{
        margin-bottom: 10px;
        background-color: rgb(218, 214, 214);
        border-radius: 15px;
        text-align: left;
    }

    .post .postHeader .logoPost{
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
    }

    .post .postHeader .date {
        display: inline-block;
        vertical-align: top;
        float: right;
        margin-right: 20px;
        font-size: 20px;
        color: black;
    }

    .post .photo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      color: black;
      text-align: center;
    }

    .post .comment {
        margin-left: 10px;
        color: black;
        font-size: 20px;
    }

    .post .postAddon {
        margin-bottom: 90px;
    }

    .like {
        margin-left: 10px;
        margin-bottom: 5px;
        width: 50px;
    }

    .likes {
        margin-left: 10px;
        margin-bottom: 10px;
        width: 25px;
        font-weight: 800;
    }

    .like:hover{
        cursor: pointer
    }
</style>

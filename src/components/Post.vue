<template>

    <div class="post">
        <div class="postHeader">
            <a class="logoPost" href="#"><img src="../assets/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
            <p class="date">{{createTime}}</p>
        </div>
        <img class="photo" src="{{photo}}" alt="Post photo"><a></a>
        <p class="comment">{{comment}}</p>
        <img class="like" src="../assets/like.png" alt="Like button"><a></a>
    </div>
       
</template>

<script>
export default {
  name: 'Post',
  props: {
    postId: Number,
    authorId: Number,
    authorName: String,
    createTime: String,
    comment: String,
    likes: Number,
    photo: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .post{
        margin-bottom: 10px;
        background-color: rgb(218, 214, 214);
        border-radius: 15px;
    }

    .post .postHeader .logoPost{
        display: inline-block;
        margin-top: 5px;
        margin-left: 2%;
    }

    .post .postHeader .date {
        display: inline-block;
        vertical-align: top;
        float: right;
        margin-right: 5%;
    }

    .post .photo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }

    .post .comment {
        margin-left: 10px;
    }

    .post .like {
        margin-left: 10px;
        margin-bottom: 5px;
        width: 5%;
    }

</style>

<template>
  <div class="middle">

    <div class="left">

    </div>

    <div class="center">
        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src="" alt="Post photo"><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src=""><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src="" alt="Post photo"><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src="" alt="Post photo"><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src="" alt="Post photo"><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        
        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src=""><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src=""><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>
        
        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src=""><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>
        
        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src=""><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>

        <div class="post">
            <div class="postHeader">
                <a class="logoPost" href="#"><img src="res/images/user.png" width="50" height="50" alt="Picture of the person who uploaded the post"></a>
                <p class="date"></p>
            </div>
            <img class="photo" src=""><a></a>
            <p class="comment"></p>
            <img class="like" src="../assets/like.png" alt="Like button"><a></a>
        </div>
    </div>

    <div class="right">

    </div>

  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  .center .post{
      margin-bottom: 10px;
      background-color: rgb(218, 214, 214);
      border-radius: 15px;
  }

  .center .post .postHeader .logoPost{
      display: inline-block;
      margin-top: 5px;
      margin-left: 2%;
  }

  .center .post .postHeader .date {
      display: inline-block;
      vertical-align: top;
      float: right;
      margin-right: 5%;
  }

  .center .post .photo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
  }

  .center .post .comment {
      margin-left: 10px;
  }

  .center .post .like {
      margin-left: 10px;
      margin-bottom: 5px;
      width: 5%;
  }

  .right{
      display: inline;
      background-color: rgb(192, 192, 192);
      border-radius: 15px;
      margin-top: 70px;
  }

  /* 
    Applies when the browser's width is 0px wide or wider: 
*/
@media (min-width: 0px) {

.header,
.nav {
    display: flex;
}

.header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

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

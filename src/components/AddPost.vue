<template>
  <div class="center">  
    <div class="greenDiv">
      <h1 class="title">Add Post</h1>
      <form class="form"> 
        <label>Body</label>
        <input type="body" name="body" v-model="body" placeholder="body" id="inputbody"><br>
        <input type="submit" name="add" value="Add" id="add">
      </form>
    </div>
  </div>
</template>
    
<script>
  export default {
    name: 'AddPost',
    props: {
    },
    data(){
    }
  }
</script>
    
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  h1{
    color:black;
  }

  .title{
    display: block;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  label{
    font-size: 30px;
    color:black;
  }

  .form input[type = "body"] {
        display: block;
        padding: 10px 9px;
        width: 80%;
        border-radius: 5px;
        border-color: white;
        text-align: center;
        margin-left: 8%;
        height:5%; 
        width:80%;
        margin-top: 20px;
        margin-bottom: 40px;
      }

  .form input[type = "submit"] {
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

  .center{
    display: flex;
    height: 500px;
    background-color: rgb(218, 214, 214);
    border-radius: 15px;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 0px;
  }

  .greenDiv{
    border-radius: 15px;
    background-color: rgb(224, 255, 215);
    width: 80%;
    height: 400px;
    margin: auto;
    margin-top: 50px;
  }

</style>
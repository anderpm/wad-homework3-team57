<template>
    <div class="header">
        <h1>{{ msg }}</h1>
        <ul class="nav">
            <li><router-link to="/" class="link">Main</router-link></li>
            <li><a class="verticalBar">|</a></li>
            <li><router-link to="/contacts" class="link">Contacts</router-link></li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    
    .nav {
        margin-top: 7px;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .nav .link {
        padding: 10px 15px;
        text-align: center;
        display: block;
        color: #000000 ;
        font-size: 25px;
    }

    .nav .verticalBar{
        padding: 10px 15px;
        text-align: center;
        display: block;
        color: #000000;
        font-size: .99em;
    }

    .nav .link:hover {
        -moz-border-radius-topleft: 10px;
        -moz-border-radius-topright: 10px;
        -moz-border-radius-bottomright: 10px;
        -moz-border-radius-bottomleft: 10px;
        -webkit-border-radius: 10px 10px 10px 10px;
        border-radius: 10px 10px 10px 10px;
        background-color:rgb(122, 122, 122);
        color: #000000;
    }

    .link {
        color: #000000;
        text-decoration: none;
    }

    /* class selectors */
    .header {
        padding-bottom: .5em;   
        background-color: rgb(192, 192, 192);
        border-radius: 15px;
        margin-left: 5px;
        margin-right: 5px;
        position: fixed;
        width: 99.4%;
        top:0px;
        right: 0px;
        /*
        border: 1px solid #646174;
        box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
        */
    }
</style>
  
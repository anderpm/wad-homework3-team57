<template>
    <div class="contacts">
        <Header />
        <div class="middle">
        <div class="left">

        </div>

        <Contacts/>

        <div class="right">

        </div>
        </div>
        <Footer />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import Contacts from '@/components/Contacts.vue'
  
  
  export default {
    name: 'ContactsView',
    components: {
      Header,
      Footer,
      HelloWorld,
      Contacts
    }
  }
  </script>ç
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
<template>
    <div class="footer">
        <!--<img class="tartuLogo" alt="Tartu Ülikool logo" src="../assets/tartuÜlikool.png">-->
        <a href="https://ut.ee/en">Tartu Ülikool</a><br>
        <a>Website created using</a> <a href="https://vuejs.org/">Vue.js</a><br>
        <a>&copy; WAD2022</a> <a href="https://github.com/anderpm/wad-homework3-team57">Team 57</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .footer {
        padding-top: .5em;
        padding-bottom: .5em;
        background-color: rgb(192, 192, 192);
        border-radius: 5px;
        text-align: center;
        border-radius: 15px;
        margin-top: 10px;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 5px;
        color: black;
        font-size: 16px;
        line-height: 25px;
    }

</style>
  
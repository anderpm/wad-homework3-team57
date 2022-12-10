<template>
    <div>
        <a :href="'/#' + link"><button class="button">{{buttonMsg}}</button></a>
    </div>
</template>
  
<script>
    export default {
        name: 'LinkButton',
        props: {
            link: String,
            buttonMsg: String
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .button {
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

</style>
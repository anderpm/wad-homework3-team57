<template>
    <form class="form" > 

        <input type="email" name="email" v-model="email" @input="validateEmail" placeholder="Email" id="inputemail"><br>
        <input type="password" v-model="password" @input="checkPassword"  autocomplete="off" placeholder="Password" /><br>
        <input type="submit" name="login" placeholder="Login" value="Login" id="submit" :disabled="!valid_password"><br>
        <p class = "error" v-if="!this.valid_mail">Email is invalid!</p>
        <p class = "error" v-if="!this.valid_password">Password is invalid!</p>

    </form>
  </template>
  
  <script>
  export default {
    name: 'Form',
    props: {
        email: "",
        password: null,
        alert: "",
        contains_eight_characters: false,
        over15: false,
        contains_uppercase: false,
        contains_special_character: false,
        valid_password: true,
        valid_mail: true,
        specialChar: false
    },
    data(){
      return{
        password: null,
        password_length: 0,
        contains_eight_characters: false,
        contains_number: false,
        contains_uppercase: false,
        contains_special_character: false,
        valid_password: true,
        valid_mail: true,
        email: '',
        specialChar: false
      }
    },
  
methods: {
  validateEmail() {
    console.log(this.email)
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.email.length > 5){
      console.log("here")
      this.valid_mail = format.test(this.email)
    }else{
      this.valid_mail = true
    }
  }
  ,
    
  checkPassword() {
    this.password_length = this.password.length;
    const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    this.specialChar = format.test(this.password)

    if (this.password_length < 8) {
      this.over8 = false;
    }else{
      this.over8 = true;
    }
    if (this.password_length > 14) {
      this.under15 = false;
    }else{
      this.under15 = true;
    }

    if(this.password.length > 1){
      this.valid_password = this.specialChar && this.over8 && this.under15

    }
    console.log(this.valid_password)
    
  }
    
}
} 
  </script>

  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .form {
      margin-top: 100px;
    }

    .error{
      color:darkred;
      font-weight: 800;
    }

    /* class selectors */


</style>
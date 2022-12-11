<template>
    <div class="post">
      <form class="form" > 
        
        <label>Email: </label>
        <input type="email" name="email" v-model="email" @input="validateEmail" placeholder="Email" id="inputemail"><br>
    
    
        <label>Password: </label>
        <input type="password" v-model="password" @input="checkPassword"  autocomplete="off" placeholder="Password" /><br>
        <ul class="nav">
            <button @click="LogIn" id="submit"  class="button">LogIn</button>
            <li> or</li>
            <li><router-link to="/signup" class="link"><button class="button">Singup</button></router-link></li>
        </ul>
        <p class = "error" v-if="!this.valid_mail">Email is invalid!</p>
        <p class = "error" v-if="!this.valid_password">Password is invalid!</p>
  
      </form>
    </div>
</template>
    
  <script>
    export default {
      name: 'LogIn',
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
    // validateEmail() {
    //   console.log(this.email)
    //   const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   if(this.email.length > 5){
    //     console.log("here")
    //     this.valid_mail = format.test(this.email)
    //   }else{
    //     this.valid_mail = true
    //   }
    // }
    // ,
      
    // checkPassword() {
    //   this.password_length = this.password.length;
    //   const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    //   this.specialChar = format.test(this.password)
  
    //   if (this.password_length < 8) {
    //     this.over8 = false;
    //   }else{
    //     this.over8 = true;
    //   }
    //   if (this.password_length > 14) {
    //     this.under15 = false;
    //   }else{
    //     this.under15 = true;
    //   }
  
    //   if(this.password.length > 1){
    //     this.valid_password = this.specialChar && this.over8 && this.under15
  
    //   }
    //   console.log(this.valid_password)
      
    // }, 
    LoggedIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
      
  }
  } 
    </script>
  
    
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  
      ul {
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: center;
      }
  
      li {
          display: inline-block;
          margin: 0 10%;
      }
  
      label{
        font-size: 30px;
        margin-left: 5%;
      }
  
      .form {
        height: 500px;
        padding: 30px;
        text-align: left;
        background-color: rgb(218, 214, 214);
        border-radius: 15px;
        width: 80%;
        display:table;/* shrinks to fit conntent */
        margin:auto;
        margin-top: 90px;
        
      }
  
      .form input[type = "submit"] {
        background-color: #5d94cf;
        border: 0px;
        color: white;
        height: 30px;
        width: 75px;
        margin-top: 12px;
        border-radius: 5px;
        cursor: auto;
        margin-left: 46%;
      }
  
      .form input[type = "email"], .form input[type = "password"] {
        display: block;
        padding: 10px 9px;
        width: 80%;
        border-radius: 5px;
        border-color: white;
        text-align: center;
        margin-left: 8%;
        height:5%; 
        width:80%;
      }
      .post{
          background-color: rgb(192, 192, 192);
          border-radius: 15px;
          text-align: left;
      }
      .error{
        color:darkred;
        font-weight: 800;
      }

      .button{
        background-color: #5d94cf;
        border: 0px;
        color: white;
        height: 30px;
        width: 75px;
        margin-top: 12px;
        border-radius: 5px;
        cursor: auto;
      }
  
      /* class selectors */
  
  
  </style>
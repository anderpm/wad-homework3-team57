<template>
    <form class="form" > 

        <input type="email" name="email" placeholder="Email" id="inputemail" v-model="email">
        <input type="password" name="password" placeholder="Password" id="inputpassword">
        <input type="submit" name="login" placeholder="Login" value="Login" id="submit" disabled> 

    </form>
  </template>
  
  <script>
  export default {
    name: 'Form',
    props: {
        email: "",
        password: "",
        alert: ""
    },
  
  
methods: {
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return
      } else {
        alert("Email invalid!")
      }
    }
    },
    checkPassword() {
    this.password_length = this.password.length;
	const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
			
    if (this.password_length < 8) {
        alert("Password has less than 8 characters")
    } if (this.password_length > 14) {
        alert("Password has 15 characters or more ")
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

    /* class selectors */


</style>
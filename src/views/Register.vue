<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="outer-container">
        <img src="@/assets/logo_cleanup.jpg">
        <div class="container">
            <p id="title">𝕭𝖍𝖆𝖛𝖆𝖌𝖆𝖉 𝕲𝖎𝖙𝖆</p>
            <p class="logo">Welcome to Spirituality world</p>
            <div>
                <!--div class="form-group">
                    <label style="margin-right: 70%;" for="username">
                        USERNAME
                    </label>
                    <input type="text" id="username" name="username" required>
                </div-->
                <div class="form-group">
                    <label style="margin-right: 83%;" for="email">
                        EMAIL
                    </label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password" style="margin-right: 70%;">
                        PASSWORD
                    </label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="confirm-password">CONFIRM PASSWORD</label>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                </div>
                <button type="submit" @click="registerUser">REGISTER</button>
                <p class="signin">
                    Already registered? <a href="/">Sign-In</a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.signin {
    margin-top: 15px;
}

.signin a {
    text-decoration: underline;
    margin-top: 0px;
    color: #4CAF50;
}

#title{
    font-size: 35px;
    margin-bottom: 8%;
    margin-top: 3px;
}

.logo {
    font-size: 1.5rem;
    margin-bottom: 10%;
}

.container {
    width: 400px;
    background-color: #fff;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    border-radius: 4px;
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);*/
}

/*h1 {
    margin-top: 10px;
    text-align: center;
    margin-bottom: 35px;
}*/

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-right: 47%;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
    font-size: 18px;
    border-radius: 4px;
}

button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}

button[type="submit"]:hover {
    background-color: #0069d9;
}

.outer-container{
    display: flex;
    gap: 0px;
}

img{
    width: 68%;
    height: 97.1vh;
}
</style>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  methods: {
    registerUser () {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const confirmPassword = document.getElementById('confirm-password').value
      if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
      }
      axios.post('https://gita-esbz.onrender.com/user/register/', {
        email,
        password
      },{
        crossdomain: true
      }).then(async (response) => {
        // console.log(response)
        if (response.data.message === 'success') {
          await alert('User registered successfully')
          this.$router.push('/')
        } else if (response.data.message === 'Failed to Register User') {
          alert('Failed to register user')
        }
      }).catch(error => {
        alert(error.response.data.message)
      })
    }
  }
}
</script>

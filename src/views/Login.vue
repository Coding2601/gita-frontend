<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="div">
        <div>
            <img src="@/assets/3.jpg"/>
        </div>
        <div class="container">
            <p id="title">𝕭𝖍𝖆𝖛𝖆𝖌𝖆𝖉 𝕲𝖎𝖙𝖆</p>
            <p class="logo">Welcome to Bhavagad Gita</p>
            <div class="form">
                <label for="email">Email-ID</label>
                <input type="text" id="email" name="username" required>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>

                <button type="submit" @click="handleSubmit">Sign in</button>
                <!--a id="forgot" href="#">Forgot password?</a-->
                <div class="g-signin2"></div>
            </div>
            <p style="margin-left: 6%">——————or——————</p>
            <p class="signup">
                New User? <a href="/register">Create Account</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: white;
    margin: 0;
    padding: 0;
}

#title{
    font-size: 35px;
    margin-top: 30%;
    margin-bottom: 15%;
}

.container {
    width: 300px;
    background-color: #fff;
    margin: 5% auto;
    padding-left: 3%;
    padding-right: 5%;
    border-radius: 4px;
    text-align: center;
}

.logo {
    font-size: 1.5rem;
    margin-bottom: 15%;
}

.form {
    margin-top: 1rem;
}

label {
    margin-right: 78%;
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input[type="text"], input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
    font-size: 15px;
    border-bottom: 1.4px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
}

button[type="submit"] {
    width: 100%;
    padding: 0.6rem;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    font-size: 18px;
    margin-left: 12px;
    margin-top: 20px;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #45a049;
}

a {
    color: #4CAF50;
    text-decoration: none;
    margin-top: 1.2rem;
    display: block;
}

#forgot{
    margin-left: 50%;
}

.signup {
    margin-left: 20%;
    display: flex;
    gap: 0.3rem;
    margin-top: 1rem;
    font-size: 1rem;
}

.signup a {
    text-decoration: underline;
    margin-top: 0rem;
    color: #4CAF50;
}

img{
    width: 100%;
    margin-left: 0%;
    margin-top: 7%;
    height: 97.2vh;
}

#div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 87vh;
    width: 100%;
}
</style>

<script>
import axios from 'axios'
import { previousRoute } from '@/router/index.js'

axios.defaults.withCredentials = true;

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data () {
    return {
      previousPage: previousRoute
    }
  },
  mounted () {
    this.persistent()
  },
  methods: {
    handleSubmit () {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      axios.post('https://gita-esbz.onrender.com/user/login/', {
        email: email,
        password: password
      },{
        crossdomain: true
      },{
        withCredentials: true
      }).then((res) => {
        if (res.data.message === 'success') {
          this.$router.push('/home')
        } else if (res.data.message === 'User not found') {
          alert('User not found')
        } else {
          alert('Invalid Credentials')
        }
      })
    },
    persistent () {
      // if (this.previousPage === '/') {
      axios.get('https://gita-esbz.onrender.com/user/protection/',{
        crossdomain: true
      },{
        withCredentials: true
      }).then((res) => {
        if (res.data.message === 'Verified') {
          this.$router.push('/home')
        }
      })
      // }
    }
  }
}
</script>

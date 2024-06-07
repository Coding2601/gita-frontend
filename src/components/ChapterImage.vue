// eslint-disable-next-line vue/valid-template-root
<template>
  <div class="container">
    <i class="far fa-heart" id="heart" @click="toggleFavourite"/>
    <div class="sloka" id="sub-con">{{ sloka }}</div>
    <aside class="aside-section" id="sub-con">
      <img :src="require(`./images/image ${chpt_no}.jpg`)" alt="Chapter Image" />
      <p class="name">{{ chpt_no }}.{{ chapterName }}</p>
    </aside>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #heart{
      color: red;
      margin-top: 2%;
      font-size: 40px;
      margin-right: 93.5%;
  }
  .sloka{
    margin-right: 340px;
    font-weight: 540;
    font-size: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    margin-top: 180px;
  }
  .name{
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    margin-left: 70%;
    margin-bottom: 10px;
  }
  img{
    margin-left: 70%;
    width: 25%;
    margin-top: -220px;
    height: 165%;
  }
  .container{
    display: flex;
  }
  #sub-con{
    flex: 1;
    background-color: white;
  }
</style>

<script>
import axios from 'axios'
export default {
  name: 'ChapterImage',
  props: ['chpt_no', 'chapterName', 'sloka', 'verse_no'],
  data () {
    return {
      username: ''
    }
  },
  mounted () {
    this.check_favourite()
  },
  methods: {
    async check_favourite () {
      // eslint-disable-next-line camelcase
      const res_1 = await axios.get('https://gita-esbz.onrender.com/user/protection/', {
        crossdomain: true
      })
      console.log(res_1)
      if (res_1.data.message !== 'Verified') {
        this.$router.push('/')
      }
      this.username = res_1.data.decoded.username
      const res = await axios.get(`https://gita-esbz.onrender.com/manager/get_favourite/${res_1.data.decoded.username}`,{
          crossdomain: true
        })
      if (res.data.favourites.includes(String(this.chpt_no) + '.' + String(this.verse_no))) {
        console.log(true)
        document.getElementById('heart').classList = 'fas fa-heart'
      }
    },
    async toggleFavourite (e) {
      const x = String(this.chpt_no) + '.' + String(this.verse_no)
      const object = {
        username: this.username,
        data: x
      }
      if (e.target.classList[0] === 'far') {
        e.target.classList = 'fas fa-heart'
        await axios.post('https://gita-esbz.onrender.com/manager/add_favourite/', {
          data: object
        },{
          crossdomain: true
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        e.target.classList = 'far fa-heart'
        await axios.post('https://gita-esbz.onrender.com/manager/remove_favourite/', {
          data: object
        },{
          crossdomain: true
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>

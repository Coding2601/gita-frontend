<!-- eslint-disable vue/no-parsing-error -->
// eslint-disable-next-line vue/valid-template-root
<template>
  <div class="container">
    <div class="verse" id="sub-con">
      <i class="far fa-bookmark" id="bookmark" :style="{ color: clicked ? 'red' : 'black' }"  @click="toggleBookmark" />
      {{ verse }}
    </div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #bookmark {
    margin-top: 1%;
    font-size: 40px;
    margin-right: 93.5%;
  }
  #sub-con{
      display: grid;
      grid-row-gap: 20px;
  }
  .verse{
    background-color: white;
    padding: 18px;
    border-radius: 20px;
    padding-bottom: 40px;
    line-height: 200%;
    font-size: 20px;
    margin-top: 2.9%;
  }
  .name{
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  img{
    width: 75%;
    height: 80%;
  }
</style>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Verse',
  props: ['verse', 'chpt_no', 'verse_no'],
  data () {
    return {
      clicked: false,
      username: ''
    }
  },
  mounted () {
    this.check_bookmark()
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/verse/${this.chpt_no}/${id}`)
    },
    async check_bookmark () {
      // eslint-disable-next-line camelcase
      const res_1 = await axios.get('https://gita-esbz.onrender.com/user/protection/', {crossdomain: true})
      console.log(res_1)
      if (res_1.data.message !== 'Verified') {
        this.$router.push('/')
      }
      this.username = res_1.data.decoded.username
      const res = await axios.get(`https://gita-esbz.onrender.com/manager/get_bookmark/${res_1.data.decoded.username}`,{
          crossdomain: true
        })
      if (res.data.bookmarks.includes(String(this.chpt_no) + '.' + String(this.$route.params.verse))) {
        document.getElementById('bookmark').classList = 'fas fa-bookmark'
      }
    },
    async toggleBookmark (e) {
      this.clicked = !this.clicked
      const x = String(this.chpt_no) + '.' + String(this.verse_no)
      const object = {
        data: x,
        username: this.username
      }
      if (e.target.classList[0] === 'fas') {
        e.target.classList = 'far fa-bookmark'
        await axios.post('https://gita-esbz.onrender.com/manager/remove_bookmark/', {
          data: object
        },{
          crossdomain: true
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        e.target.classList = 'fas fa-bookmark'
        console.log(this.username)
        await axios.post('https://gita-esbz.onrender.com/manager/add_bookmark/', {
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

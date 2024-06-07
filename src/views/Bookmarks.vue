<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <Krishna/>
    <div id="root">
      <Book v-for="item in items" :chpt_no="item.chpt_no" :verse_no="item.verse_no" :name="item.name"/>
    </div>
  </div>
</template>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #root{
    display: grid;
    grid-column-gap: 210px;
    grid-row-gap: 100px;
    grid-template-columns: repeat(3, 1fr);
    padding: 25px;
  }
</style>

<script>
import Krishna from '@/components/Krishna.vue'
import Book from '@/components/Book.vue'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Bookmarks',
  components: { Krishna, Book },
  data: () => {
    return {
      items: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      // eslint-disable-next-line camelcase
      const res_1 = await axios.get('https://gita-esbz.onrender.com/user/protection/', {
        crossdomain: true
      })
      console.log(res_1)
      if (res_1.data.message !== 'Verified') {
        this.$router.push('/')
      }
      const res = await axios.get(`https://gita-esbz.onrender.com/manager/get_bookmark/${res_1.data.decoded.username}`,{
          crossdomain: true
        })
      for (let i = 0; i < res.data.bookmarks.length; i++) {
        const x = res.data.bookmarks[i].split('.')
        const name = await axios.get('https://gita-esbz.onrender.com/getChapterName', {
          crossdomain: true
        })
        this.items.push({ chpt_no: x[0], verse_no: x[1], name: name.data.names[x[0] - 1] })
      }
      // console.log(res)
      // console.log(this.items)
    }
  }
}
</script>

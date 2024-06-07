<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable indent -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-trailing-spaces -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <Krishna/>
    <div>
      <div id="root">
          <Favour v-for="item in items" :chpt_no="item.chpt_no" :verse_no="item.verse_no" :name="item.name"/>
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
import Favour from '@/components/Favour.vue'
import axios from 'axios'

export default {
  // eslint-disable-next-line indent, vue/multi-word-component-names
  name: 'Favourite',
  components: { Krishna, Favour },
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
      console.log(document.cookie)
      if (res_1.data.message !== 'Verified') {
        this.$router.push('/')
      }
      const res = await axios.get(`https://gita-esbz.onrender.com/manager/get_favourite/${res_1.data.decoded.username}`,{
          crossdomain: true
        })
      for (let i = 0; i < res.data.favourites.length; i++) {
        const x = res.data.favourites[i].split('.')
        const name = await axios.get('https://gita-esbz.onrender.com/getChapterName', {
          crossdomain: true
        })
        this.items.push({ chpt_no: x[0], verse_no: x[1], name: name.data.names[x[0] - 1] })
      }
      console.log(res.data.data)
      console.log(this.items)
    }
  }
}
</script>

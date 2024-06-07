<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable no-trailing-spaces -->
<template>
    <div id="root">
      <button id="chapter" v-for="item in items" :key="item.id" @click="handleClick(item.id+1)">
        <span>Chapter {{ item.id + 1}}</span>
        <br><br>
        <span>{{ item.name }}</span>
      </button>
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
  #chapter {
    cursor: pointer;
    background-color: beige;
    border: none;
    font-style: bold;
    border-radius: 10px;
    width: 250px;
    height: 290px;
    padding: 10px;
    font-size: 23px;
  }
</style>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Chapters',
  data: () => {
    return {
      items: []
    }
  },
  mounted () {
    this.chapterName()
  },
  methods: {
    async chapterName () {
      const res = await axios.get('https://gita-esbz.onrender.com/getChapterName', { crossdomain: true })
      if(typeof process !== 'undefined' && process.cwd){
        console.log(process.cwd());
      }
      for (let i = 0; i < res.data.names.length; i++) {
        const a = i + 1
        this.items.push({ id: i, name: res.data.names[i], url: `/Users/Ravi Mishra/OneDrive/Documents/Learning/bhagavad-gita/src/images/image ${a}.jpg` })
      }
      // console.log(this.items)
      // console.log(__dirname)
    },
    // eslint-disable-next-line camelcase
    handleClick (chpt_no) {
      // eslint-disable-next-line camelcase
      this.$router.push(`/chapter/${chpt_no}/verse/1`)
    }
  }
}
</script>

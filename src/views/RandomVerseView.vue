<template>
  <Krishna/>
  <div>
    <div id="root">
      <div class="container">
        <ChapterImage id="sub-con" :verse_no="this.verse_no
        " :chpt_no="this.chpt_no+1" :chapterName="chapterName"
        :sloka="sans_sloka"/>
        <Translation class="trans" :eng_sloka="eng_sloka"/>
        <Verse id="sub-box" class="content" :verse_no="this.verse_no" :verse="verse" :chpt_no="this.chpt_no+1"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    background-color: whitesmoke;
    padding: 0;
    border-radius: 20px;
  }
  .container{
    display: grid;
  }
  .trans{
    border-radius: 20px;
  }
  .trans span{
    margin-left: 30px;
  }
  .content{
    border-radius: 20px;
    margin-bottom: 10px;
  }
</style>

<script>
import axios from 'axios'
import ChapterImage from '@/components/ChapterImage.vue'
import Krishna from '@/components/Krishna.vue'
import Translation from '@/components/Translation.vue'
import Verse from '@/components/Verse.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Random Verses',
  components: { ChapterImage, Krishna, Translation, Verse },
  data: () => {
    return {
      verse: '',
      chapterName: '',
      chpt_no: 0,
      verse_no: 0,
      eng_sloka: '',
      sans_sloka: ''
      // extra: [1.50, 1.34, 1.75, 0.85, 1.25, 1.20, 3.10, 3.30, 1.27, 2.28, 1.75, 1.5, 2.75, 3.46, 0.95, 0.35, 2.75, 1]
    }
  },
  async mounted () {
    const res = await axios.get('https://gita-esbz.onrender.com/getRandomVerse',{
      crossdomain: true
    })
    // console.log(res.data)
    this.chpt_no = res.data.chpt_no
    if (this.chpt_no + 1 >= 19) window.location.reload()
    this.verse_no = res.data.verse_no
    this.verse = res.data.verse
    this.chapterName = res.data.chapterName
    this.eng_sloka = res.data.eng_sloka
    this.sans_sloka = res.data.sans_sloka
  }
}
</script>

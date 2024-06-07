<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable no-trailing-spaces -->
<template>
    <div id="root">
      <Krishna/>
      <div>
        <div class="container">
          <ChapterImage id="sub-con" :chpt_no="this.$route.params.chapter" :chapterName="chapterName"
          :sloka="sans_sloka" :verse_no="this.verse_no" />
          <Translation :eng_sloka="eng_sloka"/>
          <Table :verse="verse" :num_verses="num_verses" :chpt_no="this.$route.params.chapter"/>
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
</style>

<script>
import axios from 'axios'
import ChapterImage from '@/components/ChapterImage.vue'
// import Verse from '@/components/Verse.vue'
import Krishna from '@/components/Krishna.vue'
import Translation from '@/components/Translation.vue'
import Table from '@/components/Table.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Verses',
  components: { ChapterImage, Krishna, Table, Translation },
  data: () => {
    return {
      verse: '',
      chapterName: '',
      chpt_no: 0,
      verse_no: 0,
      num_verses: 0,
      eng_sloka: '',
      sans_sloka: '',
      height: 0
      // extra: [1.50, 1.34, 1.75, 0.85, 1.25, 1.20, 3.10, 3.30, 1.27, 2.28, 1.75, 1.5, 2.75, 3.46, 0.95, 0.35, 2.75, 1]
    }
  },
  async mounted () {
    const res = await axios.get(`https://gita-esbz.onrender.com/getVerse/${this.$route.params.chapter}/${this.$route.params.verse}`,{
      crossdomain: true
    })
    // console.log(res.data)
    this.chpt_no = this.$route.params.chapter
    this.num_verses = res.data.num_verses
    this.verse_no = this.$route.params.verse
    this.verse = res.data.verse
    this.chapterName = res.data.chapterName
    // eslint-disable-next-line camelcase, no-undef
    this.eng_sloka = res.data.eng_sloka
    // eslint-disable-next-line camelcase, no-undef
    this.sans_sloka = res.data.sans_sloka
  }
  /* methods: {
     async verseName () {
      const res = await axios.get(`/getVerse/${this.$route.params.chapter}/${this.$route.params.verse}`)
      console.log(res.data)
      this.chpt_no = this.$route.params.chapter
      this.num_verses = res.data.num_verses
      this.verse_no = this.$route.params.verse
      this.verse = res.data.verse
      this.chapterName = res.data.chapterName
      // eslint-disable-next-line camelcase, no-undef
      this.eng_sloka = res.data.eng_sloka
      // eslint-disable-next-line camelcase, no-undef
      this.sans_sloka = res.data.sans_sloka
      // this.height = this.num_verses * this.extra[this.chpt_no - 1]
    }
  } */
}
</script>

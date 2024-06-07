<template>
    <aside class="aside-section" id="sub-con">
        <Verse id="sub-box" class="content" :verse_no="this.$route.params.verse" :verse="verse" :chpt_no="this.$route.params.chapter"/>
        <div class="table" id="sub-box">
            <span class="small" v-for="val in num_verses" :key="val">
                <button class="but" style="font-size: 18px;" @click="navigate(this.$route.params.chapter, val)">
                    {{ val }}
                </button>
            </span>
        </div>
    </aside>
</template>

<style scoped>
    *{
        border-radius: 20px;
    }
    .aside-section{
        display: flex;
        gap: 50px;
    }
    .small{
        text-align: center;
        color: black;
        border: 0.001px solid black;
        padding: 0px;
        float: left;
        margin-top: 20px;
    }
    .aside-section{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 20px;
        padding-bottom: 30px;
        float: left;
        margin-top: 20px;
    }
    .but{
        overlay: none;
        background-color: white;
        border-style: none;
        padding: 7px;
        cursor: pointer;
    }
    .but:hover{
        background-color: antiquewhite;
        color: black;
    }
    span{
        margin-right: 20px;
    }
    .table{
        /*border: 0.001px black solid;*/
        padding-left: 25px;
        padding-top: 10px;
        padding-bottom: 25px;
        width: 25%;
        background-color: white;
        border-radius: 20px;
    }
    .content{
        width: 76%;
        margin-top: -20px;
    }
    .aside-section{
        display: flex;
        gap: 50px;
    }
</style>

<script>
import Verse from '@/components/Verse.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Table',
  components: { Verse },
  props: ['verse', 'num_verses', 'chpt_no'],
  methods: {
    // eslint-disable-next-line camelcase
    navigate (chpt_no, id) {
      // eslint-disable-next-line camelcase
      this.$router.push(`/chapter/${chpt_no}/verse/${id}`)
      // eslint-disable-next-line camelcase
      window.location.href = `${id}`
    }
  }
}
</script>

<!-- eslint-disable vue/valid-template-root -->
<template>
    <div id="ele" @click="handleClick(chpt_no, verse_no)">
        <span>Chapter {{ chpt_no }}</span>
        <br/><br/>
        <span>{{ name }}</span>
        <br/><br/>
        <span>Verse {{ verse_no }}</span>
    </div>
</template>

<style scoped>
  #ele{
    cursor: pointer;
    background-color: beige;
    border: none;
    font-style: bold;
    border-radius: 10px;
    width: 250px;
    font-style: bold;
    height: 230px;
    padding-top: 90px;
    font-size: 23px;
  }
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Favour',
  props: ['chpt_no', 'verse_no', 'name'],
  methods: {
    handleClick (x, y) {
      this.$router.push(`/chapter/${x}/verse/${y}`)
      // window.location.href = `/chapter/${x}/verse/${y}`
    }
  }
}
</script>

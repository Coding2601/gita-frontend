<template>
  <div class="root">
    <div>
      <Krishna/>
      <Chapters/>
    </div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #root{
    align-content: center;
    align-items: center;
  }
</style>

<script>
import Chapters from '@/components/Chapters.vue'
import Krishna from '@/components/Krishna.vue'

export default {
  name: 'ChaptersView',
  components: { Chapters, Krishna }
}
</script>

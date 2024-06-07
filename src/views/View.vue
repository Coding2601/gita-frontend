<template>
  <Krishna/>
  <div>
    <div class="home">
      <div class="container">
          <button @click="chapter()" style="width: 22%;padding: 20px;">
            <p style="margin-top: 40px;">Chapters</p>
            <p id="description">
              Browse through all the chapters of Bhagavad-Gita
            </p>
          </button>
          <button @click="random()" style="width: 22%;padding: 20px;">
            <p style="margin-top: 40px;">Random Verse</p>
            <p id="description">
              Read any random verse of Bhagavad-Gita
            </p>
          </button>
          <button @click="bookmark()" style="width: 22%;padding: 20px;">
            <p style="margin-top: 40px;">Bookmarks</p>
            <p id="description">
              Continue reading from where you have left
            </p>
          </button>
          <button @click="favourite()" style="width: 22%;padding: 20px;">
            <p style="margin-top: 40px;">Favourite</p>
            <p id="description">
              Read your favourite verse
            </p>
          </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.home{
  margin: 10px;
  padding: 10px;
  border-radius: 2px;
}
button{
  padding: 20px;
  font-size: 25px;
  overlay: none;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  border: 0.001px solid black;
  transition: border-color 0.3s ease-in-out;
}
button:hover {
  border-color: #1F75FE;
  box-shadow: 0 0 10px #1F75FE;
}
.container{
  display: flex;
  gap: 45px;
  margin-left: 15px;
  margin-top: 40px;
}
#description{
  font-size: 15px;
  margin-top: 150px;
  margin-bottom: 10px;
  color: #333;
}
</style>

<script>
import Krishna from '@/components/Krishna.vue'
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: { Krishna },
  methods: {
    chapter () {
      this.$router.push('/chapters')
    },
    random () {
      this.$router.push('/random-verse')
    },
    bookmark () {
      this.$router.push('/bookmark')
    },
    favourite () {
      this.$router.push('/favourite')
    }
  }
}
</script>

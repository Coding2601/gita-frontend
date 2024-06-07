<!-- eslint-disable vue/multi-word-component-names -->
<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import axios from 'axios'

export default {
  props: {},
  components: { SidebarLink },
  setup () {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  methods: {
    async delete_token () {
      document.cookie = ''
      const res = await axios.post('https://gita-esbz.onrender.com/user/logout/', {
        crossdomain: true
      })
      console.log(res)
    }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <p :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <span v-if="collapsed">
        <i class="fas fa-bars"></i>
      </span>
      <span v-else :style="{ marginRight: '75px' }">
        <i class="fas fa-angle-double-left" :style="{ fontSize: '25px' }">  Close</i>
      </span>
    </p>

    <SidebarLink to="/home" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/chapters" icon="fas fa-book">Chapters</SidebarLink>
    <SidebarLink to="/favourite" icon="fas fa-heart">Favourites</SidebarLink>
    <SidebarLink to="/bookmark" icon="fas fa-bookmark">Bookmarks</SidebarLink>
    <SidebarLink to="/random-verse" icon="fas fa-random">Random-Verse</SidebarLink>
    <SidebarLink @click="delete_token" to="/" icon="fas fa-sign-out-alt">Sign-Out</SidebarLink>

    <!--span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left"></i>
    </span-->
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

p {
  margin-top: 100px;
}

.sidebar p {
  height: 2rem;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  margin-left: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  color: white;
  font-size: 25px;
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>

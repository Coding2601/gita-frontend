<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"  crossorigin="anonymous">
    <div class="container">
        <p :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <span v-if="collapsed">
                <i id="icon" class="fas fa-bars"></i>
            </span>
            <span v-else>
                <i id="icon" class="fas fa-bars"></i>
            </span>
        </p>
        <div id="sidebar" :style="{ width: sidebarWidth }">
            <p :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
                <span v-if="!collapsed" :style="{marginRight: '40px'}">
                    <i id="icon" class="fas fa-times"></i>
                </span>
            </p>
            <SidebarLink to="/home" icon="fas fa-home">Home</SidebarLink>
            <SidebarLink to="/chapters" icon="fas fa-book">Chapters</SidebarLink>
            <SidebarLink to="/favourite" icon="fas fa-heart">Favourites</SidebarLink>
            <SidebarLink to="/bookmark" icon="fas fa-bookmark">Bookmarks</SidebarLink>
            <SidebarLink to="/random-verse" icon="fas fa-random">Random-Verse</SidebarLink>
            <SidebarLink to="/" @click="delete_token" icon="fas fa-sign-out-alt">Sign-Out</SidebarLink>
        </div>
        <h1 :style="{fontSize: '40px'}">Hare Krishna</h1>
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
    #icon{
        font-size: 40px;
        width: 100px;
        margin-top: 10px;
    }
    h1{
        color: black;
        margin-top: 20px;
        margin-left: 245px;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .container{
        background-color: rgb(244, 196, 48);
        display: flex;
        padding: 20px;
        gap: 10%;
    }

    #sidebar p{
        margin-top: 60px;
        margin-bottom: 50px;
    }

    #sidebar {
        color: black;
        background-color: var(--sidebar-bg-color);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5em;
        overflow-x: hidden;
        transition: 0.3s ease;
        display: flex;
        flex-direction: column;
        visibility: hidden;
    }

    .collapse-icon {
        position: absolute;
        bottom: 0;
        padding: 0.75em;
        margin-left: 40px;
        margin-bottom: 20px;
        cursor: pointer;
        color: black;
        font-size: 25px;
        transition: 0.2s linear;
    }

    .rotate-180 {
        transform: rotate(180deg);
        transition: 0.2s linear;
    }
</style>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from '@/components/sidebar/state'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import axios from 'axios'

export default {
  components: { SidebarLink },
  setup () {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  methods: {
    async delete_token () {
      try {
        await axios.get('https://gita-esbz.onrender.com/user/logout', { crossdomain: true })
        // localStorage.removeItem('jwt')
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

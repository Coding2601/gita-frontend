<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'
export default {
  components: { Sidebar },
  setup () {
    return { sidebarWidth }
  }
}
</script>
<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

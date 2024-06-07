import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const toggleSidebar = () => {
  collapsed.value = !collapsed.value
  if (collapsed.value === true) {
    document.getElementById('sidebar').style.visibility = 'hidden'
  } else {
    document.getElementById('sidebar').style.visibility = 'visible'
  }
}

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

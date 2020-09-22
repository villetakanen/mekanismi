import { computed } from 'vue'

const userSessionActive = computed(() => { return false })

export function useProfile () {
  return { userSessionActive }
}

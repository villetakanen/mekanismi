import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

export interface PageData {
  title: string,
  blockContent?: string
}

export interface Page {
  siteid: string,
  pageid: string,
  data: PageData
}

const activeSiteid = ref('mekanismi')
const site = computed(() => { return { siteid: activeSiteid.value } })

function setSite (siteid:string):void {
  if (activeSiteid.value === siteid) return
  activeSiteid.value = siteid
}

export function useSite () {
  const route = useRoute()
  if (route.params && route.params.siteid)setSite(route.params.siteid as string)
  return { site }
}

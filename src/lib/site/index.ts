import { ref } from 'vue'
import { useRoute } from 'vue-router'

export interface Page {
  siteid: string,
  pageid: string,
  title: string,
  blockContent?: JSON
}

const activeSiteid = ref('mekanismi')

async function getPage (pageid:string):Promise<Page|null> {
  return new Promise(() => { return null })
}

function setSite (siteid:string):void {
  if (activeSiteid.value === siteid) return
  activeSiteid.value = siteid
}

export function useSite () {
  const route = useRoute()
  if (route.params && route.params.siteid)setSite(route.params.siteid as string)
  return { getPage }
}

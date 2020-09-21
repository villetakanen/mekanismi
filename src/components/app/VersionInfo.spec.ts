import { mount } from '@vue/test-utils'
import VersionInfo from './VersionInfo.vue'
import { meta } from '../../version'

describe('VersionInfo.vue', () => {
  it('mounts?', () => {
    const wrapper = mount(VersionInfo, {
      props: {
        text: 'Mekanismi'
      }
    } as any)
    expect(wrapper.text()).toContain(meta.version)
  })
})

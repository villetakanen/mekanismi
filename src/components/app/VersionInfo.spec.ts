import { mount } from '@vue/test-utils'
import VersionInfo from './VersionInfo.vue'

describe('VersionInfo.vue', () => {
  it('mounts?', () => {
    const wrapper = mount(VersionInfo, {
      props: {
        text: 'Mekanismi'
      }
    } as any)
    expect(wrapper.text()).toContain('0.0.8')
  })
})

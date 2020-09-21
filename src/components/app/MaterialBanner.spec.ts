import { mount } from '@vue/test-utils'
import MaterialBanner from './MaterialBanner.vue'

describe('MaterialBanner.vue', () => {
  it('mounts?', () => {
    const wrapper = mount(MaterialBanner, {
      props: {
        text: 'Mekanismi'
      }
    } as any)
    expect(wrapper.text()).toContain('Banner!')
  })
})

import { mount } from '@vue/test-utils'
import About from './About.vue'

describe('views/About.vue', () => {
  it('mounts?', () => {
    const wrapper = mount(About, {
    } as any)
    expect(wrapper.text()).toContain('About')
  })
})

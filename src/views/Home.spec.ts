import { mount } from '@vue/test-utils'
import Home from './Home.vue'

describe('views/Home.vue', () => {
  it('mounts?', () => {
    const wrapper = mount(Home, {
    } as any)
    expect(wrapper.text()).toContain('Mekanismi')
  })
})

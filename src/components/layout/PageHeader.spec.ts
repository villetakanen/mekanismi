import { shallowMount } from '@vue/test-utils'
import PageHeader from './PageHeader.vue'

describe('PageHeader.vue', () => {
  it('mounts?', () => {
    const wrapper = shallowMount(PageHeader)
    expect(wrapper.text()).toContain('Mekanismi')
  })
})

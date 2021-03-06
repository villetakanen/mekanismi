import { mount } from '@vue/test-utils'
import PageHeader from './PageHeader.vue'

describe('PageHeader.vue', () => {
  it('mounts?', () => {
    const wrapper = mount(PageHeader, {
      props: {
        text: 'Mekanismi'
      }
    } as any)
    expect(wrapper.text()).toContain('Mekanismi')
  })
})

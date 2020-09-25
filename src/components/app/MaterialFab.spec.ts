import { mount } from '@vue/test-utils'
import MaterialFab from './MaterialFab.vue'
import { meta } from '../../version'

describe('MaterialFab.vue', () => {
  it('Has a default slot', () => {
    const wrapper = mount(MaterialFab, {
      props: {
        text: 'Mekanismi'
      },
      slots: {
        default: '<div>' + meta.version + '</div>'
      }
    } as any)
    expect(wrapper.text()).toContain(meta.version)
  })
})

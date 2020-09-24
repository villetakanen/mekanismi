import { mount } from '@vue/test-utils'
import MaterialButton from './MaterialButton.vue'
import { meta } from '../../version'

describe('MaterialButton.vue', () => {
  it('Has a default slot', () => {
    const wrapper = mount(MaterialButton, {
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

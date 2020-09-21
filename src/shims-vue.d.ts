/* declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
} */
/* declare module '*.vue' {
  const component: any
  export default component
} */

// See: https://github.com/vuejs/vue-test-utils-next/issues/194
// @todo: please remove when vue-test-utils resolves the issue
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

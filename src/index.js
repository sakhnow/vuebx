import * as components from './components'

function Vuebx (Vue, args) {
  const Vuebx = components.Vuebx

  Vue.use(Vuebx, {
    components,
    ...args
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  Object.keys(components).forEach(key => {
    const c = components[key];
    window.Vue.use(c);
    window.Vue.component(c.name, c);
  })
  window.Vue.use(Vuebx)
}

export default Vuebx
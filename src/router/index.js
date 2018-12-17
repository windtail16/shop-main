import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/* Layout */
import Top from '@/components/layout/top'
import Bottom from '@/components/layout/bottom'

/* Pages */
import Main from '@/components/main'

/* TEMPLATE */
import Template from '@/components/templateshop/main/'
import ShopTop from '@/components/templateshop/layout/top'
import ShopBottom from '@/components/templateshop/layout/bottom'
import Shop from '@/components/templateshop/shop/'

function COMMON_LAYOUT (Content) {
  return {top: Top, Content, bottom: Bottom}
}

function TEMPLATE_LAYOUT (Content) {
  return {top: ShopTop, Content, bottom: ShopBottom}
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: COMMON_LAYOUT(Main)
    },
    {
      path: '/template',
      name: 'Template',
      components: TEMPLATE_LAYOUT(Template)
    },
    {
      path: '/template/shop',
      name: 'Shop',
      components: TEMPLATE_LAYOUT(Shop)
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      components: HelloWorld
    }
  ]
})

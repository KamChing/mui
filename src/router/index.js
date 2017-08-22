import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import join from '@/components/join'
import content from '@/components/content.vue'
import tea from '@/components/Tea.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/homepage'},
    {path: '/homepage',component:Homepage,
      children:[
      	{path: '/',component:content},
      	{path: 'content',component:content},
      	{path: 'join',component:join},
      	{path: 'tea',component:tea}
      ]
 	}
  ]
})

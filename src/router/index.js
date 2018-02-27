import VueRoute from 'vue-router'
import Vue from 'vue'

Vue.use(VueRoute)

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'


export default new VueRoute({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]

    },
    {
      path:'/',
      redirect:'/about'
    }
  ]

})

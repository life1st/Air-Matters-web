import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home'
import About from './views/About';
import Collection from './views/Collection'
import Discovery from './views/Discovery'
import Map from './views/Map'
import Ranking from './views/Ranking'
import Setting from './views/Setting'
import detail from './components/city/detail'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: Discovery
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/detail/:city',
      name: 'cityDetail',
      component: detail
    }
  ],
});

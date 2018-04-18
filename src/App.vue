<template>
  <div id="app">
    <HeaderComp/>
    <NavComp :callConst="callConst"/>
    <!-- <FirstSection :data="data"/> -->
    <transition 
    :duration="{ enter: 0, leave: 950 }"
    mode="out-in"
    v-on:leave="dispatchLeave">
      <router-view :leave="leave" :data="data" :key="data[0].type"/>
    </transition>
    <nav class="shortcut-nav">
        <ul>
          <li><router-link to="about" @click.native="addActive"></router-link></li>
          <li><router-link to="commercials" @click.native="addActive"></router-link></li>
          <li><router-link to="music" @click.native="addActive"></router-link></li>
          <li><router-link to="reviews" @click.native="addActive"></router-link></li>
        </ul>
      </nav>   
  </div>
</template>

<script>
import Constant from './constants/Constants'
import HeaderComp from './components/HeaderComp'
import NavComp from './components/NavComp'


export default {
  name: 'App',
  data() {
    return {
      leave: false,
      data: Constant,
      title: ''
    }
  },
  components: {
    'HeaderComp': HeaderComp,
    'NavComp': NavComp
  },
  methods: {
    callConst: function (category) {
      this.$data.data = Constant.filter(item => item.type === category.toLowerCase());
      console.log(this.$data.data[0].path);
    },

    stateInitialisation: function () {
      let regex = /(commercials|music)/;
      let currentPathname = this.$route.path;
      let newCategory = '';
      let srcIframe = [];

      if(currentPathname.match(regex)) {
        newCategory = currentPathname.match(regex)[1];
        if(currentPathname.includes(newCategory + '/')) {
          let urlToDelete = '/' + newCategory + '/';
        
          let newTitle = currentPathname.slice(urlToDelete.length, currentPathname.length);

          for(let i = 0; i < Constant.length; i++) {
            if(Constant[i].type === newCategory) {
              this.$data.title = Constant[i].data.filter(item => item.url === newTitle)
              
            }
          }
        }
      } else {
        newCategory = currentPathname.slice(1, currentPathname.length);
      }

      this.callConst(newCategory);
    },
    dispatchLeave: function () {
      this.$data.leave = true;
      setTimeout(
        () =>{
          this.$data.leave = false;
          console.log('après le time out ',this.$data.leave);
        }, 
        800);
    }
  },
  beforeMount: function () {
    if(this.$route.path !== '/') {
      this.stateInitialisation();
    } else {
      this.callConst('about');
      this.$history.push('about');
    }
  },
  watch: {
    '$route' (to, from) {
      this.stateInitialisation();
    },
    '$data.leave' (newVal, oldVal) {
      if(this.$data.leave === true) {
          console.log('App.vue : data changed: ', newVal, ' | was: ', oldVal)
        }
      } 
  }        
}
</script>


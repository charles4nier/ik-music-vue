<template>
  <div id="app">
    <HeaderComp/>
    <NavComp :callConst="callConst"/>
    <transition 
    :duration="{ enter: 0, leave: 900 }"
    mode="out-in">
      <router-view :leave="leave" :data="data" :key="data[0].type" :title="title" :videoToDispatch="videoToDispatch" :setSrc="setSrc" :src="src"/>
    </transition>
    <nav class="shortcut-nav">
        <ul>
          <li><router-link to="about"></router-link></li>
          <li><router-link to="commercials"></router-link></li>
          <li><router-link to="music"></router-link></li>
          <li><router-link to="reviews"></router-link></li>
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
      title: '',
      src: ''
    }
  },
  components: {
    'HeaderComp': HeaderComp,
    'NavComp': NavComp
  },
  methods: {
    callConst: function (category) {
      this.$data.data = Constant.filter(item => item.type === category.toLowerCase());
    },

    videoToDispatch: function(array) {
      this.$data.title = array
    },

    setSrc: function(array) {
      this.$data.src = array
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
    }
  },
  beforeMount: function () {
    if(this.$route.path !== '/') {
      this.stateInitialisation();
    } else {
      this.callConst('about');
      this.$router.push('about');
    }
  },
  watch: {
    '$route' (to, from) {
      this.stateInitialisation();
    }
  }        
}
</script>


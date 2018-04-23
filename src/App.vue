<template>
  <div id="app">
    <HeaderComp/>
    <NavComp :callConst="callConst"/>
    <transition 
    :duration="{ enter: 0, leave: 700 }"
    mode="out-in">
      <router-view :setFromMenu="setFromMenu" :fromMenu="fromMenu" :leave="leave" :data="data" :key="data[0].type" :title="title" :videoToDispatch="videoToDispatch" :setSrc="setSrc" :src="src"/>
    </transition>
    <nav class="shortcut-nav">
      <ul @mouseleave="hideMouseIndicator">
        <li @mouseover="setMouseIndicator" @mouseleave="hideMouseIndicator" data-indicator="about"><router-link to="about" ></router-link></li>
        <li @mouseover="setMouseIndicator" @mouseleave="hideMouseIndicator" data-indicator="commercials"><router-link to="commercials" ></router-link></li>
        <li @mouseover="setMouseIndicator" @mouseleave="hideMouseIndicator" data-indicator="music"><router-link to="music" ></router-link></li>
        <li @mouseover="setMouseIndicator" @mouseleave="hideMouseIndicator" data-indicator="reviews"><router-link to="reviews" ></router-link></li>
      </ul>
    </nav>   
    <span class="span-indicator indicator-about"  data-text="go to"><span>about</span></span>
    <span class="span-indicator indicator-commercials"  data-text="go to"><span>commercials</span></span>
    <span class="span-indicator indicator-music"  data-text="go to"><span>music</span></span>
    <span class="span-indicator indicator-reviews"  data-text="go to"><span>reviews</span></span>
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
      src: '',
      fromMenu: 'false',
      spanIndicator: null,
      newValue: '',
      ticker: 0
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

    setFromMenu: function(array) {
      this.$data.fromMenu = true
    },

    setMouseIndicator: function(event) {
      console.log(event.currentTarget.dataset.indicator);
      document.querySelector('.indicator-' + event.currentTarget.dataset.indicator).classList.add('active');   
    },

    hideMouseIndicator: function() {
      document.querySelector('.span-indicator.active').classList.remove('active');
    },  

    getMouse: function (event){
			this.$data.mouseX = event.pageX - 120;
			this.$data.mouseY = event.pageY - 20;
  
      this.$refs.spanIndicator.style.left = this.$data.mouseX + "px" ;
      this.$refs.spanIndicator.style.top = this.$data.mouseY + "px";
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
      // },
    // '$data.spanIndicator'(newVal, oldVal) {
    //   if(oldVal === null) {
    //     console.log(newVal)
    //     this.$refs.spanIndicator.classList.add('active');
    //     this.$data.newValue = newVal;

    //     return;
    //   }

    //   if(this.$refs.spanIndicator.classList.contains('active')) {
    //     this.$refs.spanIndicator.classList.remove('active');
    //   }
    //   setTimeout(() => {
    //     this.$refs.spanIndicator.classList.add('active');
    //     this.$data.newValue = newVal;
    //   }, 500);

      
    // }
  }        
}
</script>


<template>
  <div 
    class="popin-element"
    ref="popin">
    <p 
      class="title iframe-title"
      ref="pMenu">IK Music Production</p>
    <div 
      class="left-filter"
      ref="leftFilter" ></div>
    <div 
      class="right-filter"
      ref="rightFilter" ></div>
    <div
      class="iframe-container"
      ref="iframeContainer">
      <div
        class="spinner-container"
        ref="spinnerContainer"
        >
          <div class="spinner" ref="placeHolder" v-if="showSpinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
      </div>
      <iframe 
            v-if="showIframe"
            :src="src"
            width="100%" 
            height="100%" 
            frameborder="0" 
            webkitallowfullccreen="" 
            mozallowfullscreen="" 
            allowfullscreen="">
      </iframe>
    </div>
    <transition
      v-on:enter="enterText">
      <p 
      v-if="showText"
      class="compo-text"
      ref="compoText">{{title[0].text}} | <span>{{data[0].type}}</span></p>
    </transition> 
    <button 
      class="close-button"
      ref= closeButton 
      @click="close">
      <span 
        class="button-label"
        ref="closeLabel">close</span>
      <div 
        class="first-cross-bar"
        ref= "firstCrossBar"></div>
      <div 
        class="last-cross-bar"
        ref="lastCrossBar"></div>
    </button>
  </div>  
</template>

<script>
import anime from 'animejs';
import Player from '@vimeo/player';

export default {
  name: 'IframeComp',
  data() {
    return {
      src: '',
      showSpinner: true,
      showIframe: false,
      showText: false    
    }
  },
  props: ['title', 'data'],
  methods: {
    openIframe: function() {
      anime.timeline()
      .add({
        targets: [this.$refs.leftFilter],
        scaleX: [0, 1],
        duration: 1000,
        easing: [.47,.17,.04,1]
      })
      .add({
        targets: [this.$refs.rightFilter],
        translateY: ['-100%', 0],
        duration: 800,
        easing: [.47,.17,.04,1],
        offset:'-=800'
      })
      .add({
        targets: this.$refs.iframeContainer,
        opacity: [0, 1],
        duration: 400,
        easing: 'linear',
        delay: 100
      })
      .add({
        targets: [this.$refs.lastCrossBar, this.$refs.firstCrossBar],
        opacity: {
          value: [0,1],
          duration: 550
        },
        rotate: {
          value: [0,'-45deg'],
          duration: 250,
          easing: 'easeOutSine',
        },
        offset: '-=450'
      })
      .add({
        targets:this.$refs.closeLabel,
        opacity: {
          value: [0,1],
          duration: 550
        },
        translateY: {
          value:['-30px', 0],
          duration: 350,
          easing: 'easeOutSine',
        },
        offset: '-=900',
        complete: () => {
          this.$data.src=this.$props.title[0].src;
          anime({
              targets: this.$refs.spinnerContainer,
              opacity: [1, 0],
              duration: 250,
              delay: 450,
              easing: 'easeOutSine',
              complete:() => {
                this.$data.showSpinner =  false;
                setTimeout(() => {
                  const iframe = document.querySelector('iframe')
                  const player = new Player(iframe);
                  this.$refs.spinnerContainer.style.zIndex = -1
                  player.play();
                }, 50)
              }
            })

          
            
        }
      })
    },

    enterText: function(el, done) {
      anime({
        targets: el,
        opacity: {
          value: [0,1],
          duration: 550
        },
        translateY: {
          value:['60px', '30px'],
          duration: 350,
          easing: 'easeOutSine'
        },
        delay: 1050
      })
      done()
    },

    close: function() {
      let regex = /(commercials|music)/;
      let currentPathname = this.$route.path;
      
      if(currentPathname.match(regex)) {
        this.$router.push('/' + currentPathname.match(regex)[1]);
      }
    },

    closeIframe: function() {
      const iframe = document.querySelector('iframe')
      const player = new Player(iframe);
      this.$refs.spinnerContainer.style.opacity = 1;
      this.$refs.spinnerContainer.style.zIndex = 0;
      
      player.pause();
     

      anime.timeline()
      .add({
        targets: this.$refs.spinnerContainer,
        translateX: ['100%', 0],
        duration: 650,
        easing: 'easeOutSine'
      })
      .add({
        targets: this.$refs.firstCrossBar,
        rotate: {
          value: ['-45deg', '-180deg'],
          duration: 450,
          easing: 'easeOutSine',
        }
      })
      .add({
        targets: this.$refs.lastCrossBar,
        rotate: {
          value: ['-45deg', '90deg'],
          duration: 450,
          easing: 'easeOutSine',
        },
        offset: '-=450'
      })
      .add({
        targets: this.$refs.closeLabel,
        opacity: {
          value: [1, 0],
          duration: 450
        },
        translateY: {
          value:[0, '30px'],
          duration: 450
        },
        easing: 'easeOutSine',
        offset: '-=450'
      })
      .add({
        targets: [this.$refs.firstCrossBar,this.$refs.lastCrossBar],
        opacity: [1, 0],
        duration: 250,
        easing: 'linear',
        offset: '-=350'
      })
      .add({
        targets: this.$refs.iframeContainer,
        opacity: [1, 0],
        duration: 10,
        easing: 'linear',
        offset: '-=550'
      })
      .add({
        targets:this.$refs.compoText,
        opacity: {
          value: [1,0],
          duration: 550,
          easing: 'easeOutSine'
        },
        offset: '-=750'
      })
      .add({
        targets: this.$refs.leftFilter,
        translateY: {
          value: [0, '100%'],
          duration: 550,
          easing: 'easeInOutQuad'
        },
        offset: '-=500'
      })
      .add({
        targets: this.$refs.rightFilter,
        translateX: {
          value: [0, '100%'],
          duration: 550,
          easing: 'easeInOutQuad'
        },
        offset: '-=480'
      })
      .add({
        targets: this.$refs.popin,
        opacity: [1, 0],
        duration: 200,
        easing: 'linear'
      });
    }
  },
  mounted: function() {
    if(this.$props.title.length > 0) {
      this.$data.showText = true;
      this.$data.showIframe = true;  
      this.openIframe();
      // anime({
      //   targets:this.$refs.compoText,
      //   opacity: {
      //     value: [0,1],
      //     duration: 550
      //   },
      //   translateY: {
      //     value:['60px', '30px'],
      //     duration: 350,
      //     easing: 'easeOutSine'
      //   },
      //   offset: '-=750',
        // complete: () => {
        //   anime({
        //   targets: this.$refs.spinnerContainer,
        //   opacity: [1, 0],
        //   duration: 450,
        //   delay: 400,
        //   easing: 'easeInOutQuad',
        //   complete: () => {
        //     setTimeout(() => {
        //         const iframe = document.querySelector('iframe')
        //         const player = new Player(iframe);
                
        //         player.play();
        //       }, 200)
        //       console.log('complete');
        //       console.log(this.$data.src)
        //     }
        //   })
        //   }
      //   })
    }
  },
  beforeDestroy: function() {
    this.closeIframe();
  }
}
</script>
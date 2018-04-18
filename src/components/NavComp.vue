<template>
  <div>
      <button 
      class="open-button"
      ref= "openButton"      
      @click="openMenu" 
      @mouseover.stop="onHoverButton"
      @mouseleave.stop="onMouseLeaveButton" >
      <span 
        class="button-label"
        ref="openLabel">menu</span>
      <div 
        class="button-first-bar"
        ref="openFirstBar"></div>
    </button>

    <button 
      class="close-button"
      ref= "closeButton" 
      @click="closeMenu">
      <span 
        class="button-label"
        ref="closeLabel">close</span>
      <div 
        class="first-cross-bar"
        ref="firstCrossBar"></div>
      <div 
        class="last-cross-bar"
        ref="lastCrossBar"></div>
    </button>

    <nav
      class="main-nav"
      ref="navMenu" >
      <div 
        class="left-background"
        ref="leftBackground"> 
      </div>
      <div 
        class="right-background"
        ref="rightBackground"></div>

      <p 
        class="title"
        ref="pMenu">IK Music Production</p>

      <p 
        class="more"
        ref="pMore">More</p>  

      <ul 
        class="first-list"
        ref="firstUl">
        <li 
          ref="firstLi"
         @click="closeMenu" 
          >
            <span>about</span>
        </li>
        <li 
          ref="secondLi"
         @click="closeMenu"
          >
            <span>commercials</span>
        </li>
        <li 
          ref="thirdLi"
         @click="closeMenu"
          >
            <span>music</span>
        </li>
        <li 
          ref="fourthLi"
         @click="closeMenu"
          >
            <span>reviews</span>
        </li>
      </ul>
      <ul 
        class="last-list"
        ref="lastU">
        <li 
          ref="lastFirstLi"
          >
            <a href="https://soundcloud.com/idrisse-kh-lifi" rel="noopener noreferrer" target="_blank">soundcloud</a>
        </li>
        <li 
          ref="lastSecondtLi"
          >
            <a href="https://www.facebook.com/idrisse" rel="noopener noreferrer" target="_blank">facebook</a>
        </li>
        <li 
          ref="lastThirdLi"
          >
            <a href="https://open.spotify.com/artist/05DHcO6bEzBxW0qxLRGupb" rel="noopener noreferrer" target="_blank">spotify</a>
        </li>
        <li 
          ref="lastFourthLi"
          >
            <a href="https://motorifik.bandcamp.com/" rel="noopener noreferrer" target="_blank">bandcamp</a>
        </li>
        <li 
          ref="lastFithLi"
          >
            <a href="https://www.instagram.com/yanndebrunne/" rel="noopener noreferrer" target="_blank">instagram</a>
        </li>
      </ul>
      <p 
        class="contact"
        ref="navContact">Contact</p>
      <p
        class="credits"
        ref="pCredis"> All rights reserved 2018 © IK Music Prodution </p>
      <div
        class="contact-container"
        ref="contactContainer">
        <a 
          href='mailto:Rockmybelleville@gmail.com'
          ref="email"> Rockmybelleville@gmail.com</a>
        <a 
          href='tel:+33177015617'
          ref="firstNum">(+33)1 77 01 56 17</a> 
        <a 
          href='tel:+33762930805'
          ref="secondNum">(+33)7 62 93 08 05</a>
      </div> 
    </nav>      
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'NavComp',
  props: ['callConst'],
  data() {
    return {
      category: ['about', 'commercials', 'music', 'reviews']
    }
  },
  methods: {
    onLoadMenu: function () {
      anime.timeline()
      .add({
        targets: [this.$refs.openLabel],
        translateY: {
          value: ['-30px', 0],
          duration: 300,
          easing: 'easeOutSine'
        },
        opacity: {
          value: [0, 1],
          duration: 300,
          easing: 'easeOutSine'
        },
        delay: 800
      })
      .add({
        targets: [this.$refs.openFirstBar],
        translateX: {
          value: [30, 0],
          duration: 350
        },
        opacity: {
          value: [0, 1],
          duration: 350,
        },
        easing: 'easeOutSine',
        offset: '-=250'
      });
    },

    onHoverButton: function () {
      anime.timeline()
      .add({
        targets: [this.$refs.openLabel],
        translateX: [0, 8],
        duration: 350,
        easing: 'easeOutSine'
      })
      .add({
        targets: [this.$refs.openFirstBar],
        scaleX: [1, 0.8],
        duration: 200,
        easing: 'easeOutSine',
        offset: '-=400'
      });
    },

    onMouseLeaveButton: function() {
      anime.timeline()
      .add({
        targets: [this.$refs.openLabel],
        translateX: [8, 0],
        duration: 350,
        easing: 'easeOutSine'
      })
      .add({
        targets: [this.$refs.openFirstBar],
        scaleX: [0.8, 1],
        duration: 200,
        easing: 'easeOutSine',
        offset: '-=400'
      });
    },

    openMenu: function() {
      anime.timeline()
      .add({
        targets: [this.$refs.navMenu, this.$refs.pMenu],
        zIndex: [-1, 300],
        delay: function(el, i) { return i * 150 },
        duration: 0
      })
      .add({
        targets: this.$refs.closeButton,
        zIndex: {
          value: 350,
          duration: 0
        }
      })
      .add({
        targets: [this.$refs.openFirstBar, this.$refs.openLabel],
        opacity: [1, 0],
        duration: 150,
        offset: '-=150'
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
        offset: '-=50',
        complete: () => {
          this.$refs.openButton.style.zIndex =  '-1';
        }
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
        offset: '-=350'
      })
      .add({
        targets: this.$refs.pMenu,
        translateY: [0, '85px'],
        duration: 350,
        easing: 'easeOutSine',
        offset: '-=350'
      })
      .add({
        targets:[this.$refs.leftBackground, this.$refs.rightBackground],
        opacity: {
          value: [0.2, 1],
          delay: function(el, i) { return i * 150 },
          duration: 100,
          easing: [.47,.17,.04,1]
        },
        translateY: {
          value: ['-100%', 0],
          delay: function(el, i) { return i * 250 },
          duration: 800,
          easing: [.47,.17,.04,1]
        },
        offset: '-=650'
      })
      .add({
        targets:[this.$refs.fourthLi, this.$refs.thirdLi, this.$refs.secondLi,this.$refs.firstLi],
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'easeInQuint'
        },
        translateY: {
          value: ['0', '50px'],
          duration: 400,
          easing: 'easeOutSine'
        },
        scaleY: {
          value: [1.2, 1],
          duration: 300,
          easing: 'easeOutSine'
        },
        delay: function(el, i) { return i * 100 },
        offset: '-=300',
      })
      .add({
        targets: this.$refs.navContact,
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'easeInQuint'
        },
        translateX: {
          value: ['-85px', 0],
          duration: 400,
          easing: 'easeOutSine'
        },
        offset: '-=300'
      })
      .add({
        targets: this.$refs.pMore,
        opacity: [0, 1],
        translateY: [0, '85px'],
        duration: 350,
        easing: 'easeOutSine',
        offset: '-=750'
      })
      .add({
        targets:[this.$refs.lastFithLi, this.$refs.lastFourthLi, this.$refs.lastThirdLi, this.$refs.lastSecondtLi,this.$refs.lastFirstLi],
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'easeInQuint'
        },
        translateY: {
          value: ['0', '50px'],
          duration: 400,
          easing: 'easeOutSine'
        },
        scaleY: {
          value: [1.2, 1],
          duration: 300,
          easing: 'easeOutSine'
        },
        delay: function(el, i) { return i * 100 },
        offset: '-=575',
      })
      .add({
        targets: this.$refs.pCredis,
        opacity: {
          value: [0, 1],
          duration: 400,
          easing: 'easeOutSine'
        },
        offset: '-=300'
      })
      .add({
        targets: [this.$refs.email, this.$refs.firstNum, this.$refs.secondNum],
        opacity: {
          value: [0,1],
          duration: 250,
          delay: function(el, i) { return i * 150 },
          easing: 'linear'
        },
        translateY: {
          value: ['150px', 0],
          duration: 500,
          delay: function(el, i) { return i * 50 },
          easing: 'easeOutExpo'
        },
        offset: '-=600'
      })
    },
    
    closeMenu: function(event) {
      let category = event.currentTarget;
      if(!category.classList.contains('close-button')) {
        this.$router.push(category.textContent)
      }
      // if(category.textContent !== "close") {
      //   this.$router.push(category.textContent)
      // }
      // callback(category);
      anime.timeline()
        .add({
          targets: [this.$refs.navContact, this.$refs.pCredis],
          opacity: {
            value: [1, 0],
            duration: 200,
            easing: 'easeOutSine'
          }
        })
        .add({
          targets:[this.$refs.fourthLi, this.$refs.thirdLi, this.$refs.secondLi,this.$refs.firstLi, this.$refs.lastFithLi, this.$refs.lastFourthLi, this.$refs.lastThirdLi, this.$refs.lastSecondtLi,this.$refs.lastFirstLi],
          opacity: {
            value: [1, 0],
            duration: 800,
            easing: 'easeOutSine'
          },
          translateY: {
            value: ['50px', '150px'],
            duration: 500,
            easing: 'easeOutSine'
          },
          delay: function(el, i) { return i * 50 },
          offset: '-=200'
        })
        .add({
          targets: this.$refs.pMenu,
          translateY: {
            value: ['85px', 0],
            duration: 300,
            easing: 'easeOutSine'
          },
          offset: '-=1150'
        })
        .add({
          targets: this.$refs.pMore,
          opacity: {
            value: [1, 0],
            duration: 300,
            easing: 'easeOutSine'
          },
          translateY: {
            value: ['85px', '150px'],
            duration: 300,
            easing: 'easeOutSine'
          },
          delay: function(el,i) { return i * 250},
          offset: '-=650'
        })
        .add({
          targets:[this.$refs.leftBackground, this.$refs.rightBackground],
          translateY: {
            value: [0, '100%'],
            delay: function(el, i) { return i * 150 },
            duration: 1100,
            easing: [.47,.17,.04,1]
          },
          offset: '-=950'
        })
        .add({
          targets: this.$refs.openButton,
          zIndex: {
            value: 350,
            duration: 0
          }
        })
        .add({
          targets: this.$refs.firstCrossBar,
          rotate: {
            value: ['-45deg', '-180deg'],
            duration: 450,
            easing: 'easeOutSine',
          },
          offset: '-=1400'
        })
        .add({
          targets: this.$refs.lastCrossBar,
          rotate: {
            value: ['-45deg', '90deg'],
            duration: 450,
            easing: 'easeOutSine',
          },
          offset: '-=1400'
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
          offset: '-=1000'
        })
        .add({
          targets:this.$refs.openLabel,
          opacity: {
            value: [0,1],
            duration: 550
          },
          translateY: {
            value:['-30px', 0],
            duration: 350,
            easing: 'easeOutSine',
          },
          offset: '-=750',
          complete: () => {
            this.$refs.closeButton.style.zIndex = '-1';
          }  
        })
        .add({
          targets: this.$refs.openFirstBar,
          opacity: [0, 1],
          duration: 550,
          offset: '-=350',
          complete: () => {
            this.$refs.navMenu.style.zIndex = -1;
            this.$refs.pMenu.style.zIndex = -1;
          }
        })
        .add({
          targets: [this.$refs.email, this.$refs.firstNum, this.$refs.secondNum],
          opacity: {
            value: [1,0],
            duration: 250,
            delay: function(el, i) { return i * 150 },
            easing: 'linear'
          },
          offset: '-=1550'
        })
    }
  },
  mounted: function () {
      this.onLoadMenu();
    }
}
</script>

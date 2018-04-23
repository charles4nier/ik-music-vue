<template>
  <div class="about-container">
    <div class="text-container">
      <div class="english-version">
        <p 
          class="text"
          ref="englishFirstP">
          Idrisse is a young Paris-based composer-songwriter by less than conventional means. Eschewing a formal musical education, he instead taugh himself all aspect of traditional music theory whilst at the same time satisfying a burgeoning passion for cutting-edge experimental pop music.
        </p>
        <p 
          class="text"
          ref="englishLastP">
          Indisciplined, curious and currently researching new music materials he also like to collaborate with many musicians from different background as the british composer Philip Kay with which he realised the pop album Secret Things from Motorifik which received praise from the specialized press when released in 2010 (The Independant, The BBC, The Guardian, Under The Radar).
        </p>
        </p>
      </div>
      <div class="french-version inactive">
        <p 
          class="text"
          ref="frenchFirstP">          
            Idrisse est un jeune compositeur-songwriter basé à Paris au parcours pour le moins inconventionnel. En s'écartant d'une éducation formelle il apprend plutôt lui-même tous les aspects de la théorie musicale traditionnelle en même temps qu'il satisfait une passion grandissante pour l'expérimentation et l'innovation dans l'univers de la pop-music.
        </p>
        <p 
          class="text"
          ref="frenchLastP">                
            Indiscipliné, curieux et constamment à la recherche de nouveaux matériaux musicaux il aime aussi collaborer avec des musiciens d'horizons différents tel que le producteur anglais Philip Kay avec lequel il réalise l'album 'Secret Things' de Motorifik accueilli en 2010 avec beaucoup d'enthousiasme par la presse spécialisée (The Independant, The BBC, The Guardian, Under The Radar).
        </p>
      </div> 
    </div>   
    <div class="button-container" ref="buttonContainer">
      <button 
        class="active"
        ref="englishButton"
        @click="showEnglish">en</button>
      <button
        ref="frenchButton"
        @click="showFrench">fr</button>
    </div>
  </div>  
</template>
<script>
  import anime from 'animejs';

  export default {
    name: 'About',
    methods: {
      openAbout: function() {
        anime({
          targets: [this.$refs.buttonContainer, this.$refs.englishFirstP, this.$refs.englishLastP, this.$refs.frenchFirstP, this.$refs.frenchLastP],
          opacity: {
            value: [0, 1],
            delay: 100,
            duration: 900,
            easing: 'linear'
          }
        })
      },

      closeAbout: function() {
        anime.timeline()
        .add({
          targets: [this.$refs.buttonContainer, this.$refs.englishFirstP, this.$refs.englishLastP, this.$refs.frenchFirstP, this.$refs.frenchLastP],
          opacity: {
            value: [1, 0],
            delay: 100,
            duration: 600,
            easing: 'linear'
          }
        })
        // .add({
        //   targets: this.$refs.buttonContainer,
        //   translateY: {
        //     value: [0, '30px'],
        //     duration: 400,
        //     offset:'-=400',
        //     easing: 'linear'
        //   },
        //   opacity: {
        //     value: [1, 0],
        //     duration: 300,
        //     easing: 'linear',
        //     offset:'-=500'
        //   }
        // })
      },

      showFrench: function () {
        if(this.$refs.frenchButton.hasAttribute('class') && this.$refs.frenchButton.classList.contains('active')) {
          return false;
        }

        anime.timeline()
        .add({
          targets: [this.$refs.englishFirstP, this.$refs.englishLastP],
          translateX: [0, '100%'],
          duration: 650,
          easing: [1,0,.18,1],
          complete: () => {
            this.$refs.frenchButton.classList.add('active');
            this.$refs.englishButton.classList.remove('active');
          }
        })
        .add({
          targets: [this.$refs.frenchFirstP, this.$refs.frenchLastP],
          translateX: ['-100%', 0],
          duration: 650,
          easing: [.14,.81,.4,1],
          offset: '-=180'
        })
      },

      showEnglish: function () {
        if(this.$refs.englishButton.hasAttribute('class') && this.$refs.englishButton.classList.contains('active')) {
          return false;
        }

        anime.timeline()
        .add({
          targets: [this.$refs.frenchFirstP, this.$refs.frenchLastP],
          translateX: [0, '-100%'],
          duration: 650,
          easing: [1,0,.18,1],
          complete: () => {
            this.$refs.englishButton.classList.add('active');
            this.$refs.frenchButton.classList.remove('active');
          }
        })
        .add({
          targets: [this.$refs.englishFirstP, this.$refs.englishLastP],
          translateX: ['100%', 0],
          duration: 650,
          easing: [.14,.81, .5,1],
          offset: '-=180'
        })
      }
    },
    mounted: function() {
      this.openAbout()
    },
    beforeDestroy: function() {
      this.closeAbout()
    }
  }
</script>


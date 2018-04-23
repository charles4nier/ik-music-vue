<template>
  <section class="first-section">
    <div 
      class="section-filter"
      ref="sectionFilter">
    </div>  
    <div class="img-container">
      <div 
        class="img-filter"
        ref="imgFilter">
        <!-- <img :src="src" alt=""/> -->
      </div>
      <img :src="data[0].path" alt="" ref="picture"/>
      <div class="img-mask"></div>
    </div>
    <p ref="text" >{{data[0].type}}</p>
  </section> 
</template>

<script>
  import anime from 'animejs';

  export default {
    name: 'FirstSection',
    props: ['data', 'leave', 'src', 'setSrc', 'fromMenu'],
    methods: {
      openSection: function () {
        anime.timeline()
        .add({
          targets: this.$refs.sectionFilter,
          translateX: [0, '100%'],
          duration: 800,
          easing: [.47,.17,.04,1]
        })
        .add({
          targets: this.$refs.imgFilter,
          translateX: [0, '100%'],
          duration: 850,
          easing: [.47,.17,.04,1],
          offset: '-=750'
        })
        .add({
          targets: this.$refs.text,
          rotateX: {
            value: [0, '180deg'],
            duration: 0
          },
          rotateY:  {
            value: [0, '180deg'],
            duration: 0
          },
          translateX: {
            value: ['-100%', 0],
            duration: 600,
            easing: 'easeOutSine'
          },
          offset: '-=550',
          complete: () => {
            this.$props.setSrc(this.$props.data[0].path) 
          }
        })
        .add({
          targets: this.$refs.picture,
          translateX: ['-10%', 0],
          duration: 1800,
          easing: [0.645, 0.045, 0.355, 1],
          offset: '-=1830'
        })  
        .add({
          targets: this.$refs.picture,
          scaleX:[1.05, 1],
          scaleY: [1.05, 1],
          duration: 2400,
          easing: [0.645, 0.045, 0.355, 1],
          offset: '-=1830'
        })  
      },
      closeSection: function() {
        anime.timeline()
        .add({
          targets: this.$refs.sectionFilter,
          translateX: ['-100%', 0],
          duration: 700,
          easing: [0.645, 0.045, 0.355, 1]
        })
        .add({
            targets: this.$refs.text,
            rotateX: {
              value: [0, '180deg'],
              duration: 0
            },
            rotateY:  {
              value: [0, '180deg'],
              duration: 0
            },
            translateX: {
              value: [0, '-100%'],
              duration: 700,
              easing: [0.645, 0.045, 0.355, 1]
            },
            offset: '-=730'
          })
        .add({
          targets: this.$refs.picture,
          translateX: [0, '30%'],
          duration: 1500,
          easing: [0.645, 0.045, 0.355, 1],
          offset: '-=650'
        })    
      }
    },
    mounted: function () {
      this.openSection()
    },
    beforeDestroy: function() {
      this.closeSection();
    }
  }
</script>
<template>
  <section class="last-section">
    <div 
      class="section-filter"
      ref="sectionFilter">
    </div> 
    <p 
      class="label-section"
      ref="text">
        {{data[0].type}}
    </p>
    <About v-if="showAbout"/> 
    <ListItems v-if="showListItems" :data="data" :title="title" :videoToDispatch="videoToDispatch"/>
    <Reviews v-if="showReviews"/>
    <transition
      mode="out-in"
      :duration="{enter:0, leave: 2000}">
      <router-view :data="data" :title="title"></router-view>
    </transition>   
  </section>  
</template>

<script>
  import anime from 'animejs'
  import About from './About'
  import ListItems from './ListItems'
  import Reviews from './Reviews'

  export default {
    name: 'LastSection',
    props: ['data', 'title', 'videoToDispatch'],
    components: {
      'About': About,
      'ListItems': ListItems,
      'Reviews': Reviews

    },
    data() {
      return {
        showAbout: this.$props.data[0].showAbout,
        showListItems: this.$props.data[0].showListItems,
        showReviews: this.$props.data[0].showReviews
      }
    },
    methods: {
        openSection: function () {
          anime.timeline()
          .add({
            targets: this.$refs.sectionFilter,
            translateY: [0, '100%'],
            duration: 800,
            easing: [.32,.22,0,1]
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
              value: ['100%', 0],
              duration: 400,
              easing: 'easeOutSine'
            },
            offset: '-=290'
          })
        },
        closeSection: function() {
          anime.timeline()
          .add({
            targets: this.$refs.sectionFilter,
            translateY: ['-100%', 0],
            duration: 350,
            easing: [0.645, 0.045, 0.355, 1],
            delay: 350
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
              value: [0, '100%'],
              duration: 700,
              easing: [0.645, 0.045, 0.355, 1]
            },
            offset: '-=650'
          }) 
        }
    },
    mounted: function () {
      // console.log(this.$props.data)
      this.openSection()
    },
    beforeDestroy: function() {
      this.closeSection();
    }
  }
</script>
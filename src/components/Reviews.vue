<template>
  <ul class="list-title">
    <li class="list-title-line" >
      <a href="https://www.independent.co.uk/arts-entertainment/music/reviews/album-motorifik-secret-things-moto-2131518.html" target="_blank">The Independant</a>
    </li>
    <li class="list-title-line" >
      <a href="https://www.facebook.com/Motorifik/photos/a.246669982109173.51190.246652188777619/246670255442479/?type=3&theater" target="_blank">Les Inrocks</a>
    </li>
    <li class="list-title-line" >
      <a href="http://www.undertheradarmag.com/lists/top_50_albums_of_2010/" target="_blank">Under the Radar</a>
    </li>  
  </ul>
</template>

<script>
  import anime from 'animejs'
  
  export default {
    name: 'Reviews',
    methods: {
      openList: function() {
        anime({
          targets: document.querySelectorAll('.list-title-line'),
          translateY: {
          value: ['-80px', 0],
          duration: 1200,
          delay: function(el, i) { return i * 100 },
          easing: [0.645, 0.045, 0.355, 1]
          },
          opacity: {
            value: [0, 1],
            duration: 100,
            delay: function(el, i) { return 600 + (i * 100)},
            easing: 'linear'
          }
        })
      }
    },
    mounted: function() {
      this.openList();
    }
  }
</script>
<template>
    <ul class="list-title">
      <li 
        v-for="(item, index) in data[0].data"
        class="list-title-line"
        ref="multipleLi"
        :data-url="item.url"
        :key="index"
        >
          <span ref="liSpan">{{item.name}}</span>
      </li>
    </ul>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'ListItems',
  props: ['data'],
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
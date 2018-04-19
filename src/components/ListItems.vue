<template>
    <ul class="list-title">
      <li 
        v-for="(item, index) in data[0].data"
        class="list-title-line"
        ref="multipleLi"
        :key="index"
        >
          <span 
            ref="liSpan"
            :data-url="item.url"
            @click="loadVideo">
              {{item.name}}
          </span>
      </li>
    </ul>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'ListItems',
  props: ['data', 'title', 'videoToDispatch'],
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
    },
    loadVideo: function(event) {
      let srcIframe = this.$props.data[0].data.filter(item => item.url === event.currentTarget.dataset.url);
      this.$props.videoToDispatch(srcIframe);
      let path = this.$route.path + '/' + srcIframe[0].url;
      this.$router.push(path);
    }
   },
  mounted: function() {
    this.openList();
  }
}
</script>
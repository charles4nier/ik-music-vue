<template>
  <main>
    <FirstSection :data="data" :leave="leave"/>
    <LastSection :data="data"/>
  </main>
</template>

<script>
  import FirstSection from '../components/FirstSection'
  import LastSection from '../components/LastSection'

  export default {
    name: 'Main',
    props: ['data', 'leave'],
    components: {
      'FirstSection': FirstSection,
      'LastSection': LastSection
    },
    mounted: function() {
      console.log('main ', this.$props.leave)
    },
    watch: {
      leave(newVal, oldVal) {
        console.log(' Main : Prop changed: ', newVal, ' | was: ', oldVal)
      } 
    }
  }
</script>
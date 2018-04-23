<template>
  <main>
    <FirstSection :data="data" :leave="leave" :setSrc="setSrc" :src="src" :fromMenu="fromMenu"/>
    <LastSection :data="data" :title="title" :videoToDispatch="videoToDispatch" :fromMenu="fromMenu"/>
  </main>
</template>

<script>
  import FirstSection from '../components/FirstSection'
  import LastSection from '../components/LastSection'

  export default {
    name: 'Main',
    props: ['data', 'leave', 'title', 'videoToDispatch', 'src', 'setSrc', 'fromMenu'],
    components: {
      'FirstSection': FirstSection,
      'LastSection': LastSection
    }
  }
</script>
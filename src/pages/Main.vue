<template>
  <main>
    <FirstSection :data="data" :leave="leave" :setSrc="setSrc" :src="src"/>
    <LastSection :data="data" :title="title" :videoToDispatch="videoToDispatch"/>
  </main>
</template>

<script>
  import FirstSection from '../components/FirstSection'
  import LastSection from '../components/LastSection'

  export default {
    name: 'Main',
    props: ['data', 'leave', 'title', 'videoToDispatch', 'src', 'setSrc'],
    components: {
      'FirstSection': FirstSection,
      'LastSection': LastSection
    }
  }
</script>
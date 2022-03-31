<template>
  <div class="home">
    <upload-block/>
    <questions-block class="questions"/>
    <converter-block/>
  </div>
</template>

<script>
import UploadBlock from '@/components/UploadBlock.vue'
import QuestionsBlock from '@/components/QuestionsBlock.vue'
import ConverterBlock from '@/components/ConverterBlock.vue'



export default {
  name: 'HomeView',
  components: {
    UploadBlock,
    QuestionsBlock,
    ConverterBlock,
  }
}
</script>
<style lang="sass" scoped>
.questions
  margin: 50px 0px
</style>

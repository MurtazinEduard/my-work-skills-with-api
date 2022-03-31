<template>
  <div>
    <div v-if="loading">Нажмите загрузить, для отрисовки списка</div>
    <question-item
      v-else
      class="question-item"
      v-for="question in questionsData"
      :key="question.id"
      :question="question"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import QuestionItem from "./QuestionItem.vue";
export default {
  components: { QuestionItem },
  name: "QuestionsBlock",
  computed: {
    ...mapState(["questionsData", "loading"]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([]),
  },
};
</script>

<style lang="sass" scoped>
.question-item
    margin-bottom: 10px
</style>

<template>
  <div class="question">
    <div class="question-left">
      <div class="question-left__name">{{ question.name }}</div>
      <div class="question-left__input-border">
        <input
          class="question-left__input"
          :placeholder="question.description"
          :title="question.description"
          v-model="NewValue"
          @focus="focus = true"
        />
      </div>
    </div>
    <div class="question-right">
      <div v-if="question.dictionary_id > 0">
        <select class="question-right__select" v-model="NewValue">
          <option disabled>Выберите из списка</option>
          <option v-for="selected in question.selectOptions" :key="selected.id" @click="selectFiltered(selected.value)">
            {{ selected.value }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <div v-if="focus && question.selectOptions.length >= 20">
    <div
      class="question-left__input-selector"
      v-for="select in filterQuestionsv2"
      :key="select.id"
    >
      <div @click="selectFiltered(select.value)" class="question-left__input-selector-item">
        {{ select.value }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "QuestionItem",
  props: {
    question: [Object],
  },
  data() {
    return {
      NewValue: "",
      filteredQuestions: [],
      focus: false,
    };
  },
  methods: {
    ...mapMutations(["setValue"]),
    ...mapActions(["setValueAction"]),
    changeValue() {
      this.setValueAction({ obj: this.question, val: this.NewValue });
    },
    filterQuestions() {
      this.filteredQuestions = this.question.selectOptions.filter((option) =>
        option.value.toLowerCase().includes(this.NewValue.toLowerCase())
      );
    },
    selectFiltered(value){
        this.focus = false
        this.NewValue = value
    }
  },
  watch: {
    NewValue() {
      this.changeValue();
      this.filterQuestions();
    },
  },
  computed: {
    filterQuestionsv2() {
      return this.question.selectOptions.filter((option) =>
        option.value.toLowerCase().includes(this.NewValue.toLowerCase())
      );
    },
  },
};
</script>

<style lang="sass" scoped>
$color-green: #42b983
.question
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
    align-content: center
    &-left
        display: flex
        flex-direction: row
        justify-content: space-between
        width: 99vw
        &__name
            font-size: 1.5em
            display: block
        &__input
            font-size: 1em
            width: 30vw
            overflow: hidden
            padding: 10px
            border: 2px solid $color-green
            &-border
                display: flex
                flex-direction: column
            &-selector
                margin-top: 10px
                position: relative
                &-item
                    position: sticky
    &-right
        width: 45vw
        display: flex
        &__select
            width: 20vw
            padding: 10px
            border: 2px solid $color-green
            margin-left: 10px
</style>

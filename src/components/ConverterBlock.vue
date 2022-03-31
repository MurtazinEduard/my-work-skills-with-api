<template>
  <div >
    <button @click="generateJSON" class="converter-button">
      Сохранить в JSON
    </button>
  </div>
  <div>
    <textarea
      v-model="AttributesJSON"
      class="converter-textarea"
    />
  </div>
  <div >
    <button @click="generateFromJSON" class="converter-button">
      Сохранить из JSON
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ConverterBlock",
  methods: {
    ...mapMutations(["setDataFromJSON"]),
    generateJSON() {
      this.AttributesJSON = JSON.stringify(this.questionsData);
    },
    generateFromJSON() {
      this.setDataFromJSON(JSON.parse(this.AttributesJSON));
      this.$forceUpdate();
    },
  },
  computed: {
    ...mapState(["questionsData"]),
  },
  data() {
    return {
      AttributesJSON: '',
    };
  },
};
</script>

<style lang="sass" scoped>
$color-green: #42b983
.converter
    &-button
        padding: 10px
        border: 2px solid $color-green
        cursor: pointer
    &-textarea
        border: 2px solid $color-green
        margin-top: 20px
        resize: none
        width: 20vw
        height: 20vh
</style>

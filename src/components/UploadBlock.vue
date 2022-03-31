<template>
  <div>
    <input v-model.number="category_id" type="number" class="input" />
    <button @click="getQuestions(category_id)" class="button">Загрузить</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "UploadBlock",
  data() {
    return {
      category_id: [17034410],
      selectOpt: [],
    };
  },
  computed: {
      ...mapState(['questionsData'])
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["putQuestionsData", "setLoading"]),
    async getQuestions() {
      this.setLoading(true);
      await axios
        .post(
          "https://api-dev.shop-delivery.ru/int_api/ozon/v3/category/attribute",
          {
            attribute_type: "ALL",
            category_id: this.category_id,
            language: "DEFAULT",
          }
        )
        .then((response) => {
          const newQuestionsArray = response.data.result[0].attributes.map(
            (a) => {
              if (a.dictionary_id > 0) {
                this.getSelectOptions(a.id, a);
              } else {
                a.selectOptions = [];
              }
              a.value = '1'
              return a;
            }
          );
          setTimeout(() => {
            this.setLoading(false);
          }, 2000);
          this.putQuestionsData(newQuestionsArray);
        });
    },
    async getSelectOptions(id, a) {
      await axios
        .post(
          "https://api-dev.shop-delivery.ru/int_api/ozon/v2/category/attribute/values",
          {
            attribute_id: id,
            category_id: 17028968,
            language: "DEFAULT",
            last_value_id: 0,
            limit: 20,
            query: "когтерез",
          }
        )
        .then((response) => {
          a.selectOptions = response.data;
        });
    },
  },
};
</script>

<style lang="sass" scoped>
$color-green: #42b983
.button
    padding: 10px
    margin-left: 10px
    border: 2px solid $color-green
    color: $color-green
    cursor: pointer
.input
    padding: 10px
    border: 2px solid $color-green
</style>

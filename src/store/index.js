import { createStore } from 'vuex'
//import axios from 'axios'

export default createStore({
  state: () => ({
    questionsData: [],
    category_id: 17034410,
    loading: true
  }),
  getters: {
  },
  mutations: {
    putQuestionsData(state, data) {
      state.questionsData = data
    },
    setLoading(state, load) {
      state.loading = load
    },
    setValue(state, newState) {
      state.questionsData = newState
    },
    setDataFromJSON(state, data) {
      state.questionsData = data;
      state.loading = false
    }
  },
  actions: {
    setValueAction({state, commit}, value) {
      const newState = state.questionsData.map(item => {
        if(item.id === value.obj.id) {
          item.value = value.val
        }
        return item
      })
      commit('setValue', newState)
    }
  },
  modules: {
  }
})

export const state = () => ({
  blogInfo: {}
})

export const mutations = {
  set (state, info) {
    state.blogInfo = info
  }
}

export const actions = {
  async update ({ state, commit }) {
    const res = await this.$axios.get('')
    commit('set', res)
  }
}

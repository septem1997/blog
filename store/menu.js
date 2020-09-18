export const state = () => ({
  list: []
})

export const mutations = {
  set (state, menu) {
    state.list = menu
  }
}

export const actions = {
  async update ({ state, commit }) {
    // 菜单一般不会频繁变动，因此获取菜单时将其储存起来，刷新页面后取sessionStorage即可，无需刷新
    let res = JSON.parse(sessionStorage.getItem('menu'))
    if (state.list.length === 0) {
      res = await this.$axios.get('menu')
      sessionStorage.setItem('menu', JSON.stringify(res))
    }
    commit('set', res)
  }
}

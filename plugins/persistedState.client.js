import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'backendless_user_login_issue',
    paths: ['user'],
  })(store)
}

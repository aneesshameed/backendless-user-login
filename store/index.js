import Backendless from "backendless";

export const state = () => ({
  user: null,
  backendlessUser: null,
  currentUserInMiddleware: null,
});

export const mutations = {
  set_user(state, data) {
    state.user = data;
  },
  set_backendless_user(state, data) {
    state.backendlessUser = data;
  },
  set_current_user_in_middleware(state, data) {
    state.currentUserInMiddleware = data;
  }
};

export const actions = {
  // This is nuxt init, which will initializes all the nuxt required constants
  async nuxtClientInit({ commit }) {
    try {
      const currentUser = await Backendless.Users.getCurrentUser();
      commit("set_backendless_user", currentUser);
    } catch (err) {
      console.log(err);
    }
  },
};

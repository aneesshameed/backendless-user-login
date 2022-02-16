<template>
  <div>
    v.1.8.0<br />
    Index Page<br />
    <button @click="login">Login</button>
    <br />
    Current user in app State: <br />{{ user }}
    <br />
    -------------------
    <br />
    Current user in Backendless state: <br />{{ backendlessUser }}
    <br />
    -------------------
    <br />
    Current user in middleware: <br />{{ currentUserInMiddleware }}
    <br />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Backendless from "backendless";

export default {
  computed: {
    ...mapState({
      user: (state) => state.user,
      backendlessUser: (state) => state.backendlessUser,
      currentUserInMiddleware: (state) => state.currentUserInMiddleware,
      flags: (state) => state.flags,
    }),
  },
  methods: {
    login() {
      Backendless.UserService.login(
        "aneeshameed@elifent.tech",
        "helloworld",
        true
      ).then(async (response) => {
        this.$store.commit("set_user", response);
        this.$store.dispatch("nuxtClientInit");
        this.$nuxt.$router.push("/home");
      });
    },
  },
};
</script>

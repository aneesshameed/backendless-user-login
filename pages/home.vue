<template>
  <div>
    v.1.8.0<br />
    Home Page<br />
    <button @click="logout">Logout</button>
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
    async logout() {
      await Backendless.UserService.logout();
      this.$store.commit("set_user", null);
      this.$store.commit("set_backendless_user", null);
      this.$nuxt.$router.push("/");
    },
  },
};
</script>

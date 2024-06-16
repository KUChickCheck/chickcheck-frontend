<template>
  <div>
    <h1>Test</h1>
    <button @click="logout">Logout</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "TaskItem",
  data() {
    return {
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const token = localStorage.getItem("token");
      this.loading = false;
      if (!token) {
        this.error = "No token found";
        this.loading = false;
        return;
      }
    },
    logout() {
      api.logout();
      this.$router.push("/signin");
    },
  },
};
</script>

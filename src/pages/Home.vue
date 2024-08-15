<template>
  <div class="container-fluid">
    <HeaderComponent></HeaderComponent>
    <div class="container-fluid">
      <h5>Today Schedule</h5>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>

    </div>
  </div>
</template>

<script>
// import api from "../api";
import HeaderComponent from "../components/HeaderComponent.vue"

export default {
  name: "HomePage",
  components: {
    HeaderComponent
    },
  data() {
    return {
      loading: true,
      error: null,
    };
  },
  // created() {
  //   this.fetchData();
  // },
  methods: {
    // async fetchData() {
    //   const token = localStorage.getItem("token");
    //   this.loading = false;
    //   if (!token) {
    //     this.error = "No token found";
    //     this.loading = false;
    //     return;
    //   }
    // },
    // logout() {
    //   api.logout();
    //   this.$router.push("/signin");
    // },
  },
};
</script>


<style>

</style>
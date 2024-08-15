<template>
  <header>
    <div class="container-fluid">
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <a href="/" class="text-decoration-none">
          <img src="@/assets/ku.png" alt="Logo" class="img-fluid" style="max-height: 32px;">
          </a>
        </div>
        <div class="">
          <h4>Home</h4>
        </div>
        <div @click="logout" class="">
          <img src="@/assets/logout.png" alt="Logout" class="img-fluid" style="max-height: 32px;">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import api from "../api";

export default {
  name: 'HeaderComponent',

  methods: {
    logout() {
      api.logout();
      this.$router.push("/signin");
    },
  }
}

</script>

<style scoped>
header {
  margin-top: 1rem;
  margin-bottom: 30px;
}
</style>

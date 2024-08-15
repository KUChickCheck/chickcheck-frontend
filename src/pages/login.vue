<template>
  <div class="d-flex align-items-center justify-content-center" style="height:100%;">
    <div class="col-md-6">
      <h1 class="text-center mb-4">Login</h1>
      <form @submit.prevent="login" class="d-flex gap-4 flex-column">
        <div class="form-group">
          <!-- <label for="username">Username</label> -->
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter username"
            required
          />
        </div>
        <div class="form-group">
          <!-- <label for="password">Password</label> -->
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" class="btn custom-btn btn-block">Login</button>
      </form>
      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "SignIn",

  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.login({
          username: this.username,
          password: this.password,
        });
        console.log(response)
        const token = response.data.token;
        localStorage.setItem("token", token);
        this.$router.push("/");
      } catch (err) {
        this.error = err.response
          ? err.response.data.message
          : "An error occurred";
      }
    },
  },
};
</script>

<style scoped>
.custom-btn {
  background-color: #136C66;
  border-color: #136C66;
  color: white;
}

.custom-btn:hover {
  background-color: #105d5b; /* Darken color for hover effect */
  border-color: #105d5b;
}
</style>
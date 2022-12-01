<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light mb-3">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">FLUID FLOW</router-link>        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" active-class="active">Illustration</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/matrix" class="nav-link active" active-class="active">Matrix</router-link>
            </li>
            </ul>
        </div>
      </div>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'user.index'}">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="products">Products</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
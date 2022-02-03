<template>
  <header>
    <nav>
      <div>
        <h1>Find a coach</h1>
      </div>
      <div class="header-links">
        <div>
          <router-link to="/coaches">All Coaches</router-link>
        </div>
        <div>
          <router-link to="/register">Send Requests</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: cornflowerblue;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header-links {
  display: flex;
  width: 22rem;
  justify-content: space-around;
  align-items: center;
}
</style>

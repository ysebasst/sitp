<template>
  <div id="app">
    <div id="nav">
      <router-link exact to="/" :class="{ active: $route.path === '/' }"
        >Home</router-link
      >
      <router-link to="/about" :class="{ active: $route.path === '/about' }"
        >About</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --bgPrimary: rgb(24, 24, 24);
  --bgSecondary: rgb(33, 33, 33);
  --textPrimay: #fff;
  --border: 1px solid rgba(255, 255, 255, 0.0675);
}
body {
  background-color: var(--bgPrimary);
  color: #fff;
}
#nav {
  background-color: var(--bgSecondary);
  text-align: center;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  a {
    background-color: var(--bgPrimary);
    color: #fff;
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    text-decoration: none;
    border: var(--border);
    border-radius: 0.5rem;
  }
  a:hover,
  a.router-link-active {
    color: #0af;
  }
}
</style>

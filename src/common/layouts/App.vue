<template lang="pug">
  #app
    .nav
      a(href="/") Landing
      a(href="/dashboard") Dashboard
    router-view
</template>

<style lang="sass">
#app
  font-family: Helvetica, sans-serif
  text-align: center
  color: #2c3e50

  .nav
    padding: 50px

    a
      font-weight: bold
      color: #2c3e50
      padding: 0 25px

      &.active,
      &.router-link-exact-active
        color: #42b983
</style>

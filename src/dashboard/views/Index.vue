<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  computed: {
    ...mapGetters("dashboard", {
      counter: "COUNTER"
    })
  },

  methods: {
    ...mapMutations("dashboard", {
      increaseCounter: "INCREASE"
    })
  }
}
</script>

<template lang="pug">
  .dashboard-view
    p Dashboard Counter: {{ counter }}
    c-button(@click.prevent="increaseCounter") Increase
</template>

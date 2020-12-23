<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  computed: {
    ...mapGetters("landing", {
      counter: "COUNTER"
    })
  },

  methods: {
    ...mapMutations("landing", {
      increaseCounter: "INCREASE"
    })
  }
}
</script>

<template lang="pug">
  .landing-view
    p Landing Counter: {{ counter }}
    c-button(@click.prevent="increaseCounter") Increase
</template>

<script>
export default {
  name: "CButton"
}
</script>

<template lang="pug">
  button(v-bind="$attrs" v-on="$listeners")
    slot
</template>

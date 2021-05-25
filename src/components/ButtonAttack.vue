<template>
  <v-btn
    class="btn-attack mx-2"
    fab
    :dark="dark === 'true'"
    :large="size === 'large'"
    :small="size === 'small'"
    :color="color"
    depressed
    :ripple="ripple === 'true'"
    :disabled="disabled === 'true'"
  >
    <v-icon dark>
      mdi-{{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonAttack',
  props: [
    'color', 'icon', 'size', 'dark', 'ripple', 'disabled'
  ]
}
</script>

<style scoped>
  .btn-attack:focus::before {
    opacity: 0 !important;
  }
</style>
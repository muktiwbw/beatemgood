<template>
   <span
    class="atk-hint"
  >
    <v-chip
      class="ma-1"
      color="#9ede73"
      text-color="black"
    >
      {{ correct }}
    </v-chip>
    <v-chip
      class="ma-1"
      color="yellow"
      text-color="black"
    >
      {{ misplaced }}
    </v-chip>
  </span>
</template>

<script>
export default {
  name: 'GameAttackHint',
  props: [
    'correct', 'misplaced'
  ]
}
</script>

<style scoped>
  .atk-hint {
    display: none;
  }
  
  .v-chip.v-size--default {
    font-size: 18px !important;
    font-weight: 600 !important;
  }
</style>
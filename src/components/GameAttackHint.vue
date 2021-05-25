<template>
   <span
    class="atk-hint"
  >
    <v-chip
      class="correct"
      color="#9ede73"
      text-color="black"
    >
      {{ correct }}
    </v-chip>
    <v-chip
      class="misplaced"
      :style="$vuetify.breakpoint.name === 'xl' ? 'margin-left:3px' : 'margin-left:-12.25px;'"
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
  /* .v-chip.misplaced {
    margin-left: -12px;
    margin-top: 14px;
  } */

  .v-chip.v-size--default {
    font-size: 18px !important;
    font-weight: 600 !important;
    opacity:75%;
  }
</style>
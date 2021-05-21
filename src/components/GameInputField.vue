<template>
  <div>
    <div
      class="atk-row mt-2"
      v-for="j in [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]"
      :key="j"
      :data-row="j"
    >
      <button-attack 
        class="atk-col"
        v-for="i in 5" 
        :key="i" 
        :data-column="i-1" 
        color="#eff7e1" 
        icon="close-circle" 
        size="large"
        ripple="false"
      />
      <button-attack 
        class="atk-reset"
        color="#810000"
        icon="trash-can"
        ripple="true"
        dark="true"
      />
     <game-attack-hint 
      correct="2"
      misplaced="3"
     />
    </div>
  </div>
</template>

<script>
import ButtonAttack from "../components/ButtonAttack";
import GameAttackHint from "../components/GameAttackHint";
export default {
  name: 'GameInputField',
  components: {
    ButtonAttack,
    GameAttackHint
  }
}
</script>

<style scoped>
  .atk-reset {
    /* display: none; */
  }
</style>
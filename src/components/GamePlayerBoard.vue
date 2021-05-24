<template>
  <div>
    <!-- Game Input Fields -->
    <game-input-field />
    <!-- Game Inputs -->
    <game-action-bar class="mt-5" />
  </div>
</template>

<script>
import GameActionBar from '../components/GameActionBar.vue'
import GameInputField from '../components/GameInputField.vue'

export default {
  name: 'GamePlayerBoard',
  components: {
    GameActionBar,
    GameInputField
  }
}
</script>
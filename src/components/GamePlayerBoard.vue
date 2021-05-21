<template>
  <div>
    <!-- Game Input Fields -->
    <game-input-field />
    <v-divider class="mt-4"></v-divider>
    <!-- Game Inputs -->
    <game-action-bar class="mt-3" />
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
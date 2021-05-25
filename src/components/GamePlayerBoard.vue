<template>
  <div>
    <!-- Game Input Fields -->
    <game-input-field 
      :playerID="playerID"
    />
    <!-- Game Inputs -->
    <game-action-bar 
      class="mt-5"
      :playerID="playerID"
    />
  </div>
</template>

<script>
import GameActionBar from '../components/GameActionBar.vue'
import GameInputField from '../components/GameInputField.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'GamePlayerBoard',
  components: {
    GameActionBar,
    GameInputField
  },
  props: [
    'playerID'
  ],
  computed: {
    ...mapGetters(['getPlayers'])
  }
}
</script>
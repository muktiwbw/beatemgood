<template>
  <div>

    <!-- Attack Button Inputs -->
    <button-attack 
      v-for="(ab, i) in actionButtons" 
      :key="i" 
      :color="ab.color" 
      :icon="ab.icon" 
      :size="$vuetify.breakpoint.name === 'xl' ? 'medium' : 'small'" 
      dark="true"
      ripple="true"
    />
  </div>
</template>

<script>
import ButtonAttack from "../components/ButtonAttack";
export default {
  name: 'GameActionBar',
  components: {
    ButtonAttack
  },
  data() {
    return {
      actionButtons: [
        { color: 'red', icon: 'hand' },
        { color: 'blue', icon: 'foot-print' },
        { color: 'green', icon: 'access-point' },
        { color: '#fed049', icon: 'sword' },
        { color: 'grey', icon: 'fire' },
        { color: '#333', icon: 'skull' },
      ]
    }
  }
}
</script>
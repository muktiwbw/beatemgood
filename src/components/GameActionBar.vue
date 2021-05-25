<template>
  <div>

    <!-- Attack Button Inputs -->
    <button-attack 
      v-for="(ab, i) in actionButtons" 
      :key="i" 
      :data-button_id="i"
      :color="ab.color" 
      :icon="ab.icon" 
      :size="$vuetify.breakpoint.name === 'xl' ? 'medium' : 'small'" 
      dark="true"
      ripple="true"
      @click.native.prevent="setInput"
    />
  </div>
</template>

<script>
import ButtonAttack from "../components/ButtonAttack";
import { mapActions } from 'vuex';

export default {
  name: 'GameActionBar',
  components: {
    ButtonAttack
  },
  props: [
    'playerID'
  ],
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
  },
  methods: {
    ...mapActions(['submitInput']),
    setInput(e) {
      let el = e.target

      if (el.tagName === 'I' || el.tagName === 'SPAN') {
        while (true) {
          el = el.parentElement

          if (el.tagName === 'BUTTON') break
        }
      }

      const buttonID = el.dataset.button_id
      
      this.submitInput({ playerID: this.playerID, buttonID })
      
      el.blur() // remove focus on button
    }
  }
}
</script>
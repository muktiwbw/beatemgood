<template>
  <div>
    <div
      v-for="j in [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]"
      :key="j"
      :data-row="j"
      class="atk-row"
      :class="j !== 9 ? 'mt-2' : ''"
    >
      <button-attack 
        class="atk-col"
        v-for="i in [0, 1, 2, 3, 4]" 
        :key="i" 
        :color="j <= getPlayers[playerID].turn && getPlayers[playerID].game.input[j][i-(5 - getPlayers[playerID].combination)] ? gameData.iconLib[getPlayers[playerID].game.input[j][i-(5 - getPlayers[playerID].combination)]].color : '#eff7e1'" 
        :icon="j <= getPlayers[playerID].turn && getPlayers[playerID].game.input[j][i-(5 - getPlayers[playerID].combination)] ? gameData.iconLib[getPlayers[playerID].game.input[j][i-(5 - getPlayers[playerID].combination)]].icon : 'close-circle'" 
        :size="$vuetify.breakpoint.name === 'xl' ? 'medium' : 'small'"
        ripple="false"
        :dark="j <= getPlayers[playerID].turn && getPlayers[playerID].game.input[j][i-(5 - getPlayers[playerID].combination)] ? 'true' : 'false'"
      />
      <button-attack
        :class="j < getPlayers[playerID].turn ? 'd-none' : ''"
        color="#810000"
        icon="trash-can"
        :size="$vuetify.breakpoint.name === 'xl' ? 'medium' : 'small'"
        ripple="true"
        dark="true"
        :disabled="getPlayers[playerID].turn === j ? 'false' : 'true'"
        @click.native.prevent="resetInput"
      />
     <game-attack-hint 
      :class="j < getPlayers[playerID].turn ? 'd-inline-flex' : 'd-none'"
      :correct="getPlayers[playerID].game.turns[j].correct"
      :misplaced="getPlayers[playerID].game.turns[j].misplaced"
     />
    </div>
  </div>
</template>

<script>
import ButtonAttack from "../components/ButtonAttack";
import GameAttackHint from "../components/GameAttackHint";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'GameInputField',
  components: {
    ButtonAttack,
    GameAttackHint
  },
  props: [
    'playerID'
  ],
  data() {
    return {
      gameData: {
        iconLib: [
          {
            icon: 'hand',
            color: 'red'
          },
          {
            icon: 'foot-print',
            color: 'blue'
          },
          {
            icon: 'access-point',
            color: 'green'
          },
          {
            icon: 'sword',
            color: '#fed049'
          },
          {
            icon: 'fire',
            color: 'grey'
          },
          {
            icon: 'skull',
            color: '#333'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([ 'getPlayers', 'getGame' ]),
    inputPositionFormula() {
      return 
    }
  },
  methods: {
    ...mapActions([ 'cleanInput' ]),
    resetInput(e) {
      let el = e.target

      if (el.tagName === 'I' || el.tagName === 'SPAN') {
        while (true) {
          el = el.parentElement

          if (el.tagName === 'BUTTON') break
        }
      }
      
      this.cleanInput({ playerID: this.playerID })
      
      el.blur() // remove focus on button
    }
  }
}
</script>
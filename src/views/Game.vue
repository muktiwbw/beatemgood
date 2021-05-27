<template>
  <v-container
    class="tmp-container"
    fluid
  >
    <v-row 
      class="mt-4 justify-content-center"
      justify="center"
    >
      <v-col 
        v-for="(player, i) in getPlayers"
        :key="i"
        md="5"
        lg="5" 
        xl="4"
        class="pa-0"
        :class="player.id === 0 ? 'text-right' : 'text-left'"
        :data-player="player.id" 
        :order="player.id === 0 ? 0 : 1"
      >
        <game-player-board
          :playerID="player.id"
        />
      </v-col>
      <v-col
        cols="2"
      >
        <game-player-info 
          :playersData="getPlayers"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GamePlayerBoard from '../components/GamePlayerBoard.vue'
import GamePlayerInfo from '../components/GamePlayerInfo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Game',
  components: {
    GamePlayerBoard,
    GamePlayerInfo
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getPlayers', 'getGame'])
  },
  methods: {
    ...mapActions(['initiateGame', 'commitInput']),
    submitInput(e) {
      const key = e.key.toLowerCase()

      switch (key) {
        case 'enter':
          const playerID = 0
          const currentTurn = this.getPlayers[playerID].turn

          if (this.getPlayers[playerID].game.input[currentTurn].length === this.getPlayers[playerID].combination) {
            this.commitInput({ playerID })
          }
          
          break;
      }
    }
  },
  created() {
    this.initiateGame()
    window.addEventListener('keyup', this.submitInput)
  }
}
</script>
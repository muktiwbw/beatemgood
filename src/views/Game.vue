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
        v-for="(player, i) in players"
        :key="i"
        md="5"
        lg="5" 
        xl="4"
        class="pa-0"
        :class="player.player === 1 ? 'text-right' : 'text-left'"
        :data-player="player.player" 
        :order="player.player === 1 ? 0 : 1"
      >
        <game-player-board />
      </v-col>
      <v-col
        cols="2"
      >
        <game-player-info 
          :playersData="players"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GamePlayerBoard from '../components/GamePlayerBoard.vue'
import GamePlayerInfo from '../components/GamePlayerInfo.vue'

export default {
  name: 'Game',
  components: {
    GamePlayerBoard,
    GamePlayerInfo
  },
  data() {
    return {
      players: [
        {
          player: 1,
          character: {
            name: 'Crimson Reaper',
            ability: 'Head Smasher',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            gauge: 67
          }
        },
        {
          player: 2,
          character: {
            name: 'Kraken Girl',
            ability: 'Tentangled',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            gauge: 66
          }
        }
      ]
    }
  }
}
</script>
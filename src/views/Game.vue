<template>
  <v-container
    class="tmp-container"
  >
    <v-row class="mt-4">
      <v-col cols="4" class="tmp-col text-center" >
        <game-player-board />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" class="tmp-col text-center" >
        <game-player-board />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GamePlayerBoard from '../components/GamePlayerBoard.vue'

export default {
  name: 'Game',
  components: {
    GamePlayerBoard
  }
}
</script>
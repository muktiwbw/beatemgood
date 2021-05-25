<template>
  <v-row
    style="height: 100%;"
  >
    <v-col
      cols="12"
      v-for="(player, i) in playersData"
      :key="i"
      :class="player.id === 0 ? 'text-left' : 'text-right'"
      :align-self="player.id === 0 ? 'start' : 'end'"
    >
      <v-row>
        <v-col
          cols="4"
          :order="player.id === 0 ? 0 : 1"
          class="pa-0"
          :class="player.id === 0 ? 'text-right' : 'text-left'"
        >
          <v-progress-circular
            :rotate="-90"
            :size="displaySetting.playerInfo.characterGauge.size"
            :width="15"
            :value="player.gauge"
            color="red"
          >
            <v-avatar
              :size="displaySetting.playerInfo.characterAvatar.size"
            >
              <img
                :src="player.character.avatar"
                :alt="player.character.name"
              >
            </v-avatar>
          </v-progress-circular>
        </v-col>
        <v-col
          cols="8"
          align-self="center"
        >
          <div
            :style="`
              font-weight: ${displaySetting.playerInfo.characterName.fontWeight};
              font-size: ${displaySetting.playerInfo.characterName.fontSize}px;
              `"
          >[P{{ player.id }}] {{ player.character.name }}</div>
          <div
            :style="`
              font-size: ${displaySetting.playerInfo.characterAbility.fontSize}px;
              `"
          >{{ player.character.ability }}</div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'GamePlayerInfo',
  props: [
    'playersData'
  ],
  data() {
    return {
      displaySetting: {
        playerInfo: {
          characterGauge: {
            size: this.$vuetify.breakpoint.name === 'xl' ? 85 : 65
          },
          characterAvatar: {
            size: this.$vuetify.breakpoint.name === 'xl' ? 70 : 55
          },
          characterName: {
            fontWeight: 600,
            fontSize: this.$vuetify.breakpoint.name === 'xl' ? 16 : 14
          },
          characterAbility: {
            fontSize: this.$vuetify.breakpoint.name === 'xl' ? 14 : 12
          }
        }
      }
    }
  }
}
</script>
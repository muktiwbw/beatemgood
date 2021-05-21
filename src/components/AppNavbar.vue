<template>
  <div>
    <v-app-bar
      id="navbar"
      color="#e84545"
      dense
      dark
    >
      <v-toolbar-title>BEAT 'EM GOOD</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  #navbar {
    font-family: 'Permanent Marker', cursive;
  }
</style>

<script>
export default {
  name: 'AppNavbar'
}
</script>
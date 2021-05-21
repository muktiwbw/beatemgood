<template>
  <v-app>
    <!-- Navbar -->
    <app-navbar/>

    <!-- Main Content -->
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  }
 
  
};
</script>

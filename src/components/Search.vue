<template>
  <div>
    <div>
      <p>Juegos Disponibles {{games.length}}</p>
    </div>
    <input type="text" placeholder="Buscar" v-model="search" />
    <GamesList :games="filterGames" />
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import GamesList from "./GamesList";

export default {
  data() {
    return {
      search: null
    };
  },
  components: {
    GamesList
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["findGame"]),
    filterGames() {
      if (this.search) {
        return this.findGame(this.search);
      } else {
        return this.games;
      }
    }
  }
};
</script>
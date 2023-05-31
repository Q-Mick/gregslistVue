<template>
  <div class="container-fluid">
    <section class="row p-3 justify-content-end">
      <button
        class="col-3 btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#create-house"
      >
        Create House 🏠
      </button>
    </section>

    <section class="row">
      <!-- NOTE when I want to pass data from a parent component to the child... we do that using props -->
      <div
        class="col-md-3 my-3"
        v-for="house in HousesInAppState"
        :key="house.id"
      >
        <HouseCard :houseProp="house" />
      </div>
    </section>

  </div>
  <Modal id="create-house">
    <HouseForm />
  </Modal>
</template>


<script>
import { computed, onMounted } from "vue";
import { houseService } from "../services/HousesService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import HouseCard from "../components/HouseCard.vue";
export default {
  components: { HouseCard },
  setup() {
    async function getHouses() {
      try {
        await houseService.getHouses();
      } catch (error) {
        Pop.error(error.message);
        logger.log(error);
      }
    }

    onMounted(() => {
      getHouses();
    });

    return {
      HousesInAppState: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
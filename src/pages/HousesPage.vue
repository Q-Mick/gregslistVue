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
        v-for="house in housesInAppState"
        :key="house.id"
      >
        <HouseCard :houseProp="house" />
      </div>
    </section>
  </div>
</template>


<script>
import { onMounted } from "vue";
import { houseService } from "../services/HousesService.js";

export default {
  setup() {
    async function getHouses() {
        try {
          await houseService.getHouses()
        } catch (error) {
            pop.error(error.message)
            logger.log(error)
        }
    }

      onMounted(()=>{
        getHouses()
      })

    return {

    };
  },
};
</script>


<style lang="scss" scoped>
</style>
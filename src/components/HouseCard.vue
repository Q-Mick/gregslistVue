<template>

  <div class="rounded elevation-5">
    <router-link :to="{ name: 'HouseDetails', params: { houseId: houseProp?.id } }">
       <!--⬆️ aliasing houseId from parameter to houseprop ⬇️ binding src attribute to house prop value  -->
            <img class="img-fluid rounded-top" :src="houseProp?.imgUrl" alt="">
        </router-link>
        <div class="p-2">
            <h1>{{ houseProp?.model }}</h1>
            <div class="d-flex justify-content-between align-items-center">
                <p>{{ houseProp?.price }}</p>
                <img class="creator-img" :src="houseProp?.creator.picture" alt="">
            </div>
            <div class="text-end py-2">
                <!-- NOTE FOR UI: if you are going to use an icon as or on a button, you MUST have a title tag that denotes its purpose -->
                <!-- NOTE only show the button if the person logged in is the person who created it -->
                <button @click="deleteHouse(houseProp?.id)" v-if="houseProp?.creator.id == account?.id" class="btn btn-danger"
                    title="Delete House"><i class="mdi mdi-delete"></i> </button>
            </div>
        </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { houseService } from '../services/HousesService.js';
export default {

// NOTE this is the place to declare props
    props:{
      houseProp:{ type: House, required: true }
    },

  setup(){

    return {

      async deleteCar(carId) {
                try {
                    await carsService.deleteCar(carId)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },
            account: computed(()=>
            AppState.account)
    }
  },
}
</script>


<style lang="scss" scoped>

</style>
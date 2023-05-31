import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HouseService{
  async getHouses() {
    const res = await api.get('api/houses')
    logger.log('[GETTING HOUSE]', res.data)
    AppState.house = res.data.map(h => new House(h))
    logger.log(AppState.house)
}

async getHouseById(houseId) {
    const res = await api.get(`api/houses/${houseId}`)
    logger.log('[GETTING HOUSE BY ID]', res.data)
    AppState.activeHouse = new House(res.data)
}


async createHouse(formData) {
    const res = await api.post('api/houses', formData)
    logger.log('[CREATING HOUSE]', res.data)
    AppState.house.unshift(new House(res.data))
}

async deleteHouse(houseId) {
    const res = await api.delete(`api/houses/${houseId}`)
    logger.log('[DELETING HOUSE]', res.data)
    AppState.house = AppState.house.filter(h => h.id != houseId)
}
}


export const houseService = new HouseService
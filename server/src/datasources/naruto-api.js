const { RESTDataSource } = require("@apollo/datasource-rest");
class NarutoAPI extends RESTDataSource {
    baseURL = "https://dattebayo-api.onrender.com";
    async getCharacters() {
        return this.get("/characters");
    }
    async getCharactersById({ characterId }) {
        return this.get(`/characters/${characterId}`);
    }
    async getClans() {
        const response = await this.get('/clans');
        return response.clans;
    }
    async getClanById({ clanId }) {
        return this.get(`/clans/${clanId}`);
    }
    async getVillages() {
        const response = await this.get('/villages');
        return response.villages;
    }
    async getVillageById({ villageId }) {
        return this.get(`/villages/${villageId}`);
    }

}
module.exports = NarutoAPI;
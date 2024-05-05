const { RESTDataSource } = require("@apollo/datasource-rest");
class IsroAPI extends RESTDataSource {
    baseURL = "https://isro.vercel.app/";
    async getSpacecrafts() {
        const response = await this.get('api/spacecrafts');
        return response.spacecrafts;
    }
    async getLaunchers() {
        const response = await this.get('api/launchers');
        return response.launchers;
    }
    async getCustomerSatellites() {
        const response = await this.get('api/customer_satellites');
        return response.customer_satellites;
    }
    async getCentres() {
        const response = await this.get('api/centres');
        return response.centres;
    }
}
module.exports = IsroAPI;
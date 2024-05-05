const { RESTDataSource } = require("@apollo/datasource-rest");
class JsonplaceholderAPI extends RESTDataSource {
    baseURL = "https://jsonplaceholder.typicode.com/";
    async getUsers() {
        return this.get("users");
    }
    async getUserById({ userId }) {
        return this.get(`users/${userId}`);
    }
    async getPosts() {
        return this.get("posts");
    }
    async getPostById({ postId }) {
        return this.get(`posts/${postId}`);
    }
    async getTodos() {
        return this.get("todos");
    }
    async getPostById({ todoId }) {
        return this.get(`todos/${todoId}`);
    }
    async getAlbums() {
        return this.get("albums");
    }
    async getAlbumById({ albumId }) {
        return this.get(`todos/${albumId}`);
    }
}
module.exports = JsonplaceholderAPI;
const resolvers = {
    Query: {
        Users: (_, __, { datasources }) => datasources.jsonplaceholderAPI.getUsers(),
        Posts: (_, __, { datasources }) => datasources.jsonplaceholderAPI.getPosts(),
        Todos: (_, __, { datasources }) => datasources.jsonplaceholderAPI.getTodos(),
        Albums: (_, __, { datasources }) => datasources.jsonplaceholderAPI.getAlbums(),
        User: (_, { id }, { datasources }) => datasources.jsonplaceholderAPI.getUserById({ userId: id }),
        Post: (_, { id }, { datasources }) => datasources.jsonplaceholderAPI.getPostById({ postId: id }),
        Todo: (_, { id }, { datasources }) => datasources.jsonplaceholderAPI.getTodoById({ todoId: id }),
        Album: (_, { id }, { datasources }) => datasources.jsonplaceholderAPI.getAlbumById({ albumId: id }),
        Characters: (_, __, { datasources }) => datasources.narutoAPI.getCharacters(),
        Character: (_, { id }, { datasources }) => datasources.narutoAPI.getCharactersById({ characterId: id }),
        Clans: (_, __, { datasources }) => datasources.narutoAPI.getClans(),
        Clan: (_, { id }, { datasources }) => datasources.narutoAPI.getClanById({ clanId: id }),
        Villages: (_, __, { datasources }) => datasources.narutoAPI.getVillages(),
        Village: (_, { id }, { datasources }) => datasources.narutoAPI.getVillageById({ villageId: id }),
        Spacecrafts: (_, __, { datasources }) => datasources.isroAPI.getSpacecrafts(),
        Launchers: (_, __, { datasources }) => datasources.isroAPI.getLaunchers(),
        CustomerSatellites: (_, __, { datasources }) => datasources.isroAPI.getCustomerSatellites(),
        Centres: (_, __, { datasources }) => datasources.isroAPI.getCentres(),


    },
    Post: {
        author: (parent, __, { datasources }) => {
            return datasources.jsonplaceholderAPI.getUserById({ userId: parent.userId })
        }
    },
    Todo: {
        author: (parent, __, { datasources }) => {
            return datasources.jsonplaceholderAPI.getUserById({ userId: parent.userId })
        }
    },
    Album: {
        author: (parent, __, { datasources }) => {
            return datasources.jsonplaceholderAPI.getUserById({ userId: parent.userId })
        }
    },
    User: {
        posts: (parent, __, { datasources }) => {
            return datasources.jsonplaceholderAPI.getPosts().then(posts => posts.filter(post => post.userId === parent.id))
        }
    }
}


module.exports = resolvers;
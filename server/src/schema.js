const gpl = require('graphql-tag')

const typeDefs = gpl`
# root schema
type Query{
    Users:[User]!
    User(id:ID!):User
    Posts:[Post]!
    Post(id:ID!):Post
    Todos:[Todo]!
    Todo(id:ID!):Todo
    Albums:[Album]!
    Album(id:ID!):Album
    Characters:[Character]!
    Character(id:ID!):Character
    Clans:[Clan]!
    Clan(id:ID!):Clan
    Villages:[Village]!
    Village(id:ID!):Village
    Spacecrafts:[Spacecraft]!
    Launchers:[Launcher]!
    CustomerSatellites:[CustomerSatellite]!
    Centres:[Centre]!
}
type Village{
    id:ID!
    name:String!
    characters:[Int]!
}
type Clan{
    id:ID!
    name:String!
    characters:[Int]!
}
type Centre{
    id:ID!
    name:String!
    Place:String! 
    State:String!
}
type CustomerSatellite{
    id:String!
    country:String!
    launch_date:String! 
    mass:String!
    launcher:String!
}
type Launcher{
id:String!
}
type Spacecraft{
    id:ID!
    name:String!
}
type Character{
    id:ID!
    name:String!
    personal:Personal
}
type Personal{
    birthdate:String
    sex:String
    status:String
    bloodType:String
}
type User{
    id:ID!
    name:String!
    username:String!
    email:String!
    address:Address
    website:String!
    phone:String!
    posts:[Post]
    todos:[Todo]
    albums:[Album]
}
type Address{
    street:String!
        city:String!
        suite:String!
        zipcode:String!
}

type Post{
    id:ID!
    title:String!
    body:String!
    author:User!
}

type Todo{
    id:ID!
    title:String!
    completed:Boolean!
    author:User!
}
type Album{
    id:ID!
    title:String!
    author:User!
}

`;
module.exports = typeDefs;
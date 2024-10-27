// const { projects, clients } = require('../sampleData.js');

//Moongooose Models Here
const Project = require("../models/Project");
const Client = require("../models/Client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");


// Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return projects.find(project => project.id = args.id) -- this is for local data from sampleData.js
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return clients.find(client => client.id === args.id) -- this is for local data from sampleData.js
        return Client.findById(args.id);
      },
    },  
    // New query to find projects by clientId
    projectsByClient: {
      type: new GraphQLList(ProjectType),
      args: { clientId: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Project.find({ clientId: args.clientId });
      },
    }
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a Client to MongoDB
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client.save();
      },
    },

    // Delete a Client from MongoDB
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
      },
    },

    // Update a Client from monogoDB
    updateClient:{
      type: ClientType,
      args:{
        id:{ type: GraphQLNonNull(GraphQLID)},
        name:{ type: GraphQLString},
        email:{ type: GraphQLString},
        phone:{ type: GraphQLString},
      },
      resolve(parent,args){
        return Client.findByIdAndUpdate(args.id,
          {
            $set:{
              name: args.name,
              email: args.email,
              phone: args.phone
            }
          },
          {new:true}
        )
      }
    },

    //Add a Project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });

        return project.save();
      },
    },

    // delete a Project
    deleteProject:{
      type: ProjectType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve(parent,args){
        return Project.findByIdAndRemove(args.id)
      }
    },

    // Update a Project
    updateProject:{
      type: ProjectType,
      args:{
        id: {type: GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          })
        },
      },
      resolve(parent,args){
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set:{
              name:args.name,
              description:args.description,
              status:args.status
            }
          },
          {new:true}
        )
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

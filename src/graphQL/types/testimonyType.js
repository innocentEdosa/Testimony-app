import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';
import userType from './user';

export const createTestimonyType = new GraphQLObjectType({
  name: 'createTestimonyType',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    meta: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: new GraphQLNonNull(userType),
      resolve: async (obj, args, { req, db }) => {
        try {
          const author = await db.user.findOne({
            id: req.userId,
          });
          author.dataValues.token = 'You cannot get the authors token';
          return author.dataValues;
        } catch (error) {
          return error;
        }
      },
    },
    approved: { type: new GraphQLNonNull(GraphQLBoolean) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export const fetchAllTestimoniesType = new GraphQLObjectType({
  name: 'fetchAllTestimoniesType',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    meta: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: new GraphQLNonNull(userType),
    },
    approved: { type: new GraphQLNonNull(GraphQLBoolean) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
});


export const testimonyInputType = new GraphQLInputObjectType({
  name: 'testimonyInputType',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    meta: { type: new GraphQLNonNull(GraphQLString) },
  },
});

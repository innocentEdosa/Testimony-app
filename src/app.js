import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import cors from 'cors';
import uuidv4 from 'uuid/v4';
import dotenv from 'dotenv';
import schema from './graphQL/schema';
import db from '../models';

const app = express();
dotenv.config({ path: path.resolve(__dirname, '../.env') });
app.use(cors());

app.use('/graphql', graphqlHTTP((req) => ({
  schema,
  graphiql: true,
  customFormatErrorFn(err) {
    if (!err.originalError) {
      return err;
    }
    const { data } = err.originalError;
    const message = err.message || 'something is definitely not right';
    const code = err.originalError.code || 500;
    return { message, status: code, data };
  },
  context: {
    req,
    db,
    id: uuidv4(),
  },
})));
app.listen(process.env.PORT || 9999);

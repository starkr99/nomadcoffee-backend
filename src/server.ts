require('dotenv').config();
import {ApolloServer} from "apollo-server-express";
import schema from "./schema";
import express from "express"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

  
async function startServer() {
    
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground(),],
    });
 
    await server.start();
  
    const app = express();
  
    server.applyMiddleware({ app });
  
    const port:String = process.env.SERVER_PORT;
    app.listen({ port }, (): void =>{
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
  }
  
  startServer();
  

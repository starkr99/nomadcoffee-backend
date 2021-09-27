import { PrismaClient } from "@prisma/client";

type Context = {
    client:PrismaClient;
    headers:any;
}

export type Resolver = (root:any, args:any, context:Context, info: any) => any;
export type Resolvers = {
    [key: string]: {
        [key: string]: Resolver;
    }
}
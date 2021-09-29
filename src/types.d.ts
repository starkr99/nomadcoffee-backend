import { PrismaClient } from "@prisma/client";

type CoffeeContext = {
  client: PrismaClient;
  headers: any;
};

export type Resolver = (
  root: any,
  args: any,
  context: CoffeeContext,
  info: any
) => any;
export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};

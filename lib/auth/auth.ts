import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { setServers } from "node:dns/promises";

if (process.env.NODE_ENV !== "production") {
  setServers(["1.1.1.1", "8.8.8.8"]);
}

const client = new MongoClient(process.env.MONGODB_URI!, {
    family: 4, 
});

const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client, 
    }),
    emailAndPassword: {
        enabled: true,
    }
});
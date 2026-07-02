import env from "@/app/env"

import {Client, Account , Avatars, Databases, Storage, Users} from "appwrite";

let client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.ProjectID) // Your project ID
    .setKey(env.appwrite.apikey) // Your secret API key

;

    const databases = new Databases(client)
    const users = new Users(client);
    const avatars = new Avatars(client);
    const storage = new Storage(client);

    export {client,databases,users,avatars,storage}

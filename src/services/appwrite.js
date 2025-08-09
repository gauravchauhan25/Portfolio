import { Client, Account, Databases, ID } from "appwrite";
import config from "./config";

export class Services {
  client = new Client();
  account;
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async feedback(name, email, feedback) {
    try {
      const response = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          name,
          email,
          feedback, 
        }
      );
      return response;
    } catch (error) {
      console.log("Error giving feedback ", error);
    }
  }
}

const api = new Services();
export default api;

import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora_tut",
  projectId: "66b1c33b00157f2a8e6d",
  databaseId: "66b1c439000cf9ee7216",
  userCollectionId: "66b1c45a0010386c76ea",
  videoCollectionId: "66b1c4750009f9ac76c7",
  storageId: "66b1c5cd0000b78bc5ef",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

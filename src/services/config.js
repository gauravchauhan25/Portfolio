const config = {
    appwriteUrl: String(import.meta.env.VITE_REACT_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_REACT_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_REACT_APP_APPWRITE_COLLECTION_ID),
}

export default config;
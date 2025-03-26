import admin from "firebase-admin";
import dotenv from "dotenv";
import { env } from "../env";

dotenv.config();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: env.STORAGE_BUCKET,
    projectId: env.PROJECT_ID,
  });
}

const db = admin.firestore();

export { admin, db };

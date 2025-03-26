export interface FirebaseEnv {
  API_KEY: string;
  AUTH_DOMAIN: string;
  PROJECT_ID: string;
  STORAGE_BUCKET: string;
  SENDER_ID: string;
  APP_ID: string;
}

export const firebaseEnv: FirebaseEnv = {
  API_KEY: process.env.FIREBASE_API_KEY!,
  AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN!,
  PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
  STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET!,
  SENDER_ID: process.env.FIREBASE_SENDER_ID!,
  APP_ID: process.env.FIREBASE_APP_ID!,
};

export const env = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL!,
  API_KEY: process.env.NEXT_PUBLIC_API_KEY!,
  AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
  PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID!,
  STORAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
  SENDER_ID: process.env.NEXT_PUBLIC_SENDER_ID!,
  APP_ID: process.env.NEXT_PUBLIC_APP_ID!,
}
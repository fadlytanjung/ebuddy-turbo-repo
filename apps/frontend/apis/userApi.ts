import { auth, signInWithEmailAndPassword, signOut } from "@shared/firebase/client";
import { env } from "@shared/env"

export const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  if (user) {
    const token = await user.getIdToken();
    const response = await fetch(
      `${env.API_BASE_URL}/user/fetch-id-by-email/${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const res = await response.json();

      return { token, ...res };
    } else {
      throw new Error("User not found in Firestore");
    }
  }

  throw new Error("Login failed");
};

export const logoutUser = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("uid");
  await signOut(auth);
};

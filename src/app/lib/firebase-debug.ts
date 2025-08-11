import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export async function debugFirestore() {
  try {
    console.log("Testing Firestore connection...");

    // Test collection access
    const testCollection = collection(db, "guests");
    const snapshot = await getDocs(testCollection);

    console.log("Firestore connection successful!");
    console.log("Total guests in collection:", snapshot.size);

    snapshot.forEach((doc) => {
      console.log("Guest data:", { id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Firestore connection failed:", error);
  }
}

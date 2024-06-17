import { getFirestore, doc, setDoc, getDoc, deleteDoc, updateDoc,collection, getDocs } from "firebase/firestore";
import { db } from '../../core/config/firebase'

export const createUser = async (userAuth: any, additionalData = {}) => {
    if (!userAuth) return null;

    const userRef = doc(db, `users/${userAuth.uid}`);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        await setDoc(userRef, {
            email: userAuth.email,
            role: "baseUser",
            ...additionalData,
        });
        return { uid: userAuth.uid, email: userAuth.email, role: "baseUser", ...additionalData };
    }
    return docSnap.data();
};


//@ts-ignore
export const getUserProfile = async (userId) => {
    const userRef = doc(db, `users/${userId}`);
    const docSnap = await getDoc(userRef);


    if (docSnap.exists()) {
        return docSnap.data();
    }
    return null; // User does not exist
};


//@ts-ignore
export const checkUserRole = async (userId) => {
    const userRef = doc(db, `users/${userId}`);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        return docSnap.data().role;
    }
    return null;
};

//@ts-ignore
export const updateUser = async (userId, updateData) => {
    const userRef = doc(db, `users/${userId}`);

    try {
        await updateDoc(userRef, updateData);
        return true;
    } catch (error) {
        console.error("Error updating user profile:", error);
        return false;
    }
};


//@ts-ignore
export const deleteUserFirestoreProfile = async (userId) => {
    const userRef = doc(db, `users/${userId}`);

    try {
        await deleteDoc(userRef);
        return true;
    } catch (error) {
        console.error("Error deleting user profile:", error);
        return false;
    }
};

//@ts-ignore
export const listAllUsers = async () => {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    const userList = snapshot.docs.map(doc => doc.data());
    return userList;
};
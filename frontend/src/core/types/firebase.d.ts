
interface FirebaseUserType {
    email: boolean;
    name: string;
    role: string | "baseUser";
    loginProvider: string;
    lastLogin: string;
    createdAt: string;
}
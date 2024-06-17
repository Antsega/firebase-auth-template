import { get } from "http";
import { getHeaders } from "./api";

export const deleteFirebaseUser = async (userId: any) => {

    // This will delete a user along with all objects associated with that user via UID via the extension


    const functionUrl = "http://127.0.0.1:5001/fir-auth-template-cf488/us-central1/deleteFirebaseUser"

    console.log('Function URL:', functionUrl)
    console.log('gcsUri:', userId)
    const res = await fetch(functionUrl,
    { 
        method: 'POST', 
        headers: getHeaders(),
        body: JSON.stringify({userId}) 
    });
    console.log('Response:', res)
    return res.json();
}


export const createFirebaseUser = async (userData: any) => {

    const { email, firstName, lastName, password, role } = userData;

    const functionUrl = "http://127.0.0.1:5001/fir-auth-template-cf488/us-central1/createFirebaseUser"


    const res = await fetch(functionUrl,
    { 
        method: 'POST', 
        headers: getHeaders(),
        body: JSON.stringify({email, firstName, lastName, password, role}) 
    });
    console.log('Response:', res)
    if (res.status === 200) {
        return true;
    } else {
        return false;
    }
}

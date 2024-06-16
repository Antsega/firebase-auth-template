import { get } from "http";
import { getHeaders } from "./api";


export const generateCSA = async (formData: any) => {
    const functionUrl = "http://127.0.0.1:5001/freetech-production/us-central1/generateCSA"
    // const functionUrl = "https://us-central1-freetech-production.cloudfunctions.net/generateCSA"

    const res = await fetch(functionUrl,
    { 
        method: 'POST', 
        headers: getHeaders(),
        body: JSON.stringify(formData) 
    });
    return res.json();
}


export const downloadCSA = async (gcsUri: any) => {

    // const functionUrl = "http://127.0.0.1:5001/freetech-production/us-central1/downloadCSA"
    const functionUrl = "https://us-central1-freetech-production.cloudfunctions.net/downloadCSA"

    console.log('Function URL:', functionUrl)
    console.log('gcsUri:', gcsUri)
    const res = await fetch(functionUrl,
    { 
        method: 'POST', 
        headers: getHeaders(),
        body: JSON.stringify({gcsUri: gcsUri}) 
    });
    console.log('Response:', res)
    return res.json();
}

export const deleteFirebaseUser = async (userId: any) => {

    // This will delete a user along with all objects associated with that user via UID via the extension


    const functionUrl = "http://127.0.0.1:5001/freetech-production/us-central1/deleteFirebaseUser"
    // const functionUrl = "https://us-central1-freetech-production.cloudfunctions.net/deleteFirebaseUser"

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

    const functionUrl = "http://127.0.0.1:5001/freetech-production/us-central1/createFirebaseUser"
    // const functionUrl = "https://us-central1-freetech-production.cloudfunctions.net/deleteFirebaseUser"


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

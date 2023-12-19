import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB0nLiVRxSqGODJeJomOQSdOMawmp59SDQ",
    authDomain: "restaurantdeliveryfood-9e6c0.firebaseapp.com",
    projectId: "restaurantdeliveryfood-9e6c0",
    storageBucket: "restaurantdeliveryfood-9e6c0.appspot.com",
    messagingSenderId: "243636326190",
    appId: "1:243636326190:web:59bbfb443b6e982473b4bf"    
}

const app  = initializeApp(firebaseConfig)
export const firebaseDatabase = getFirestore(app)
import { firebaseDatabase } from "./firebase";
import { onSnapshot, collection, doc, setDoc, addDoc, orderBy, query } from "firebase/firestore";

export async function sendMessage(data) {
    if (data.products[0].hasOwnProperty("mem_id")) {
        console.log(data)
        const result = await addDoc(collection(firebaseDatabase, "Order", `Pajoy${data.products[0].mem_id}`),
        {
            mem_id: data.products[0].mem_id,
            status_order: data.status,
            order_data: data.products
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(`firebase send message error >> ${error}`)
        })
        console.log(result)
    }
}

export function receiveMessage(data) {
    return
}
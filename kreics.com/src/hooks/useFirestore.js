import { useEffect, useState } from "react"

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase/config";

const useFirestore = (gallery) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const colRef = collection(db, gallery);

        const unsub = onSnapshot(colRef, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        return unsub;

    }, [gallery])

    return { docs };
}

export default useFirestore;
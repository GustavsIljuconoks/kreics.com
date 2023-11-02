import React from 'react';

import { Link } from "react-router-dom";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

const WorkList = (props) => {
    let path = "test/" + props.data.project + "/children";

    const query = collection(db, path);
    const [docs] = useCollectionData(query);

    return (
        <ul className='ml-4'>
            {docs?.map(doc => (
                <li key={doc.event_name}>
                    <Link to={{ pathname: "/work/" + props.data.project + "/" + doc.event_name }} state={{ eventName: doc.event_name, description: doc.description, thumbnail: doc.imageUrl }}> 
                        {doc.event_name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default WorkList
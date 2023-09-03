import React from 'react';

import { Link, useParams, useLocation } from "react-router-dom";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

const WorkList = ({ data, path }) => {
    
    const query = collection(db, path);
    const [docs, loading, error] = useCollectionData(query);

    // const projectInfo = {
    //     imageUrl: docs.imageUrl,
    //     eventName: docs.event_name,
    //     description: docs.description
    // };

    return (
        <ul className='ml-4'>
            {docs?.map(doc => (                
                <li key={doc.event_name}>
                    <Link to={{ pathname: "/work/" + doc.event_name }}> 
                        {doc.event_name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default WorkList
import React, {useState, useEffect} from 'react';
import {getCurrentIssueId, getIssue} from './api';

export default function App(){
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getIssue(getCurrentIssueId())
            .then(res =>
                setData(res)
            )
    }, []);

    const showText = () => {
      setShow(!show)
    };

    return (
        <div>
            <h2> {data && data.title} </h2>
            <div>
              <button onClick={showText}>
                todo ▼
              </button>
                {show &&
                (<ul>
                    <li>
                    inProgress
                    </li>
                    <li>
                    Done
                    </li>
                    </ul>
                    )
                }
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { routes } from '../routes';

export default function CandidatesPage(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        }

        fetchData();
    }, [])
    return (
        <div className="candidates">

            <table id="tablo">
                <tbody>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Telefon</th>
                    </tr>
                </tbody>
                {data.map(repo =>
                    <tbody>

                        <tr key={repo.id}>

                            <td>{repo.name}</td>
                            <td>{repo.username}</td>
                            <td>{repo.phone}</td>
                            <td><button className="button" onClick={(e) => props.handlePageChange(routes.detailPage.path, repo)}>Detail</button></td>

                        </tr>
                    </tbody>

                )}
            </table>

        </div>
    );

}


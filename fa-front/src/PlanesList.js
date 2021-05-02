import React, { useEffect, useState } from 'react'
const planesAPI = 'http://localhost:3000'
export default function PlanesList() {

    const [planes, setPlanes] = useState([])


    useEffect(() => {
        console.log('Hello')
        fetch(`${planesAPI}/planes`)
        .then(res => res.json())
        .then((json) => setPlanes(json))
    }, [])

    return (
        <div>
            <h1>Here is a list of planes!</h1>
            <ol>
                {planes.map(plane => <li>{plane.name}</li>)}
            </ol>
        </div>
    )
}

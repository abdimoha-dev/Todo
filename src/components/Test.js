import React, { useState } from 'react'

function Test() {
    const obj1 = [{ name: 'Sex Robot', age: 2 }]

    const [details, setDetails] = useState(obj1)

    function assignDetails() {
        //const obj2 = { name: 'Machine', age: 3, res: 'Kale' }
        const residence = "Isiolo"

        const loop = details.map(dt => {
            dt.res = residence
            return { ...details }
        })
        setDetails(loop)
    }
    console.log(details);



    return (
        <form>
            <input onChange={assignDetails} />
        </form>
    )
}

export default Test
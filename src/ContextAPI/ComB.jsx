import React, {useContext} from 'react'
import { NameContext } from './ComA'

const ComB = () => {
    
    const Value = useContext(NameContext);


    return (
        <div>
            <h1>Hello, This is Value of Context API: {Value} </h1>
        </div>
    )
}

export default ComB

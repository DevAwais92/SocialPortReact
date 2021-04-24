import React, { createContext } from 'react'
import ComB from './ComB'

const NameContext = createContext();

const ComA = () => {


    return (
        <div>
            <NameContext.Provider value={"DevAwais92Props"}>
            <ComB />
            </NameContext.Provider>
        </div>
    )
}

export default ComA;
export {NameContext}

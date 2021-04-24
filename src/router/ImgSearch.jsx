import React from 'react'

const ImgSearch = (props) => {

    const img = `https://source.unsplash.com/400x300/?${props.name}`;

    return (
        <div>
            <img src={img} alt="img live search"/>
        </div>
    )
}

export default ImgSearch

import React from 'react'

function Title() {
    console.log('Rendering Started')
    return (
        <h2>UseCallBack Hook </h2>
    )
}

export default React.memo(Title)

import React from 'react';


const Image = ({ srcImg, nameImg, className }) => {
    return(
        <div className="w-100 d-flex justify-content-center">
            <img src={ srcImg } alt={ nameImg } className={className} width="200px" height="200px"/>
        </div>
    )
}

export default Image
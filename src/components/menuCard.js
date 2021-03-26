import React from 'react'

const MenuCard = (props) => {
    console.log(props)
    return (
        <div className="card">
            <a href={props.route}>
            <h3 className="card-title">{props.title}</h3>
            <div className="bar">
                <div className="emptyBar"></div>
                <div className="filledBar"></div>
            </div>
            <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                </svg>
            </div>
            </a>
            </div>

    )

}
export default MenuCard

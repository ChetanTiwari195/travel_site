import React from 'react';

export default function Cards(props){
    return(
        <div className='card'>
            <div className='image'>
                <img src={props.item.img} alt= "cover_image" />
            </div>
            <div className='content'>
                <div className='location'>
                    <img src="./assets/pointer.png"  alt='pointer' />
                    <p className='country'>{props.item.location}</p>
                    <a href= {props.item.googlemap}>Visit on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className='date'>
                <span>{props.item.startDate}</span>
                <span>{props.item.endDate}</span>
                </p>
                <p className='description'>
                    {props.item.description}
                </p>
                <hr />
            </div>
        </div>
    )
}
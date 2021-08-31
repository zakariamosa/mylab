import Logo from '../images/banner.jpg'
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const HundInfo = (props) => 
    
    
    
    (



    <section>
        <section className='dogsec'>
            <div className='theimg'>
                <img src={props.dog.img}></img>
            </div>
            <div className='dogmoreinfo'>
                 <h2>{props.dog.name}</h2>
                 <p>Owner:</p>
                 <p>{props.dog.owner.name} {props.dog.owner.lastName}</p>
                 <p>Telefon number:</p>
                 <p>{props.dog.owner.phoneNumber}</p>
            </div>
        </section>
        <div>
            <Link to="/">
            <button className='vertical'>Börja om</button>
            </Link>
        </div>
        
        
        
    </section>
)


export default HundInfo;
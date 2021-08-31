import React, {useState, useEffect} from 'react';
import banner from  '../images/banner.jpg'
import {Link} from 'react-router-dom';
const Welcome = (/*{ nextScreen }*/) => (
    <div className='welcomepage'>
    
    <img className='welcomeimag' src={banner} alt='b' ></img>
    
    

    <div>
       
       <h2>Välkommen till Doggy day care !</h2>
       <p>Visa Information om Registererade hunder?</p>
       <Link to="/home">
       <button /*onClick= {nextScreen}*/className='box'> Jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa! </button>
       </Link>
   </div>


</div>
    
)

export default Welcome;
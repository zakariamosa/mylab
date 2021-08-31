import Logo from '../images/banner.jpg'

import {Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ico from '../images/bulit-icon.png'

const HundMoreInfo = () => 
    
    
    {
        let currenthundenteredchipnumber=useParams();
        /*currenthundenteredchipnumber=currenthundenteredchipnumber.toUpperCase();*/
        console.log('currenthundenteredchipnumber', currenthundenteredchipnumber.id.toString().toUpperCase());
        const [hundmoreinfocontent, setcontent] = useState(null);
        useEffect(() => {
            // Körs när komponenten har renderats första gången
            // Här passar det att starta ett asyncroint API-anrop
           console.log('useEffect []');
           const apiUrl = 'https://api.jsonbin.io/b/607ed5a21cf7d45e26cf06e3';
           fetch(apiUrl)
           .then((response)=>{
               return response.json();
           })
           .then((data)=>{
              
            let currenthundmoreinfo=data.filter(hund=>hund.chipNumber===currenthundenteredchipnumber.id.toString().toUpperCase())/*'IEH455006')*//*props.match.params.id)*/
            
               setcontent(currenthundmoreinfo.map(hund=>
           
                         
                       <div className='enhund'>
                       <img src={hund.img} alt='a'></img>
                       <div className= 'hundinfosec'>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">{hund.name}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">{hund.age} years old</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">{hund.sex}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">{hund.present=== false ? 'absent' : 'attending'}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">{hund.breed}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">Chip N: {hund.chipNumber}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">Owner 1st name: {hund.owner.name}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">Owner L name: {hund.owner.lastName}</span></div>
                       <div class="image-icon"><img src={ico} alt='c'/><span class="pet_text">Telefon number: {hund.owner.phoneNumber}</span></div>
                       
                       
                       </div>
                       </div>
                       
                   /*</div>*/
                   ))
                   
           
   
   
           })
           .catch((err)=>{
               console.log(err)
           })
       }, [])




    return (



    <div>
       {hundmoreinfocontent}
        
        
        
    </div>
)
    }

export default HundMoreInfo;
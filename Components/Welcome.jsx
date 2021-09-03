import React, { useContext } from 'react';
import banner from  '../images/banner.jpg';
import {Link} from 'react-router-dom';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import BComp from '../BComp';




const Welcome = (/*{ nextScreen }*/) => {
    
    return (
        
    <View>
       <Image
       source={banner}
       style={{width: 220, height: 200, marginLeft:70}}
       />
    
    
    
    

    <div>
       
       <h2>Välkommen till Doggy day care !</h2>
       <p>Visa Information om Registererade hunder?</p>
       <Link to="/home">
       <button /*onClick= {nextScreen}*/className='box'> Jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa! </button>
       </Link>
   </div>
   <BComp/>
 
    </View>
    
    
)
};
export default Welcome;
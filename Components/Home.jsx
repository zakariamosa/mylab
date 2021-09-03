import React, {useState, useEffect, useContext} from 'react';

import HundInfo from './HundInfo';
import ico from '../images/bulit-icon.png';
import {useHistory, useParams} from 'react-router-dom';
import icopresent from '../images/present.png';
import icoabsent from '../images/absent.jpg';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import BComp from '../BComp';




import XyzContext, { XyzProvider } from "../XyzContext";


const Home = ({ nextScreen/*, dogname*/ },props) => {
    
    
    const [hasData, setHasData] = useState(false);
    const [content, setcontent] = useState(null);
    const [hundname, sethundname] = useState(null);
    const history = useHistory();

    let icon=ispresent=>{
        return ispresent?icopresent:icoabsent;
    }

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och varje gång komponenten uppdateras
        console.log('useEffect körs');
        document.title = 'Running useEffects...';

    } )

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
            
            setcontent(data.map(hund=>
                <ScrollView>
                <Image
                source={hund.img}
                style={{width: 220, height: 200}}
              /> 
              <Button
                  onPress={()=>{

                    setcontent(  
                        <HundInfo
                            dog={hund}
                        />
                    );
                                    
<XyzProvider value={{ test: hund.name }}>
        {" "}
        <BComp />
      </XyzProvider>

                  }}
                  title="More Info"
                  
              />
              </ScrollView>
                
                ))
                
        


        })
        .catch((err)=>{
            console.log(err)
        })
       
    }, [])

    

   



    

    const imageClick = (n) => {
        
        console.log('Clickkk', {n});
      } 
      

    


    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och när hasData uppdateras
        console.log(' useEffects körs - hasData har ändrats', hasData);
    }, [hasData])

    console.log("Home function körs");

    const [columns, setColumns] = useState(1);

    let columnsClass = 'gallery';
    if( columns === 1) {
        columnsClass += ' one-column'
    } else if( columns === 2) {
        columnsClass += ' two-columns';
    } else if( columns === 3) {
        columnsClass += ' three-columns';   
    }

    return (
        <div>
           
         
            
            <div id="dogs" className = {columnsClass}>
            {content}
            </div>

        </div>
    )
}

export default Home;


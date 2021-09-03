import { StatusBar } from 'expo-status-bar';
import React, {useState, Component, Fragment} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';

import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';
import Home from './Components/Home';
import Logo from './images/logo.png'
import HundInfo from './Components/HundInfo';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import HundMoreInfo from './Components/HundMoreInfo';

import { useContext } from "react";
import XyzContext, { XyzProvider } from "./XyzContext";
import BComp from './BComp';



 function App() {
  const [isHungry, setIsHungry] = useState(true);
  const [textpreviousecats, setText] = useState('');
  const WELCOME = 'welcome', HOME = 'Home', HUNDINFO = 'HundInfo';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [currentdog, setCurrentdog] = useState('flex');
  
  /*const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };*/
  let content = null;
  switch(currentScreen) {
    case WELCOME:
      content = <Welcome
        nextScreen={() => setCurrentScreen(HOME)} 
        dogname={currentdog}
        />
      break;
      case HOME:
      content = <Home
        nextScreen={hund=>() => {
          console.log('here we go: ', hund)
          setCurrentdog(hund)
          setCurrentScreen(HUNDINFO) 
        }        
        } 
        dog={currentdog}
        
        />
      break; 
    default:
      content = <HundInfo
      nextScreen={hund=>() => {
        setCurrentdog(hund)
        setCurrentScreen(WELCOME)
        
      }   
      } 
      dog={currentdog}
      />;
      
  }/*
  return (
    <View style={styles.container}>
      <Text>Meeeeeeeeeeeeeew!</Text>
      <StatusBar style="auto" />
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
        <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <Text>what was your previouse cats names ?</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here previous cats!"
        onChangeText={text => setText(text)}
        defaultValue={textpreviousecats}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {textpreviousecats.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      <ScrollView>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 80 }}>React Native</Text>
  </ScrollView>

  
  <Button
        onPress={() => 
          ReactDOM.render(
          <Additem
          item= "ppppp"
          />
          )
        }
      />


    </View>
  );*/


  return (
    <View style={styles.container}>
    
            <header>
            
      <Image
                source={Logo}
                style={{width: 220, height: 90, backgroundColor: 'black'}}
              /> 
              

      </header>
      
      <Router>
      <Switch>
      <Route exact path="/">

      <XyzProvider value={{ test: "defaulttttttt" }}>
       
      </XyzProvider>



            <Welcome/>

              
            


            </Route>
            <Route path="/home">
            

            <Home
              nextScreen={hund=>() => {
              setCurrentdog(hund)
              setCurrentScreen(HUNDINFO) 
              }        
        } 
        
        
        />



            </Route>

            <Route path="/hundinfo">

<HundInfo
  nextScreen={hund=>() => {
  setCurrentdog(hund)
  setCurrentScreen(WELCOME)
  }   
  } 
  dog={currentdog}
  />;



</Route>

<Route path="/dog/:id">

<HundMoreInfo
  nextScreen={hund=>() => {
  setCurrentdog(hund)
  setCurrentScreen(WELCOME)
  }   
  } 
  dog={currentdog}
  />;



</Route>





      </Switch>
      </Router>
    </View>
  );




}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
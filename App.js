import React from 'react';
import { StyleSheet, Text, View, Button, Slider } from 'react-native';
import store from 'react-native-simple-store';
import outfits from './clothes/outfits.json';
import originalInventory from './clothes/inventory.json';
import secrets from './secrets.json';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      offset : parseInt(Math.random() * outfits.length),
      quality: 2,
      trendy: 2,
      formalness: 2,
      inventory: {}
    } 
  }

  componentWillMount(){
    this.refreshWeather()

    store.get("inventory")
      .then(inventory => {
        if (!inventory){
          store.save("inventory", originalInventory)
          inventory = originalInventory;
        }
        console.log("setting inventory")
        this.setState({inventory: inventory})
      })
      .catch(error => console.error(error.message));
  }

  componentWillUnmount(){
    store.update("inventory", this.state.inventory);
  }

  async refreshWeather(){
    try {
      let resp = await fetch('https://api.openweathermap.org/data/2.5/weather?id=5125771&appid=' + secrets.WEATHER_API_KEY)
      let body = await resp.json()
      let temp = KelvinToFarenheit(body.main.temp)
      let minTemp = KelvinToFarenheit(body.main["temp_min"])
      let maxTemp = KelvinToFarenheit(body.main["temp_max"])
      let weather = body.weather[0].description
      this.setState({temp, minTemp, maxTemp, weather})
    } catch(e) {
      console.log("error getting weather. check your api key")
      console.log(e)
    }
  }

  clothesAvailable(outfit){

    if (this.state.inventory[outfit.top] < 1)
      return false

    if (this.state.inventory[outfit.bottom] < 1)
      return false

    return true 
  }

  tempToWarmth(t){
    if (t < 35)
      return 5
    if (t < 45)
      return 4
    if (t < 60)
      return 3
    if (t < 70)
      return 2
    if (t < 80)
      return 1
    else
      return 1
  }

  satisfiesContraints(outfit){
    return true;
    return (outfit.quality === this.state.quality || ((Math.abs(outfit.quality - this.state.quality) === 1) && r()))  && 
           (outfit.trendy === this.state.trendy || (Math.abs(outfit.trendy - this.state.trendy) === 1 &&  r())) &&
           (outfit.formalness === this.state.formalness || (Math.abs(outfit.formalness - this.state.formalness) == 1 && r())) &&
           (this.state.temp === undefined || Math.abs(outfit.warmth -  this.tempToWarmth(this.state.temp)) <= 1)
  }

  launder(){

  }

  render() {
    let outfit;
    for (let i = 0; i < outfits.length; i++){
      let j = (i + this.state.offset) % outfits.length;

      if (this.clothesAvailable(outfits[j]) && this.satisfiesContraints(outfits[j])){
        outfit = outfits[j];
        break;
      }
    }
 
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 20}}> {this.state.weather}, {Math.round(this.state.temp)}F </Text>
        
        {outfit 
          ? <Outfit {...outfit} />
          : (<View style={styles.center}>
              <Text>nothing found :(</Text>
              <Text>do your laundry or something</Text>
             </View>)
        }

        <Text style={{marginTop: 20}}> Quality </Text>
        <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.quality}
          onSlidingComplete={val => this.setState({ quality: val })}
        />
        <Text> Trendiness </Text>
         <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.trendy}
          onSlidingComplete={val => this.setState({ trendy: val })}
        />
        <Text> Formalness </Text>
        <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.formalness}
          onSlidingComplete={val => this.setState({ formalness: val })}
        />       
        <View style={styles.button}>
          <Button
            onPress={() => this.setState({offset : parseInt(Math.random() * outfits.length)})}
            title="Refresh"
          />
          <Button
            onPress={() => {
              if (outfit){
                let inventory = {...this.state.inventory};
                inventory[outfit.top] -= 1;
                inventory[outfit.bottom] -= 1;
                this.setState({inventory: inventory});
              }
            }}
            title="Wear"
          />
          <Button
            onPress={() => {
                  this.setState({
                      inventory: originalInventory,
                      offset : parseInt(Math.random() * outfits.length)
                    })
            }}
            title="Launder"
          />
        </View>
      </View>
    );
  }
}

function KelvinToFarenheit(t){
  return t * 9/5 - 459.67
}

function r(){
    return Math.random() > 0.5
}

function Outfit(props){
  return (
    <View>
      <Text> Top: {props.top} </Text>
      <Text> Bottom: {props.bottom} </Text>
      <Text> Jacket: {props.jacket}</Text>
      <Text> Shoes: {props.shoes}</Text>
      <Text> Socks: {props.socks}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
  },
  slider: {
    width: 175
  }
});

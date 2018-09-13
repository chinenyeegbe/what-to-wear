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

  getCurrentLocation(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, 
          ({code, message}) =>
            reject(Object.assign(new Error(message), {name: "PositionError", code})),
          options);
    });
  }

  async refreshWeather(){
    try {

      let position = await this.getCurrentLocation({ enableHighAccuracy: true, 
                                                      timeout: 20000, 
                                                      maximumAge: 1000 });
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${secrets.WEATHER_API_KEY}` 
      let resp = await fetch(url)
      let body = await resp.json()
      let temp = KelvinToFarenheit(body.main.temp)
      let minTemp = KelvinToFarenheit(body.main["temp_min"])
      let maxTemp = KelvinToFarenheit(body.main["temp_max"])
      let weather = body.weather[0].description
      this.setState({temp, minTemp, maxTemp, weather, lat, long})
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
    if (t < 20)
      return 7
    if (t < 25)
      return 6.5
    if (t < 30)
      return 6
    if (t < 35)
      return 5.5
    if (t < 40)
      return 5
    if (t < 45)
      return 4.5
    if (t < 50)
      return 4
    if (t < 55)
      return 3.5
    if (t < 60)
      return 3
    if (t < 65)
      return 2.
    if (t < 70)
      return 2
    if (t < 75)
      return 1.5
    if (t < 80)
      return 1
    if (t < 85)
      return 0.5
    else
      return 0
  }

  satisfiesContraints(outfit){
    return (outfit.quality === this.state.quality || this.state.quality == 2)  && 
           (outfit.trendy === this.state.trendy || this.state.trendy == 2) &&
           (outfit.formalness === this.state.formalness || this.state.formalness == 2) &&
           (!this.state.temp || outfit.warmth == this.tempToWarmth(this.state.temp) || (Math.abs(outfit.warmth -  this.tempToWarmth(this.state.temp)) <= 0.5) && r())
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
        <Text style={{marginBottom: 20, fontSize: 16}}> {this.state.temp ? this.state.weather : null}, {Math.round(this.state.temp)}F </Text>
        
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
          onSlidingComplete={val => this.setState({ 
            quality: val,
            offset : parseInt(Math.random() * outfits.length)
          })}
        />
        <Text> Trendiness </Text>
         <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.trendy}
          onSlidingComplete={val => this.setState({ 
            trendy: val,
            offset : parseInt(Math.random() * outfits.length)
          })}
        />
        <Text> Formalness </Text>
        <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.formalness}
          onSlidingComplete={val => this.setState({ 
            formalness: val,
            offset : parseInt(Math.random() * outfits.length)
          })}
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
      {Object.keys(props).map( key => {
        if (typeof props[key] === 'string')
          return <Text style={styles.text} key={key}> {key}: {props[key]} </Text>
      })}
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
  },
  text: {
    fontSize: 16
  }
});

import React from 'react';
import { StyleSheet, Text, View, Button, Slider } from 'react-native';
import outfits_ from './outfits.json';
import clothes from './clothes.json';
import secrets from './secrets.json'
const outfits = outfits_.outfits

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      offset : parseInt(Math.random() * outfits.length),
      quality: 2,
      risk: 2,
      formalness: 2
    } 
  }

  componentWillMount(){
    this.refreshWeather()  
  }

  async refreshWeather(){
    let resp = await fetch('https://api.openweathermap.org/data/2.5/weather?id=5125771&appid=' + secrets.WEATHER_API_KEY)
    let body = await resp.json()
    let temp = KelvinToFarenheit(body.main.temp)
    let minTemp = KelvinToFarenheit(body.main["temp_min"])
    let maxTemp = KelvinToFarenheit(body.main["temp_max"])
    let weather = body.weather[0].description
    this.setState({temp, minTemp, maxTemp, weather})
  }

  clothesAvailable(outfit){

    if (clothes.tops[outfit.top] < 1)
      return false

    if (clothes.bottoms[outfit.bottom] < 1)
      return false

    return true 
  }

  satisfiesContraints(outfit){

    return (outfit.quality === this.state.quality || ((Math.abs(outfit.quality - this.state.quality) === 1) && r()))  && 
           (outfit.risk === this.state.risk || (Math.abs(outfit.risk - this.state.risk) === 1 &&  r())) &&
           (outfit.formalness === this.state.formalness || (Math.abs(outfit.formalness - this.state.formalness) == 1 && r())) &&
           (outfit.minTemp < this.state.minTemp && outfit.maxTemp > this.state.maxTemp)
  }

  render() {
    console.log(clothes)

    let outfit;
    for (let i = 0; i < outfits.length; i++){
      let j = (i + this.state.offset) % outfits.length;

      if (this.clothesAvailable(outfits[j]) && this.satisfiesContraints(outfits[j])){
        outfit = outfits[j];
      }
    }

    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 20}}> {this.state.weather}, {Math.round(this.state.temp)}F </Text>
        <Outfit {...outfit} />
        <Text style={{marginTop: 20}}> Quality </Text>
        <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.quality}
          onSlidingComplete={val => this.setState({ quality: val })}
        />
        <Text> Risk </Text>
         <Slider 
          style={styles.slider}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={this.state.risk}
          onSlidingComplete={val => this.setState({ risk: val })}
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
                clothes.tops[outfit.top] -= 1
                clothes.bottoms[outfit.bottom] -= 1
                flushClothes()
                this.forceUpdate()
              }
            }}
            title="Wear"
          />
          <Button
            onPress={() => {
              Object.keys(clothes.tops).map(key => clothes.tops[key] = 1)
              Object.keys(clothes.bottoms).map(key => clothes.bottoms[key] = 3)
              flushClothes()
              this.forceUpdate()
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

function flushClothes(){
  //fs.writeFile('./clothes.json', JSON.stringify(clothes, null, 2) , 'utf-8');
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
  button: {
    flexDirection: 'row',
  },
  slider: {
    width: 175
  }
});

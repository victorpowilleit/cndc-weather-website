const request = require ('request')

const weather_url = "http://api.weatherstack.com/current"
const weather_key = "7ba24090a2417bc3909fd906ff27fc3c"

const forecast = ({coordinates}, callback) => {
  console.log(coordinates)
  const units = '&units=m'
  const url = weather_url + '?access_key=' + weather_key + '&query=' + coordinates + units
  request({ url, json: true }, ( error, {body} ) => {
    const {error:fail, current:weather} = body
    if (error){
      callback('Unable to connect to Weather Service.', undefined)
    }
    else if (fail){
      callback('Unable to find location', undefined)
    }
    else {
    callback(undefined, [
      weather.weather_descriptions + ' - Its currently ' + weather.temperature + ' degrees',
      weather.weather_icons[0]
    ])}
  })
}

module.exports = forecast
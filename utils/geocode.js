const request = require ('request')

const mapbox_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const mapbox_key = "pk.eyJ1IjoidmljdG9ycG93aWxsZWl0IiwiYSI6ImNrOHV6dmN6eDA1ZXMzZnByOXZkdjNwY2oifQ.hD8C2_GY-eeTGyU1BMMD9g"
const mapbox_limit = 1

const geocode = (address, callback) =>{
  const url = mapbox_url + encodeURIComponent(address) + '.json?access_token=' + mapbox_key + '&limit=' + mapbox_limit
  request ({ url, json: true }, (error, {body}) => {
    if(error){
      callback('Unable to connect to Location Services', undefined)
    }
    else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    }
    else {
      // const location = body.features[0]
      const {place_name:place, center:coord} = body.features[0]
      callback(undefined, {
        location: place,
        coordinates: coord[1]+','+coord[0]
      })
    }
  })
}

module.exports = geocode
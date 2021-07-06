const request = require("request")

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic291bXlhcmFuamFuMTYxc3IiLCJhIjoiY2txNDF5emdnMDl5cTJucjEwbDFubTNyaSJ9.3HSakGms9Zn5C9t_3ydPFg'

    request({url: url,json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location service!', undefined)
        }
        else if (response.body.features.length == 0){
            callback('Unable to connect find. Try another service', undefined)
        }
        else{
            callback(undefined, {
                lattitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location:  response.body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode
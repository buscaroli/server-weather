const locHandler = document.querySelector('#loc')           

function onSuccess (pos) {
    let position = pos.coords 
    let {latitude, longitude} = position
    locHandler.textContent = `Latitude: ${latitude}, Longitude: ${longitude}.`
}

function onError() {
    locHandler.textContent = 'Failed to get your location.'
}

function query () {
    if (!navigator.geolocation) {
        onError()
    } else {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }    
}
query()
homeHandler.addEventListener('click', () => {
    if (!homeHandler.classList.contains('active')) {
        homeHandler.classList.add('active')
        if (weatherHandler.classList.contains('active')) {
            weatherHandler.classList.remove('active')
        }
        if (aboutHandler.classList.contains('active')) {
            aboutHandler.classList.remove('active')
        }
    }
})

weatherHandler.addEventListener('click', () => {
    if (!weatherHandler.classList.contains('active')) {
        weatherHandler.classList.add('active')
        if (homeHandler.classList.contains('active')) {
            homeHandler.classList.remove('active')
        }
        if (aboutHandler.classList.contains('active')) {
            aboutHandler.classList.remove('active')
        }
    } 
})

aboutHandler.addEventListener('click', (e) => {
    if (!aboutHandler.classList.contains('active')) {
        aboutHandler.classList.add('active')
        if (weatherHandler.classList.contains('active')) {
            weatherHandler.classList.remove('active')
        }
        if (homeHandler.classList.contains('active')) {
            homeHandler.classList.remove('active')
        }
    } 
})
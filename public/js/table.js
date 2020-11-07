// DEV CONST FOR TESTING PURPOSES

const headings = ['City', 'Year', 'Month', 'Day', 'Tavg C', 'Tmin C',
                  'Tmax C', 'Rain mm', 'Umidity %', 'Wind Km/h', 'Gust Km/h']

const weatherData = [
    {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 1,
        tempAvg: 4.8,
        tempMin: 1,
        tempMax: 11,
        rainMm: 0,
        umidityPercent: 68,
        windSpeed: 29.4,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 2,
        tempAvg: 2.2,
        tempMin: -1.6,
        tempMax: 6,
        rainMm: 0,
        umidityPercent: 76,
        windSpeed: 36.7,
        gustSpeed: 52
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 3,
        tempAvg: 0.7,
        tempMin: -3,
        tempMax: 5,
        rainMm: NaN,
        umidityPercent: 62,
        windSpeed: 33.2,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 4,
        tempAvg: 0.4,
        tempMin: -4,
        tempMax: 7,
        rainMm: NaN,
        umidityPercent: 60,
        windSpeed: 10.7,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 5,
        tempAvg: 1.7,
        tempMin: -2,
        tempMax: 5,
        rainMm: 0,
        umidityPercent: 78,
        windSpeed: 31.3,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 6,
        tempAvg: 0.7,
        tempMin: -1,
        tempMax: 3,
        rainMm: 11,
        umidityPercent: 91,
        windSpeed: 44.6,
        gustSpeed: 65
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 7,
        tempAvg: -1.4,
        tempMin: -4,
        tempMax: 2,
        rainMm: NaN,
        umidityPercent: 94,
        windSpeed: 13,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 8,
        tempAvg: -3.8,
        tempMin: -7,
        tempMax: -0.6,
        rainMm: NaN,
        umidityPercent: 99,
        windSpeed: 7.2,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 9,
        tempAvg: -2.4,
        tempMin: -5,
        tempMax: -1,
        rainMm: 1,
        umidityPercent: 100,
        windSpeed: 14.8,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 10,
        tempAvg: 0.8,
        tempMin: -1,
        tempMax: 2,
        rainMm: 0,
        umidityPercent: 96,
        windSpeed: 25.9,
        gustSpeed: NaN
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 11,
        tempAvg: 2.2,
        tempMin: 1,
        tempMax: 5,
        rainMm: NaN,
        umidityPercent: 80,
        windSpeed: 31.3,
        gustSpeed: 50
      },
      {
        city: 'rimini',
        year: 1980,
        month: 0,
        day: 12,
        tempAvg: 1.7,
        tempMin: -1,
        tempMax: 4,
        rainMm: 2,
        umidityPercent: 83,
        windSpeed: 33.2,
        gustSpeed: NaN
      }
]

const generateTableHead = (table, headings, data) => {
    let head = table.createTHead()
    let row = head.insertRow()
    headings.forEach(item => {
        let th = document.createElement('th')
        let text = document.createTextNode(item)
        th.appendChild(text)
        row.appendChild(th)
    })
}

const generateTable = (table, data) => {    
    for (day of data) {
        let row = table.insertRow()
        for (key in day) {
            let cell = row.insertCell()
            let sanitizedText = day[key] ? day[key] : 'n/a'
            let text = document.createTextNode(sanitizedText)
            cell.appendChild(text)
        }
    }
}

const weatherTable = document.querySelector('#data-table')

generateTableHead(weatherTable, headings)
generateTable(weatherTable, weatherData)
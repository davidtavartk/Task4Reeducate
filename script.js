const weatherData = {
    Tbilisi: {
        city: "Tbilisi",
        date: "2024-09-25",
        temperature: {
            current: 24,
            high: 26,
            low: 18,
            feelsLike: {
                morning: 20,
                afternoon: 25,
                evening: 22,
                night: 19
            }
        },
        humidity: 60,
        wind: {
            speed: 10,
            direction: "NW",
            gusts: {
                morning: 12,
                afternoon: 15,
                evening: 8,
                night: 5
            }
        },
        conditions: "Clear",
        forecast: {
            morning: {
                temperature: 20,
                conditions: "Sunny",
                windSpeed: 12,
                humidity: 65
            },
            afternoon: {
                temperature: 24,
                conditions: "Clear",
                windSpeed: 10,
                humidity: 50
            },
            evening: {
                temperature: 22,
                conditions: "Partly Cloudy",
                windSpeed: 8,
                humidity: 55
            },
            night: {
                temperature: 19,
                conditions: "Clear",
                windSpeed: 5,
                humidity: 70
            }
        },
        airQuality: {
            index: 42,
            status: "Good",
            pollutants: {
                PM2_5: 12,
                PM10: 20,
                O3: 10,
                NO2: 8
            }
        }
    },
    Batumi: {
        city: "Batumi",
        date: "2024-09-25",
        temperature: {
            current: 22,
            high: 25,
            low: 19,
            feelsLike: {
                morning: 21,
                afternoon: 23,
                evening: 20,
                night: 18
            }
        },
        humidity: 70,
        wind: {
            speed: 8,
            direction: "SW",
            gusts: {
                morning: 9,
                afternoon: 11,
                evening: 6,
                night: 4
            }
        },
        conditions: "Partly Cloudy",
        forecast: {
            morning: {
                temperature: 21,
                conditions: "Cloudy",
                windSpeed: 9,
                humidity: 75
            },
            afternoon: {
                temperature: 22,
                conditions: "Partly Cloudy",
                windSpeed: 8,
                humidity: 65
            },
            evening: {
                temperature: 20,
                conditions: "Clear",
                windSpeed: 6,
                humidity: 70
            },
            night: {
                temperature: 18,
                conditions: "Clear",
                windSpeed: 4,
                humidity: 80
            }
        },
        airQuality: {
            index: 55,
            status: "Moderate",
            pollutants: {
                PM2_5: 15,
                PM10: 25,
                O3: 12,
                NO2: 10
            }
        }
    }
};

// Logging each property name 
for (const city in weatherData) {
    console.log("City: ", city)
    for (const property in weatherData[city]) {
        console.log(property)
    }
}

weatherData.Tbilisi.temperature.current = 27;
console.log("Updated weather data", weatherData);

weatherData.Tbilisi.pollutionLevel = "Moderate";
weatherData.Batumi.pollutionLevel = "High";

for (const city in weatherData) {
    // I added repeat \n for more visibility in the console
    console.log("\n".repeat(3) + "City properties of " + city);
    for (const property in weatherData[city]) {
        const value = weatherData[city][property];
        console.log("  ", property, ":", value);
    }
}
console.log("\nBatumi highest temperature: ", weatherData.Batumi.temperature.high);
console.log("Tbilisi evening conditions: ", weatherData.Tbilisi.forecast.evening.conditions);
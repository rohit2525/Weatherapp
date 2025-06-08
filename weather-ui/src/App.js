import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');

    const getWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/weather/forecast?city=${city}`);
            setForecast(response.data);
            setError('');
        } catch (err) {
            setForecast(null);
            setError('Could not fetch weather. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-primary">3-Day Weather Forecast</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="btn btn-primary" onClick={getWeather}>
                    Get Forecast
                </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {forecast && (
                <div className="mt-4">
                    <h4 className="text-success">Forecast for {city}</h4>
                    <ul className="list-group">
                        {forecast.map((day, idx) => (
                            <li key={idx} className="list-group-item">
                                <strong>{day.date}</strong>: High {day.highTemp}°C, Low {day.lowTemp}°C
                                {day.suggestions.length > 0 && (
                                    <ul className="mt-2">
                                        {day.suggestions.map((s, i) => (
                                            <li key={i} className="text-warning">💡 {s}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;

# 🌦️ Weather Forecast App

A full-stack weather forecast application that provides **3-day forecasts** for any city, built with **Java Spring Boot (backend)** and **React (frontend)**. It supports **offline mode**, **weather warnings**, and uses modern practices like **Docker**, **CI/CD**, and **modular architecture**.

---

## 🌐 Live Demo

* **Frontend (Vercel):**
  [https://weatherapp-khaki-nine.vercel.app/](https://weatherapp-khaki-nine.vercel.app/)

* **Backend (API Example):**
  [https://weatherapp-production-8fbb.up.railway.app/api/v1/weather/forecast?city=Pune](https://weatherapp-production-8fbb.up.railway.app/api/v1/weather/forecast?city=Pune)

---

## 🚀 Tech Stack

### 🧠 Backend

* Java 21
* Spring Boot 3.x
* Maven

### 🎨 Frontend

* React 18+
* TypeScript
* Tailwind CSS

### ⚙️ DevOps

* Docker & Docker Compose
* GitHub Actions (CI/CD)
* AWS / Render / Vercel

---

## 📋 Prerequisites

Make sure you have the following installed:

* Java 21
* Node.js 18+ and npm/yarn
* Docker and Docker Compose
* Git

---

## 🛠️ Installation & Setup

### 🔥 Using Docker (Recommended)

1. Clone the repository:

```bash
git clone git@github.com:rohit2525/weather-forecast-app.git
cd weather-forecast-app
```

2. Run the app using Docker Compose:

```bash
docker-compose up --build
```

3. Open in browser:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:8080](http://localhost:8080)

---

### 🧰 Manual Setup

#### ▶️ Backend (Spring Boot)

```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

#### 🌐 Frontend (React)

```bash
cd frontend
npm install
npm start
```

---

## 📁 Project Structure

```plaintext
weather-forecast-app/
├── backend/              # Spring Boot backend
│   └── Dockerfile
├── frontend/             # React frontend
│   └── Dockerfile
├── docker-compose.yml
├── .env
├── .gitignore
└── .github/
    └── workflows/
        └── docker-deploy.yml
```

---

## 🌦️ API Access

* Example:

  ```
  GET /api/v1/weather/forecast?city=London
  ```

* Example Output:

  ```json
  {
    "city": "London",
    "forecasts": [
      {
        "date": "2025-06-08",
        "temp": "17°C",
        "description": "overcast clouds",
        "warning": false
      },
      ...
    ]
  }
  ```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
SPRING_PROFILES_ACTIVE=prod
WEATHER_API_KEY=your_openweathermap_api_key
```

---

## 🧪 Testing

### Backend:

```bash
cd backend
./mvnw test
```

### Frontend:

```bash
cd frontend
npm test
```

---

## 🚀 Deployment

### Production Build

```bash
docker-compose build
docker-compose up -d
```

### CI/CD

GitHub Actions handles automated testing and deployment.
Pipeline: `.github/workflows/docker-deploy.yml`

---

## 📝 Configuration Locations

* `backend/src/main/resources/application.yml` – Spring config
* `frontend/src/config/` – React configuration
* `docker-compose.yml` – Multi-service orchestration

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open a Pull Request 🎉

---

## 🧑‍💻 Code Style

* **Java:** Google Java Style
* **React:** ESLint + Prettier
* **Commits:** Follow [Conventional Commits](https://www.conventionalcommits.org)

---

## 📄 License

MIT License – see [LICENSE](LICENSE)

---

## 👤 Author

**Rohit** – [GitHub Profile](https://github.com/rohit2525)

---

## 🙏 Acknowledgments

Thanks to the Spring Boot, React, and Docker communities.

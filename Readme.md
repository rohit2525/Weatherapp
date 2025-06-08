# WeatherApp

A full-stack weather forecast application that provides 3-day weather predictions, built with Java Spring Boot and React. It supports offline mode, weather warnings, and modern development practices including CI/CD and Docker.

## 🌐 Live Demo

* **Frontend (Vercel):** [https://weatherapp-khaki-nine.vercel.app/](https://weatherapp-khaki-nine.vercel.app/)
* **Backend (Render API Example):**
  [https://weatherapp-production-8fbb.up.railway.app/api/v1/weather/forecast?city=Pune](https://weatherapp-production-8fbb.up.railway.app/api/v1/weather/forecast?city=Pune)

## 🚀 Tech Stack

**Backend:**

* Java 21
* Spring Boot 3.x
* Maven/Gradle

**Frontend:**

* React 18+
* TypeScript/JavaScript
* CSS/Styled Components/Tailwind

**DevOps:**

* Docker & Docker Compose
* GitHub Actions

## 📋 Prerequisites

Make sure you have the following installed:

* Java 21
* Node.js 18+ and npm/yarn
* Docker and Docker Compose
* Git

## 🛠️ Installation & Setup

### 🔥 Using Docker (Recommended)

1. Clone the repository:

```bash
git clone git@github.com:rohit2525/weatherapp.git
cd weatherapp
```

2. Build and run:

```bash
docker-compose up --build
```

3. Open in browser:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:8080](http://localhost:8080)

### 🧰 Manual Setup

#### Backend

```bash
cd Weather
./mvnw clean install
./mvnw spring-boot:run
```

#### Frontend

```bash
cd weather-ui
npm install
npm start
```

## 🐳 Docker Configuration

### Services

* **app**: Spring Boot backend
* **frontend**: React UI

### Environment Variables

Create a `.env` in the root directory:

```env
SPRING_PROFILES_ACTIVE=prod
WEATHER_API_KEY=d2929e9483efc82c82c32ee7e02d563e
```

## 📁 Project Structure

```plaintext
weatherapp/
├── Weather/              # Spring Boot backend
│   └── Dockerfile
├── weather-ui/           # React frontend
│   └── Dockerfile
├── docker-compose.yml
├── .env
├── .gitignore
└── .github/
    └── workflows/
        └── docker-deploy.yml
```

## 🔧 API Access

* **Live Frontend:**
  [https://weatherapp-khaki-nine.vercel.app/](https://weatherapp-khaki-nine.vercel.app/)

* **Live Backend API Example:**
  [https://weatherapp-production-8fbb.up.railway.app/api/v1/weather/forecast?city=Pune](https://weatherapp-production-8fbb.up.railway.app/api/v1/weather/forecast?city=Pune)

## 🧪 Testing

### Backend:

```bash
cd Weather
./mvnw test
```

### Frontend:

```bash
cd weather-ui
npm test
```

## 🚀 Deployment

### Production Build

```bash
docker-compose build
docker-compose up -d
```

### CI/CD

GitHub Actions handle automated build/test/deploy. See `.github/workflows/` for the pipeline setup.

## 📝 Configuration

Key configuration files:

* `Weather/src/main/resources/application.yml` – Spring Boot settings
* `weather-ui/src/config/` – React config
* `docker-compose.yml` – Docker service orchestration

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit (`git commit -m 'Add some amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

* **Java:** Google Java Style Guide
* **React:** ESLint + Prettier
* **Commits:** Follow [Conventional Commits](https://www.conventionalcommits.org/)

## 📄 License

Licensed under the MIT License – see [LICENSE](LICENSE)

## 👥 Author

* **Rohit** – [GitHub](https://github.com/rohit2525)

## 🙏 Acknowledgments

* Spring Boot, React, and Docker communities
* All contributors and maintainers 🙌

## 📞 Support

* Open an issue on GitHub
* Email: **[grohit025@gmail.com](mailto:grohit025@gmail.com)**

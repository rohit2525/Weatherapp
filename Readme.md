# Project Name

Brief description of what your application does and its purpose.

## 🚀 Tech Stack

**Backend:**

- Java 21
- Spring Boot 3.x
- Maven/Gradle

**Frontend:**

- React 18+
- TypeScript/JavaScript
- CSS/Styled Components/Tailwind



**DevOps:**

- Docker & Docker Compose
- GitHub Actions

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Java 21 
- Node.js 18+ and npm/yarn
- Docker and Docker Compose
- Git

## 🛠️ Installation & Setup

### Using Docker (Recommended)

1. Clone the repository:

```bash
git clone git@github.com:rohit2525/weatherapp.git
cd weatherapp
```

2. Build and run with Docker Compose:

```bash
docker-compose up --build
```

3. Access the application:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

### Manual Setup

#### Backend Setup

1. Navigate to the backend directory:

```bash
cd Weather
```

2. Install dependencies and run:

```bash
./mvnw clean install
./mvnw spring-boot:run
```


#### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd weather-ui
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## 🐳 Docker Configuration

### Docker Compose Services

- **app**: Spring Boot backend application
- **frontend**: React frontend application

### Environment Variables

Create a `.env` file in the root directory:

```env
SPRING_PROFILES_ACTIVE=prod
WEATHER_API_KEY=d2929e9483efc82c82c32ee7e02d563e

```

## 📁 Project Structure

```weatherapp/               <-- Git repository root
├── Weather/              <-- Java Spring Boot backend
│   ├── ...
│   └── Dockerfile
├── weather-ui/           <-- React frontend
│   ├── ...
│   └── Dockerfile
├── docker-compose.yml    <-- Multi-service setup
├── .env                  <-- Environment variables (not committed by default)
├── .gitignore
└── .github/
    └── workflows/
        └── docker-deploy.yml  <-- GitHub Actions config

```

## 🔧 API Endpoints

https://weatherapp-khaki-nine.vercel.app/

## 🧪 Testing

### Backend Tests

```bash
cd backend
./mvnw test
```

### Frontend Tests

```bash
cd frontend
npm test
```



## 🚀 Deployment

### Production Build

1. Build the application:

```bash
docker-compose  build
```

2. Deploy:

```bash
docker-compose  up -d
```

### CI/CD Pipeline

This project uses GitHub Actions for automated testing and deployment. See `.github/workflows/` for pipeline configurations.

## 📝 Configuration

### Application Properties

Key configuration files:

- `backend/src/main/resources/application.yml` - Spring Boot configuration
- `frontend/src/config/` - React app configuration
- `docker-compose.yml` - Docker services configuration


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Java: Follow Google Java Style Guide
- React: Use ESLint and Prettier configurations
- Commit messages: Follow Conventional Commits specification

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Rohit** [Rohit](https://github.com/rohit2525/weatherapp)

## 🙏 Acknowledgments

- Spring Boot community
- React community
- Docker community
- Contributors and maintainers

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact us at: your-grohit025@gmail.com

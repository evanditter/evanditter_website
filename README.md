# Evan Ditter - Portfolio Website

A modern, full-stack portfolio website showcasing projects, skills, and professional experience. Built with React and Django to demonstrate both frontend and backend development capabilities.

## 🚀 Live Demo

Visit the live website: [evanditter.com](https://evanditter.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

### Frontend Features

- 🎨 **Modern UI Design** - Clean, responsive design with dark/light mode support
- 📱 **Mobile-First Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
- 🎯 **Interactive Components** - Smooth animations and transitions
- 📧 **Contact Integration** - Direct email contact via mailto links

### Backend Features

- 🗄️ **RESTful API** - Django REST Framework for robust API endpoints
- 📊 **Content Management** - Dynamic content management for projects, skills, and experience
- 🔒 **CORS Support** - Configured for cross-origin requests
- 📚 **Course Management** - Educational content and lessons system
- 🏗️ **Scalable Architecture** - Modular design for easy expansion

### Content Sections

- 🏠 **Hero Section** - Professional introduction with headshot
- 💼 **Projects Portfolio** - Showcase of development projects with filtering
- 🛠️ **Skills & Technologies** - Technical proficiencies and expertise
- 📈 **Professional Experience** - Work history and achievements
- 🎓 **Education** - Academic background and certifications
- 📚 **Courses** - Educational content and tutorials
- 📞 **Contact** - Professional contact information and direct email

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern React with latest features
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **React Router 7.x** - Client-side routing
- **React Query** - Server state management
- **React Icons** - Icon library
- **Axios** - HTTP client for API requests

### Backend

- **Django 5.2.4** - Python web framework
- **Django REST Framework** - API development
- **SQLite** - Database (development)
- **django-cors-headers** - CORS support
- **Pillow** - Image processing
- **python-dotenv** - Environment variables

### Development Tools

- **ESLint** - Code linting
- **Vite Dev Server** - Development server with HMR
- **Django Development Server** - Backend development server

## 📁 Project Structure

```
evanditter_website/
├── evanditter/                    # React Frontend
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/               # Page components
│   │   ├── ui_components/       # Custom UI components
│   │   ├── services/            # API services
│   │   ├── images/              # Static images
│   │   ├── api.js               # API configuration
│   │   └── main.jsx             # App entry point
│   ├── public/                  # Static assets
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
│
└── django_backend_evanditter/    # Django Backend
    ├── django_backend/
    │   ├── blogapp/             # Main application
    │   │   ├── models.py        # Database models
    │   │   ├── views.py         # API views
    │   │   ├── serializers.py   # DRF serializers
    │   │   └── urls.py          # URL routing
    │   ├── backend_evanditter/  # Django settings
    │   ├── media/               # User uploaded files
    │   ├── db.sqlite3           # SQLite database
    │   ├── manage.py            # Django management
    │   └── requirements.txt     # Python dependencies
    └── venv_evanditter/         # Python virtual environment
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/evanditter/evanditter_website.git
   cd evanditter_website
   ```

2. **Setup Frontend**

   ```bash
   cd evanditter
   npm install
   ```

3. **Setup Backend**

   ```bash
   cd ../django_backend_evanditter
   python -m venv venv_evanditter
   source venv_evanditter/bin/activate  # On Windows: venv_evanditter\Scripts\activate
   cd django_backend
   pip install -r requirements.txt
   ```

4. **Environment Variables**

   Create a `.env` file in `django_backend_evanditter/django_backend/`:

   ```env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   ```

5. **Database Setup**
   ```bash
   python manage.py migrate
   python create_sample_data.py  # Optional: Load sample data
   ```

## 🔧 Development

### Running the Development Servers

1. **Start the Backend Server**

   ```bash
   cd django_backend_evanditter/django_backend
   source ../venv_evanditter/bin/activate
   python manage.py runserver
   ```

   Backend will be available at: `http://127.0.0.1:8000`

2. **Start the Frontend Server**
   ```bash
   cd evanditter
   npm run dev
   ```
   Frontend will be available at: `http://localhost:5173`

### Development Workflow

- **Frontend**: Hot reload enabled - changes reflect immediately
- **Backend**: Auto-reload enabled - Django restarts on file changes
- **API**: Frontend configured to proxy API requests to Django backend

## 📡 API Documentation

### Base URL

- Development: `http://127.0.0.1:8000/api/`
- Production: `https://evanditter.com/api/`

### Core Endpoints

#### Projects

- `GET /projects/` - List all projects with pagination
- `GET /projects/{slug}/` - Get project details
- `GET /featured-projects/` - Get featured projects

#### Portfolio Content

- `GET /personal-info/` - Get personal information
- `GET /skills/` - List skills and technologies
- `GET /experience/` - List work experience
- `GET /education/` - List education background

#### Courses

- `GET /courses/` - List all courses
- `GET /courses/{slug}/` - Get course details
- `GET /courses/{course_slug}/lessons/{lesson_slug}/` - Get lesson content

### Response Format

```json
{
  "count": 10,
  "next": "http://api.example.com/projects/?page=2",
  "previous": null,
  "results": [...]
}
```

## 🚀 Deployment

### Frontend (Vite Build)

```bash
cd evanditter
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend (Django)

```bash
cd django_backend_evanditter/django_backend
pip install gunicorn
python manage.py collectstatic
gunicorn backend_evanditter.wsgi:application
```

### Environment Configuration

- Set `DEBUG=False` in production
- Configure proper database (PostgreSQL recommended)
- Set up proper CORS origins
- Configure email backend for contact forms

### Development Guidelines

- Follow React best practices and hooks patterns
- Use Django REST Framework conventions
- Maintain responsive design principles
- Write clean, documented code
- Test functionality across different devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Evan Ditter**

- Email: [evan@evanditter.com](mailto:evan@evanditter.com)
- Website: [evanditter.com](https://evanditter.com)
- LinkedIn: [linkedin.com/in/evanditter](https://linkedin.com/in/evanditter)
- GitHub: [github.com/evanditter](https://github.com/evanditter)

---

## 🎯 Project Goals

This portfolio website serves multiple purposes:

1. **Professional Showcase** - Demonstrate full-stack development capabilities
2. **Technical Portfolio** - Display projects and technical skills
3. **Learning Platform** - Share knowledge through courses and tutorials
4. **Contact Hub** - Provide easy ways for potential clients/employers to connect
5. **Personal Brand** - Establish online presence and professional identity

## 🔮 Future Enhancements

- [ ] Blog functionality for technical articles
- [ ] Project case studies with detailed breakdowns
- [ ] Interactive resume/CV download
- [ ] Multi-language support
- [ ] Advanced search and filtering
- [ ] User authentication for course access
- [ ] Comment system for projects and courses
- [ ] Analytics dashboard
- [ ] Newsletter subscription
- [ ] Social media integration

---

**Built with ❤️ by Evan Ditter**

// Projects data - Static frontend data
export const projects = [
  {
    id: 1,
    title: "evanditter.com",
    description: "A full-stack web app built with Django and React. This project demonstrates modern web development practices using Django REST Framework for the backend API and React for the frontend user interface.",
    short_description: "Full-stack web app using Django and React. Includes pages on my projects, learning courses, tutoring and contact information. Click on the Demo page to view a full demo (it's just this website 😊)",
    slug: "evanditter-com",
    category: "Web App",
    technologies: "Django, React, PostgreSQL",
    status: "In Progress",
    is_featured: true,
    github_url: "https://github.com/evanditter/evanditter_website",
    live_demo_url: "https://evanditter.com",
    project_icon: "/src/images/evanditter_icon.png",
    project_brand: "Evan Ditter",
    created_at: "2025-08-21T01:42:26.781101+00:00",
    updated_at: "2025-08-21T01:42:26.781228+00:00"
  },
  {
    id: 2,
    title: "Stock Predictions based on 311 Requests and NYC Weather",
    description: "Interactive dashboard for visualizing ML model performance and data analytics. Built with Python, Streamlit, and various ML libraries for comprehensive data visualization. Features real-time model monitoring, performance metrics, and interactive charts for data exploration.",
    short_description: "Interactive ML dashboard for model performance visualization",
    slug: "stock-predictions-weather",
    category: "AWS / Machine Learning",
    technologies: "Python, Streamlit, Pandas, Scikit-learn, Plotly",
    status: "Completed",
    is_featured: true,
    github_url: "https://github.com/evanditter/NoSQL-ScyllaDB-Weather-Stock-311-Analysis",
    live_demo_url: null,
    project_dual_logos: {
      left: "/src/images/stocks_icon.png",
      right: "/src/images/weather_icon.png"
    },
    created_at: "2025-08-21T01:42:26.782056+00:00",
    updated_at: "2025-08-21T01:42:26.782065+00:00"
  },
  {
    id: 3,
    title: "NBA Databricks Project",
    description: "Using a bronze, silver, and gold layer Databricks architecture, I created a full data pipeline of ingesting data from multiple sources using API calls and cleansed the data. The cleansed data is in the silver layer where I defined a schema and performed conversions and standardizations on the statistics. From there I completed aggregations and performed exploratory data analysis and displayed the results in PowerBI.",
    short_description: "NBA analysis project using Databricks and Machine Learning Techniques.",
    slug: "nba-databricks-project",
    category: "Databricks / Machine Learning",
    technologies: "React Native, Firebase, AsyncStorage, Redux",
    status: "In Progress",
    is_featured: true,
    github_url: "https://github.com/evanditter/NBADatabricks",
    live_demo_url: null,
    project_dual_logos: {
      left: "/src/images/nba_logo.png",
      right: "/src/images/databricks_logo.png"
    },
    created_at: "2025-08-21T01:42:26.782738+00:00",
    updated_at: "2025-08-21T01:42:26.782744+00:00"
  },
  {
    id: 4,
    title: "OpenX",
    description: "Nava workout capabilities",
    short_description: "Cross-platform mobile app for task management",
    slug: "openx",
    category: "Mobile App",
    technologies: "Android",
    status: "Completed",
    is_featured: false,
    github_url: "https://github.com/evanditter/OpenX",
    live_demo_url: null,
    project_logo: "/src/images/logo_openx.png",
    created_at: "2025-08-21T02:24:44.633489+00:00",
    updated_at: "2025-08-21T02:24:44.633621+00:00"
  },
  {
    id: 5,
    title: "Python Projects",
    description: "A Couple of Simple Python Projects",
    short_description: "A Couple of Simple Python Projects",
    slug: "python-projects",
    category: "Python",
    technologies: "Python",
    status: "Completed",
    is_featured: false,
    github_url: "https://github.com/evanditter/Python-Projects",
    live_demo_url: null,
    project_logo: "/src/images/python_logo.png",
    created_at: "2025-08-21T02:24:44.633489+00:00",
    updated_at: "2025-08-21T02:24:44.633621+00:00"
  },
  {
    id: 6,
    title: "TwitterPredictor",
    description: "A twitter prediction script for predicting a person's popularity on Twitter",
    short_description: "A twitter prediction script for predicting a person's popularity on Twitter",
    slug: "twitter-predictor",
    category: "Machine Learning",
    technologies: "Python",
    status: "Completed",
    is_featured: false,
    github_url: "https://github.com/evanditter/TwitterPredictor",
    live_demo_url: null,
    project_icon_fa: "FaTwitter",
    created_at: "2025-08-21T02:24:44.633489+00:00",
    updated_at: "2025-08-21T02:24:44.633621+00:00"
  }
];

// Helper functions for working with projects data
export const getFeaturedProjects = () => {
  return projects.filter(project => project.is_featured);
};

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = () => {
  const categories = [...new Set(projects.map(project => project.category))];
  return categories.sort();
};

// Paginated projects function to match API behavior
export const getProjectsPaginated = (page = 1, pageSize = 6) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProjects = projects.slice(startIndex, endIndex);
  
  return {
    results: paginatedProjects,
    count: projects.length,
    next: endIndex < projects.length ? page + 1 : null,
    previous: page > 1 ? page - 1 : null,
    total_pages: Math.ceil(projects.length / pageSize),
    current_page: page
  };
};

export default projects;

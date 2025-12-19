# Zaopin Gaming Mice Store - Full Stack Application

A full-stack web application for Zaopin, a gaming mice and accessories e-commerce store. Built with React frontend and Django REST Framework backend.

## Project Structure

```
testproj/
├── frontend/           # React application
│   ├── public/
│   │   └── images/    # Product images
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   └── App.js
│   ├── package.json
│   └── .env
├── backend/           # Django REST API
│   ├── zaopinapi/     # Django project settings
│   ├── products/      # Products app
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── management/
│   │       └── commands/
│   │           └── seed_products.py
│   ├── .venv/         # Python virtual environment (excluded from git)
│   ├── db.sqlite3     # SQLite database (included for quiz submission)
│   ├── manage.py
│   ├── requirements.txt
│   └── .env
├── .gitignore
└── README.md
```

## Features

### Backend (Django REST Framework)
- **Environment Variables**: Configured using `python-dotenv`
- **Three API Endpoints**:
  - `GET /api/products/` - List all products
  - `GET /api/products/<id>/` - Get single product detail
  - `GET /api/routes/` - List all available API endpoints
- **CORS Configuration**: Uses `CORS_ALLOWED_ORIGINS` (NOT `CORS_ALLOW_ALL_ORIGINS`)
- **Product Model**: Complete model with fields: name, image, description, brand, category, price, rating, countInStock
- **Serialization**: Proper DRF serializers with field mapping (`_id`, `countInStock`)
- **Database**: SQLite with seeded Zaopin product data

### Frontend (React)
- **Environment Variables**: Uses `REACT_APP_API_BASE_URL`
- **Dynamic Data Fetching**: Fetches products from Django API
- **Responsive Design**: Built with React Bootstrap
- **Product Catalog**: Browse all gaming mice and accessories
- **Product Details**: View detailed information for each product
- **Hero Section**: Eye-catching hero with product imagery

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (3.11 or higher) - [Download](https://www.python.org/downloads/)
- **Git** - [Download](https://git-scm.com/downloads)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd testproj
```

### 2. Backend Setup (Django)

#### Step 2.1: Navigate to Backend Directory

```bash
cd backend
```

#### Step 2.2: Create Virtual Environment

**Windows (PowerShell):**
```powershell
python -m venv .venv
```

**macOS/Linux:**
```bash
python3 -m venv .venv
```

#### Step 2.3: Activate Virtual Environment

**Windows (PowerShell):**
```powershell
.\.venv\Scripts\Activate.ps1
```

If you get an execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Windows (Command Prompt):**
```cmd
.venv\Scripts\activate.bat
```

**macOS/Linux:**
```bash
source .venv/bin/activate
```

#### Step 2.4: Install Dependencies

```bash
pip install -r requirements.txt
```

#### Step 2.5: Environment Variables

The `.env` file is already created with default settings:

```
SECRET_KEY=django-insecure-(!tn7+ny@n_&45kq%0&uil5b%hwp=45@ygng0he9%a1jrsxs(^
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

**Note**: For production, change `SECRET_KEY` and set `DEBUG=False`.

#### Step 2.6: Run Migrations (if db.sqlite3 is not included)

If you need to recreate the database:

```bash
python manage.py migrate
python manage.py seed_products
```

#### Step 2.7: Run the Backend Server

```bash
python manage.py runserver
```

The API will be available at: **http://localhost:8000**

**Test the API endpoints:**
- http://localhost:8000/api/routes/
- http://localhost:8000/api/products/
- http://localhost:8000/api/products/1/

### 3. Frontend Setup (React)

#### Step 3.1: Navigate to Frontend Directory

Open a **new terminal** window and navigate to the frontend:

```bash
cd frontend
```

#### Step 3.2: Install Dependencies

```bash
npm install
```

#### Step 3.3: Environment Variables

The `.env` file is already created with:

```
REACT_APP_API_BASE_URL=http://localhost:8000
```

#### Step 3.4: Run the Frontend Server

```bash
npm start
```

The React app will open automatically at: **http://localhost:3000**

## API Endpoints Documentation

### 1. API Routes List
**Endpoint:** `GET /api/routes/`

**Description:** Returns a list of all available API endpoints

**Response:**
```json
[
  {
    "endpoint": "/api/products/",
    "method": "GET",
    "description": "Returns list of all products"
  },
  {
    "endpoint": "/api/products/<id>/",
    "method": "GET",
    "description": "Returns a single product by ID"
  },
  {
    "endpoint": "/api/routes/",
    "method": "GET",
    "description": "Returns list of all available API endpoints"
  }
]
```

### 2. Product List View
**Endpoint:** `GET /api/products/`

**Description:** Returns all products

**Response:**
```json
[
  {
    "_id": 1,
    "name": "Zaopin Z1",
    "image": "/images/zaopin_z1pro.jpg",
    "description": "The Z1 Pro is an ultra-lightweight gaming mouse...",
    "brand": "Zaopin",
    "category": "Electronics (Mice)",
    "price": "55.99",
    "rating": "4.80",
    "countInStock": 15
  },
  ...
]
```

### 3. Product Detail View
**Endpoint:** `GET /api/products/<id>/`

**Description:** Returns a single product by ID

**Response:**
```json
{
  "_id": 1,
  "name": "Zaopin Z1",
  "image": "/images/zaopin_z1pro.jpg",
  "description": "The Z1 Pro is an ultra-lightweight gaming mouse...",
  "brand": "Zaopin",
  "category": "Electronics (Mice)",
  "price": "55.99",
  "rating": "4.80",
  "countInStock": 15
}
```

**Error Response (404):**
```json
{
  "detail": "Product not found"
}
```

## CORS Configuration

The backend is configured with `CORS_ALLOWED_ORIGINS` in `backend/zaopinapi/settings.py`:

```python
# CORS Settings - Using CORS_ALLOWED_ORIGINS (not CORS_ALLOW_ALL_ORIGINS)
CORS_ALLOWED_ORIGINS = os.getenv(
    'CORS_ALLOWED_ORIGINS',
    'http://localhost:3000,http://127.0.0.1:3000'
).split(',')
```

This ensures only the React frontend running on port 3000 can access the API.

## Database

The `db.sqlite3` file is **included** in this repository for quiz submission purposes. It contains:

- 4 seeded products (Zaopin Z1, Z2, D1 Mouse Pad, DIY Shell Kit)
- All necessary Django tables

To reseed the database:
```bash
python manage.py seed_products
```

## Technologies Used

### Backend
- Django 6.0
- Django REST Framework 3.16.1
- django-cors-headers 4.9.0
- python-dotenv 1.2.1
- SQLite

### Frontend
- React 19.2.0
- React Router DOM 7.10.0
- React Bootstrap 2.10.10
- Bootstrap 5.3.8

## Development Notes

### Running Both Servers Simultaneously

1. **Terminal 1 (Backend):**
   ```bash
   cd backend
   .\.venv\Scripts\python.exe manage.py runserver
   ```

2. **Terminal 2 (Frontend):**
   ```bash
   cd frontend
   npm start
   ```

### Stopping the Servers

- **Backend**: Press `Ctrl + C` in the backend terminal
- **Frontend**: Press `Ctrl + C` in the frontend terminal

## Troubleshooting

### Backend Issues

**Issue**: `ModuleNotFoundError: No module named 'rest_framework'`
- **Solution**: Make sure virtual environment is activated and run `pip install -r requirements.txt`

**Issue**: `OperationalError: no such table: products_product`
- **Solution**: Run migrations: `python manage.py migrate`

**Issue**: CORS errors in browser console
- **Solution**: Verify `CORS_ALLOWED_ORIGINS` in `.env` includes your frontend URL

### Frontend Issues

**Issue**: `Failed to fetch products`
- **Solution**: Ensure backend server is running on http://localhost:8000

**Issue**: Environment variable not loaded
- **Solution**: Restart the React dev server after changing `.env`

**Issue**: Images not loading
- **Solution**: Verify images are in `frontend/public/images/` directory

## Quiz Requirements Checklist

- ✅ Both projects use Environment Variables (.env files)
- ✅ API has 3 dedicated endpoints (List, Detail, API Routes)
- ✅ CORS configured with `CORS_ALLOWED_ORIGINS` (not `CORS_ALLOW_ALL_ORIGINS`)
- ✅ Product model with proper fields
- ✅ Proper serialization with DRF
- ✅ requirements.txt included
- ✅ .gitignore file (excludes .venv)
- ✅ Detailed README.md with setup instructions
- ✅ db.sqlite3 included in repository

## Author

Developed for Quiz 2 - Full Stack Web Development

## License

This project is for educational purposes.

# Modern Video Platform (YouTube-Inspired React App)

**Live Demo:** *https://video-platform-mg9j.vercel.app/*

The application dynamically fetches video data from the **YouTube Data API v3** via **RapidAPI**, allowing users to browse videos, view channel details, search for content, and watch videos in a responsive media player.

---

# Features

### Core Functionality

* Browse videos by category
* Search videos with query routing
* Watch videos using an embedded player
* View channel profiles and uploaded videos
* See related videos for continuous browsing

### Performance & State Management

* Efficient data fetching using **Axios**
* API caching and lifecycle management using **TanStack Query**
* Prevents unnecessary API calls when navigating back to previously visited content

### UI / UX

* Fully responsive layout (mobile, tablet, desktop)
* Sidebar navigation with video categories
* YouTube-style UI with hover effects and grid layouts
* Loading indicators while fetching data
* Graceful error handling for API failures

---

# Project Structure

```
ASS11 VIDEO PLATFORM/
├─ node_modules/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │   ├─ ChannelCard.jsx
│  │   ├─ ChannelDetails.jsx
│  │   ├─ Feed.jsx
│  │   ├─ Loader.jsx
│  │   ├─ Navbar.jsx
│  │   ├─ Search.jsx
│  │   ├─ Sidebar.jsx
│  │   ├─ VideoCard.jsx
│  │   ├─ VideoCardDetails.jsx
│  │   └─ VideoPlayer.jsx
│  ├─ utils/
│  │   ├─ constants.js
│  │   └─ fetchFromAPI.js
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ .env
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ README.md

```

---

# Performance Optimization

The application uses **TanStack Query** to:

* Cache API responses
* Prevent redundant network requests
* Manage loading and error states
* Improve navigation performance

---

# Environment Variables

To protect API keys, the project uses a `.env` file.

Create a `.env` file in the project root:

```
VITE_RAPID_API_KEY=your_api_key_here
```
---

# Running the Project Locally

Follow these steps to run the project on your machine.

###  Clone the repository

```bash
git clone https://github.com/Cynthy15/VideoPlatform.git
```

###  Navigate into the project

```bash
cd video-platform
```

### Install dependencies

```bash
npm install
```

### Create the environment file

Create a `.env` file in the root directory:

```
VITE_RAPID_API_KEY=your_api_key_here
```

Get the API key from **RapidAPI**.

### Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# Technologies Used

* **React**
* **Vite**
* **Axios**
* **TanStack Query**
* **Tailwind CSS**

---

#  Author

Cynthy

---

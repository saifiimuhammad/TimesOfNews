# React News Web App - Times Of News

A responsive news web app built with React, utilizing the NewsAPI to fetch news articles of various categories. The project includes features such as a top loading bar and infinite scroll for a seamless user experience.

![new1](https://github.com/saifiimuhammad/TimesOfNews/assets/99310347/b6ab7a41-fa5c-4e58-b4dc-d65d31826c71)
![news2](https://github.com/saifiimuhammad/TimesOfNews/assets/99310347/3c1c4b7a-137e-423a-af9b-15fbb5dfc7a2)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [License](#license)

## Introduction

This React news web app fetches news data from the [NewsAPI](https://newsapi.org/) and organizes it into different categories. It started as a class-based component project and was later refactored into function-based components. The use of React hooks such as `useState` and `useEffect` provides a cleaner and more efficient code structure.

## Features

- **Category-based News:** Explore news articles in various categories, such as Business, Entertainment, Health, Science, Sports, and Technology.

- **Top Loading Bar:** A visual indicator at the top of the page shows when new articles are being loaded.

- **Infinite Scroll:** Scroll through news articles seamlessly with an infinite scroll feature, providing a smooth user experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saifiimuhammad/TimesOfNews.git
   ```

2. Navigate to the project directory:

   ```bash
   cd news-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Obtain your API key from [NewsAPI](https://newsapi.org/) and replace `YOUR_API_KEY` in the `.env` file.

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Technologies

- **React:** A JavaScript library for building user interfaces.
- **NewsAPI:** A simple HTTP REST API for searching and retrieving live articles from all over the web.
- **Bootstrap:** A popular front-end framework for styling and layout.

## Folder Structure

```
react-news-web-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar
|   |   |    ├── Navbar.js
|   |   |    ├── style.css
│   │   ├── NewsContainer
|   |   |    ├── NewsContainer.js
|   |   |    ├── NewsContainer.css
│   │   ├── NewsItem
|   |   |    ├── NewsItem.js
│   │   └── Spinner
|   |        ├── Spinner.js
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to customize the placeholders like `your-username` and `YOUR_API_KEY` with your actual GitHub username and NewsAPI key, respectively. Also, include your license information in the `LICENSE` file if you choose a license for your project.

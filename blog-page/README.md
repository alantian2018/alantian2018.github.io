# Blog Page

This project is a simple blog application built with React and TypeScript. It allows users to display and read blog posts.

## Project Structure

```
blog-page
├── src
│   ├── components
│   │   └── BlogPost.tsx
│   ├── pages
│   │   └── Blog.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd blog-page
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

This will launch the application in your default web browser.

## Components

- **BlogPost**: A component that displays individual blog post content, including the title, date, and body of the post.
- **Blog**: The main blog page that imports the BlogPost component and maps over an array of blog posts to render each one.

## Types

The project uses TypeScript interfaces to define the structure of blog post data, ensuring type safety and better development experience.

## License

This project is licensed under the MIT License.
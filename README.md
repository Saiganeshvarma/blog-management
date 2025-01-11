# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Blog Application

This blog application allows users to create, edit, delete, and read blogs with a clean, distraction-free layout. It includes several features like rich text editing, tagging, and search functionality to enhance the user experience.

## Features

### Blog Management
- **Create, Edit, and Delete Blogs**: Users can create new blogs, edit existing ones, and delete blogs they no longer need.
- **Blog Preview**: Users can preview their blogs before publishing to ensure the content looks as intended.
- **Rich Text Editor**: The application provides a rich text editor for blog creation, supporting:
  - Bold
  - Italic
  - Headings
  - Lists
- **Tagging System**: Blogs can be categorized using tags to make them more organized and searchable.
- **Local Storage**: A local storage concept is implemented to retain values even after page refresh, ensuring the data persists between sessions.

### Search and Filters
- **Search Blogs**: Users can search for blogs by title and tags.
- **Filter Blogs**: Blogs can be filtered by categories or publication date, making it easier to navigate through different topics.

## How to Use

1. **Create a Blog**: Click the "Create Blog" button, use the rich text editor to compose your blog, and add relevant tags.
2. **Preview the Blog**: Before publishing, click on the "Preview" button to review how the blog will look.
3. **Search Blogs**: Use the search bar to find blogs by title or tags.
4. **Filter Blogs**: Apply filters to view blogs based on categories or publication date.
5. **Edit or Delete Blogs**: Click on an existing blog to edit or delete it.

## Local Storage

- Local storage is used to retain blog data even after the page is refreshed. The application saves all the entered content (such as title, tags, and body) in the local storage to ensure users don't lose their data when refreshing the page.

## Technology Stack

- **React**: JavaScript library for building user interfaces, used to create a dynamic and responsive frontend.
- **Bootstrap**: Frontend framework for styling and responsive design, used to ensure the application looks good on all devices.
- **Local Storage API**: Used to persist blog data locally in the browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

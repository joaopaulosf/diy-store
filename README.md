**DIY Store (Do it yourself)**

**Overview**

DIY Store is a web application built for do-it-yourself enthusiasts. It
aims to provide a platform where users can find and purchase various DIY
products, tools, and materials. The project is developed using
TypeScript, Vite, and Jest to ensure a robust and efficient development
experience.

**Table of Contents**

-   **[Getting Started]{.underline}**

-   **[Prerequisites]{.underline}**

-   **[Installation]{.underline}**

-   **[Running the Development Server]{.underline}**

-   **[Testing]{.underline}**

-   **[Building the Project]{.underline}**

-   **[Linting]{.underline}**

-   **[Preview]{.underline}**

-   **[Contributing]{.underline}**

-   **[License]{.underline}**

**Getting Started**

**Prerequisites**

Make sure you have the following tools installed on your system:

-   Node.js (v14 or later)

-   npm (Node Package Manager)

**Installation**\
\
1. Clone this repository to your local machine:

\`\`\`sh

git clone joaopaulosf/diy-store

\`\`\`

2 Change your current directory to the project folder:

\`\`\`sh

cd diy-store

\`\`\`

3 tall the project dependencies using npm:

\`\`\`sh

npm install

\`\`\`

**Running the Development Server**

To run the development server and start working on the DIY Store
project, use the following command:

\`\`\`sh

npm run dev

\`\`\`

This will launch the Vite development server, and you can access the
application in your browser at
[http://localhost:5173](http://localhost:5173/)

**Testing**

The project is equipped with unit tests to ensure its reliability and
maintainability. To run the tests, use the following command:

\`\`\`sh

npm run test

\`\`\`

If you want to collect code coverage during testing, you can use:

\`\`\`sh

npm run test:cov

\`\`\`

**Building the Project**

To build the DIY Store application for production, use the following
command:

\`\`\`sh

npm run build

\`\`\`

This command will transpile TypeScript code using TypeScript compiler
(tsc) and bundle the application using Vite. The production-ready files
will be available in the dist folder.

**Linting**

We have set up ESLint to maintain a consistent code style and identify
potential issues in the codebase. To run ESLint and check for linting
errors, use the following command:

\`\`\`sh

npm run lint

\`\`\`

This command will display linting warnings and errors in the terminal.

**Preview**

To preview the production build locally before deployment, use the
following command:

\`\`\`sh

npm run preview

\`\`\`

This command will serve the production build locally, and you can access
it in your browser at [http://localhost:5143](http://localhost:5143/)

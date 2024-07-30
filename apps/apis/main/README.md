# Node.js | Express | TypeScript API Server Template

## Overview

This project provides a boilerplate setup for building a Node.js API server using Express and TypeScript. It comes pre-configured with a selection of powerful tools and libraries designed to improve development speed, maintain code quality, and facilitate easy configuration management.

## Features

-   **PinoJS**: A fast and lightweight logging library that provides structured and JSON-based logging. Ideal for high-performance applications.
-   **TypeScript**: Adds static typing to JavaScript, which helps catch errors early during development and improves code maintainability.
-   **Ts-Node**: Allows you to run TypeScript code directly without pre-compiling, enhancing the development experience.
-   **Nodemon**: Automatically restarts the server whenever files are changed, making development more efficient by avoiding manual restarts.
-   **Error Middleware**: Provides a universal mechanism for handling errors across the application, ensuring consistent and user-friendly error responses.
-   **Dotenv**: Loads environment variables from a `.env` file into `process.env`, making it easier to manage configuration settings in different environments.
-   **Prettier**: Enforces consistent code formatting across the project, improving readability and reducing the likelihood of formatting-related issues.

## Getting Started

To quickly set up and run the server, follow these steps:

### Prerequisites

Ensure that you have the following installed on your system:

-   **Node.js** (v20.9.0 or higher)
-   **PNPM** (v9.6.0 or higher)

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/Akshay-Priyadarshi/express-ts-api.git
    cd express-ts-api
    ```

2. Install all the required dependencies:

    ```sh
    $ pnpm install
    ```

### Running the Server

You can run the server in different modes depending on your needs:

#### Development Mode

To start the server in development mode, which supports hot-reloading and provides detailed error messages:

```sh
$ pnpm dev
```

This command uses ts-node and nodemon to automatically restart the server when files change, streamlining the development process.

#### Production Mode

For running the server in a production environment:

1. Build the project to transpile TypeScript files to JavaScript:

Build the project to transpile TypeScript files to JavaScript:

```sh
$ pnpm build
```

1. Start the server using the compiled JavaScript files:

```sh
$ pnpm start
```

### Environment Variables

Create a .env file in the root directory of your project to define environment-specific variables. For example:

```txt
PORT=3000
```

These variables are loaded using dotenv, allowing you to configure your application without hardcoding values.

### Logging

The project uses PinoJS for logging. You can configure various aspects of logging, including log levels and formats, in the logger.util.ts file.

### Error Handling

A custom error middleware is included to ensure that errors are handled consistently across the application. You can customize the error handling logic in the error.middleware.ts file.

### Code Formatting

Prettier is configured to enforce consistent code formatting. To format your code, you can use:

```sh
$ pnpm format
```

### Contributing

Contributions to this template are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

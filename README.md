# Employee Management Application

## Description

This is an employee management application that allows administrators and team leaders to manage employee data, including personal information and phone numbers. The app provides CRUD (Create, Read, Update, Delete) functionalities for employees, enabling an efficient management experience.

## Features

- **User Authentication:** Login screen to access the system.
- **Employee Management:**
    - View employee list.
    - Add a new employee.
    - Edit an existing employee's information.
    - Remove an employee from the records.
- **Protected Navigation:** Only authenticated users can access the system.
- **Data Viewing and Editing:** Form-based system with react-router for protected route navigation.

## Backend Dependency

### Backend Configuration

This frontend requires a backend to function properly. Make sure to configure and run the backend server before starting the frontend application. Route configuration details for backend communication can be set in the `src/config/api.js` file. Set the `baseURL` property to point to your backend server URL:

```javascript
const instance = axios.create({
    baseURL: "http://your-backend-server.com", // Replace with your backend API hostname
});
```

### Test User

For testing purposes, use the following credentials to log into the system:

- **Username:** admin
- **Password:** admin

These credentials should be set in the backend to ensure the frontend works properly during testing.

## Development Setup

### Prerequisites
- Node.js
- NPM or Yarn

### Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the application:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   
## Running with Docker

### Prerequisites
- Docker Desktop

1. Building and executing containers;
    ```bash
    docker compose up --build -d
   ```

The app will be accessible at `http://localhost:3000`.

## Project Structure

- **src/**
    - **common/** - Common configurations and constants.
    - **components/** - Contains reusable and specific frontend components.
    - **functions/** - Util functions and abstractions.
    - **interfaces/** - TypeScript type and interface definitions.
    - **pages/** - Individual pages with specific behavior.
    - **services/** - Service layers for backend communication.

## Contribution

Contributions are welcome! Feel free to open issues or create pull requests.

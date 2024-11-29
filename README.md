---

# RBAC Web Application

## Overview

The **RBAC Web Application** is designed to manage users, roles, and permissions based on **Role-Based Access Control (RBAC)**. It allows administrators to control access to resources by assigning specific roles with associated permissions to users. This system ensures that only authorized users can perform specific actions within an organization or application.

## Features

- **Dashboard**: Provides a centralized view of the system with key metrics and easy navigation to other management areas.
- **User Management**: Add, edit, and delete users while managing their roles and access status.
- **Role Management**: Create roles, assign permissions to each role, and manage the role hierarchy.
- **Permission Management**: Define and manage the permissions that are associated with each role, such as "Read," "Write," "Execute," etc.
- **Responsive Design**: Ensures accessibility across devices such as desktops, tablets, and smartphones.

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Material UI**: A React component library that provides pre-designed components to speed up development.
  - **React Router**: For handling routing between different views (Dashboard, User Management, etc.).
  - **CSS**: Custom styling to enhance user experience.

- **Backend**:
  - **Mock Data**: For this assignment, backend data is simulated using mock data for users, roles, and permissions.

- **Development Tools**:
  - **Visual Studio Code**: Used as the code editor.
  - **Node.js**: JavaScript runtime used for running the application.
  - **npm**: For managing project dependencies.



## How to Use

- After launching the application, you will be greeted by the **Dashboard**. From here, you can access other sections like **User Management**, **Role Management**, and **Permission Management**.
- Use the **User Management** page to create and manage users and assign roles to them.
- On the **Role Management** page, you can create roles, assign permissions to them, and view the users assigned to each role.
- The **Permission Management** page lets you define permissions and assign them to different roles.
- In the **Components** folder, there is a mock data file that contains sample information for users, roles, and permissions. This mock data simulates real data for the application and is used to populate various sections like User Management, Role Management, and Permission Management. The data is structured in arrays or objects, making it easy to manage and update when needed. This mock data helps in testing and development before implementing a real backend to store and retrieve the data.

## Screenshots
![image](https://github.com/user-attachments/assets/8a361277-e507-4554-aa96-d7888c776bcf)

![image](https://github.com/user-attachments/assets/57a0112a-990f-401a-93ec-af0e6b045ca6)

![image](https://github.com/user-attachments/assets/647292a9-0fec-4731-a4a4-86accc3924ee)


Include some screenshots of your application here to give the reader a preview of how it looks. (e.g., Dashboard, User Management, Role Management, etc.)

## Challenges Faced

During the development of this project, I encountered challenges such as handling dynamic updates to the user list and maintaining the state of newly added users. Additionally, ensuring the responsiveness of the UI across different screen sizes required careful styling with CSS and Material UI.

## Future Enhancements

- Integrate a real backend using Node.js and a database (e.g., MongoDB or MySQL) to persist users, roles, and permissions.
- Add authentication and authorization for a more secure role management system.
- Implement features such as bulk user upload, role inheritance, and more granular permission control.

## Installation Instructions

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/Abhicode07/RBAC-Web.git
   ```

2. **Install project dependencies**:
   Navigate into the project folder and run:
   ```bash
   npm install
   ```

3. **Run the application**:
   Start the development server:
   ```bash
   npm start
   ```
   The application will be hosted at `http://localhost:3000/`.

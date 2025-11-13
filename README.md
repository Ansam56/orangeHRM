# OrangeHRM Cypress Automation

This project contains automated tests for the OrangeHRM web application using Cypress.  
It includes both end-to-end (E2E) and accessibility tests designed to validate the application's core functionality and user experience.  
The framework follows a clean Page Object Model (POM) architecture and leverages fixtures and API interactions.

---

## Website Link
[OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

---

## Features Automated
* Login to OrangeHRM
* Add New Employees (UI+API)
* Delete Employees (API)
* Add Claims
* Manage Claims
* Add Apply Leave
* Add Entitlements (UI+API)
* Logout from OrangeHRM
* Accessibility Testing For Some Pages
* Add full CI/CD integration with GitHub Actions
* Implement data generation using the Faker plugin

---

## How to Run the Project
1. Clone the repo:
   ```bash
   git clone https://github.com/Ansam56/orangeHRM.git
   cd orangeHRM/
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npx cypress open
   ```
   






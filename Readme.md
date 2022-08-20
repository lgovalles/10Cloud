# **10 CLOUNDS TEST**

## **URL for testing**

- API: https://swapi.dev/
- UI: https://10clouds.com/

## **UI Testing**

### Test scenarios:

**TC1**

1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Validate that there is exactly 1 'Senior QA Automation Engineer' role open

**TC2**

1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Select “QA” from “All departments” dropdown.
4. Validate that each result contains "QA Automation" or “QA Engineer” in the title

## **API Testing**

Please use swapi API (https://swapi.dev/) to validate following scenarios:

1. GET /people/4/ is returning Darth Vader.
2. GET /people/400/ is returning 404.
   Link to documentation https://swapi.dev/documentation.
   Please use any Javascript library for implementation.

# **Project Details**

## **Requirements**

> - npm v6.14.8
> - Cypress v6.8.0

## **How to instal**

> - npm install

## **Run a test**

### **All Suite**

> - npm run cy:run

### **UI Suite**

> - npm run cy:ui

### **API Suite**

> - npm run cy:api

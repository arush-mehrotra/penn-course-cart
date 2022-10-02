# Frontend Challenge Fall '22 - Arush Mehrotra

## General Structure

```
public/
  index.html           Root HTML file for each page

src/                   Where the JS logic is
  components/          Contains all React components
    Cart.tsx           Basic component for the course cart
    Courses.tsx        Basic component for rendering courses
    Nav.tsx            Basic component for the navbar
    Receipt.tsx        Basic component for the receipt
    Footer.tsx         Basic component for the footer

  data/                Contains data rendered by the components
    courses.json       Contains information on CIS courses at Penn

  App.css              CSS for the app
  App.tsx              Root component for the app
  index.tsx            Renders the React app
  ...
```

## Features

1. **Explore Courses**

    In order to display the course information, I decided to implement a Material UI Data Table. By default, only the Dept, ID, and Name of the courses is displayed but if the user presses the "View Columns" toggle on the top right, they are able to pick and choose what information about the courses they would like to display. Additionally, the table format is dynamic meaning that the column widths dynamically adjust according to the length of the data present. 
    
2. **Search and Filter**
    
    Using the search icon, the user is able to search for courses based on all of the column values. Additionally, they are able to numerically sort the courses based on the course ID (both ascending and descending).
    
3. **Add courses to your cart**

    In order to add courses to the cart, users can click on a given row which will highlight green. In order to delete that course from their cart, they can click on that row again which will revert back to the original white background. If the user attempts to add more than 7 courses to their cart, they will receive an error that they can not add more than 7 courses to their cart. 

4. **Checkout cart**

    In order to checkout their current cart, the user can click on the Checkout Cart button which will take them to a new page containing a receipt. If the users' cart is empty, they will receive an alert that they can not checkout their cart until they have at least one course. The URL of this receipt page, which I have implemented using the React Router, is dependent on the courses that are being checked out. Thus, I am able to retrieve the data to display for the receipt using the URL parameters.

5. **View cart**
    
    In order to view their current cart, the user can click on the View Cart button which will scroll down to the Cart component. If the user does not have any courses in their cart, they will receive a message that their cart is currently empty. 

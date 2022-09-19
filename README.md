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

## Reflection

After having used Angular over the course of my entire summer internship, it was initially challenging to relearn React. However, as I began doing research and re-familiarizing myself with the virtual DOM and one-way data binding, I began to make progress on building this web application. 

First, I did research on how to construct the table that would display the various courses. After much trial and error, I decided to use a MUI Datatable - a responsive component built on Material-UI. This streamlined the process of dynamically rendering the relevant course information and gave me the capability to customize every feature of the table. Though I decided upon using a toggle to hide/show all the rows for a given column, if I had more time, I would try to implement the table such that the relevant information about a particular course would be displayed only after selecting a specific course. 

One major issue I faced was figuring out how to utilize React state capabilities to re-render a component upon a state change. Going to Office Hours and working with Larry definitely helped in clearing up these issues which resulted in my code becoming a lot simpler and cleaner. 

Finally, although I tried to design my code to be as scalable as possible, one element that I had to make dependent on the max number of courses was the URL that would display the receipt as shown in line 23 of `Cart.tsx`. In the future, I would want to find a way to make this URL path dynamic. 

It was a great learning experience to work on this project and I want to thank everyone in Labs for their help/support!



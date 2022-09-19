import courses from '../data/courses.json'
import Cart from './Cart';
import Nav from './Nav';
import Footer from './Footer';
import MUIDataTable from "mui-datatables";
import React, { useState } from 'react';

const CoursesTable = () => {

  // The purpose of this loop is to format the pre-requisites and cross-listed array neatly for display

  var courses_temp = courses;

  for (var i = 0; i < courses_temp.length; i++){
    if (courses_temp[i].prereqs !== undefined) {
      let tempArray = courses_temp[i].prereqs as string[];
      if ((tempArray?.length !== undefined && tempArray.length > 1)){
        for (var j = 0; j < tempArray?.length - 1; j++){
          if (!(tempArray[j].includes('--'))){
            let tempVal = tempArray[j] + ' -- ';
            tempArray[j] = tempVal;
          }
        }
      }
    }
  }

  for (var i = 0; i < courses_temp.length; i++){
    if (courses_temp[i]['cross-listed'] !== undefined) {
      let tempArray = courses_temp[i]['cross-listed'] as string[];
      if ((tempArray?.length !== undefined && tempArray.length > 1)){
        for (var j = 0; j < tempArray?.length - 1; j++){
          if (!(tempArray[j].includes('--'))){
            let tempVal = tempArray[j] + ' -- ';
            tempArray[j] = tempVal;
          }
        }
      }
    }
  }

  // Defining the columns associated with the table displaying course information

  const columns = [
    {
      name: "dept",
      label: "Dept",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "number",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "title",
      label: "Name",
      options: {
        filter: false,
        sort: false,
      }
    },
    {
      name: "prereqs",
      label: "Prerequisites",
      options: {
        filter: false,
        sort: false,
        display: false,
      }
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: false,
        sort: false,
        display: false,
      }
    },
    {
      name: "cross-listed",
      label: "Cross-Listed",
      options: {
        filter: false,
        sort: false,
        display: false,
      }
    }
  ];

  const data = courses_temp;

  const [cart, setCart] = useState([]);

  // Handling the addition/deletion of a course from the cart

  const handleRowClick = (rowData: any, rowMeta: any) => {
    const courseID = rowData[0] + ' ' + rowData[1] + ' - ' + rowData[2];
    const dataIndex = rowMeta.d
    if (cart.includes(courseID)){
      const index = cart.indexOf(courseID);
      let temp  = [...cart];
      temp.splice(index, 1);
      setCart(temp);
    }
    else if (cart.length >= 7) {
      alert('You can not have more than 7 courses in your cart!')
    }
    else {
      let temp = [...cart];
      temp.push(courseID);
      setCart(temp);
    }
  };

  return (
    <div> 
      <Nav />
      <MUIDataTable
        title = {""}
        data = {data}
        columns = {columns}
        options={{
          selectableRowsHideCheckboxes: true,
          caseSensitive: false,
          download: false,
          onRowClick: handleRowClick,
          setRowProps: (row, dataIndex, rowIndex) => {
            const rowTemp = row[0] + ' ' + row[1] + ' - ' + row[2];
            if (cart.includes(rowTemp)){
            return {
              style: {backgroundColor: '#90EE90'}
            }
          }
          }
        }}
      />
      <Cart arr = {cart}/>
      <Footer />
    </div>
  )
}

export default CoursesTable;
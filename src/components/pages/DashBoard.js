import React from 'react'

import Chart from "../charts/Chart"
import Table from  "../charts/Table "
import Header from './Header';

const DashBoard = () => {

  return (
    <>
     <Header/>
      <div style={{ display: "flex" }}>
        <div>
          <Chart />
          <Table />
        </div>
        <div>
          <Chart />
          <Table />
        </div>
      </div>
    </>
  )
}

export default DashBoard







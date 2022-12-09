import React from "react"
import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"

const EmployeesList = ({ data }) => {
  const elements = data.map((el) => {
    const { id, ...remainingElements } = el
    return <EmployeesListItem key={id} {...remainingElements} />
  })

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList

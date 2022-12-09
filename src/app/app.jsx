import React from "react"
import "./app.css"
import AppInfo from "../components/app-info/app-info"
import SearchPanel from "../components/search-panel/search-panel"
import AppFilter from "../components/app-filter/app-filter"
import EmployeesList from "../components/employees-list/employees-list"
import EmployeesAddForm from "../components/employees-add-form/employees-add-form"

const App = () => {
  const data = [
    { id: 1, name: "Arnold P.", salary: 250, increase: true },
    { id: 2, name: "Eva A.", salary: 450, increase: false },
    { id: 3, name: "John N.", salary: 350, increase: false },
    { id: 4, name: "Kolin F.", salary: 380, increase: true },
  ]


  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App

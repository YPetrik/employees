import React from "react"
import "./app-info.css"

const AppInfo = () => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании {`< Cruma >`}</h1>
      <h2>Обшее число сотрудников: {`42`}</h2>
      <h2>Премию получат: {`All`} </h2>
    </div>
  )
}

export default AppInfo

import React from "react"
import { Component } from "react"
import "./employees-list-item.css"

class EmployeesListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      increase: false,
      likeState: false,
    }
  }

  changeIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }))
  }

  addStar = () => {
    this.setState(({ likeState }) => ({
      likeState: !likeState,
    }))
  }

  render() {
    const { name, salary } = this.props
    const { increase } = this.state
    const { likeState } = this.state
    let classNames = "list-group-item d-flex justify-content-between"

    if (increase) {
      classNames += " increase"
    }

    if (likeState) {
      classNames += " like"
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label " onClick={this.addStar}>
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={`${salary} €`} />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm " onClick={this.changeIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem

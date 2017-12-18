import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 0,
      incVat: 0,
      exVat: 0
    }
  }

  handleincVatChange = (event) => {
    console.log("Number changed!", event.target.value)
    this.setState({
      incVat: parseInt(event.target.value, 10),
      exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value, 10)).toFixed(1)
    })
  }

  handleexVatChange = (event) => {
    console.log("Number changed!", event.target.value)
    this.setState({
      exVat: parseInt(event.target.value, 10),
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value, 10)).toFixed(1)
    })
  }

  handleVatChange = (changeEvent) => {
    console.log("Number changed!", changeEvent.target.value)
    this.setState({
      vatRate: (changeEvent.target.value),
      exVat: incVatToExtVat(changeEvent.target.value, parseInt(this.state.incVat, 10)),
      incVat: exVatToIncVat(changeEvent.target.value, parseInt(this.state.exVat, 10))
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <div className="radio">
            <label>
              <input
                name="percentage"
                type="radio"
                value="6"
                checked={this.state.vatRate === "6"}
                onChange={this.handleVatChange} />
              6 %
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                name="percentage"
                type="radio"
                value="12"
                checked={this.state.vatRate === "12"}
                onChange={this.handleVatChange} />
              12 %
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                name="percentage"
                type="radio"
                value="25"
                checked={this.state.vatRate === "25"}
                onChange={this.handleVatChange} />
              25 %
            </label>
          </div>

          <div className="userInputs">
            <label>Inklusive moms</label>
            <input
              type="number"
              value={this.state.incVat}
              onChange={this.handleincVatChange} />
            <label>Exklusive moms</label>
            <input
              type="number"
              value={this.state.exVat}
              onChange={this.handleexVatChange} />
          </div>

        </form>
        {/* <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
        <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p> */}
      </div>
    )
  }

}

export default App

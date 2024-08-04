import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {increaseByTwoCounter} from '../redux/actions/counterActions' // IncreaseByTwoCounter ile karistirma
import { connect } from 'react-redux' 

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div> {/* Burada bir action cagiriyoruz */}
        <button onClick={e=>{
            this.props.dispatch(increaseByTwoCounter()); // Actionu redux uzerinden calistirmis oluyoruz
        }}> 
            Increase by 2
        </button> 
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){ // Action cagiriyoruz
    return {actions:bindActionCreators(increaseByTwoCounter, dispatch)} // IncreaseByTwoCounter ile karistirma, bu kullandigimiz actionTypesta tanimladigimiz ise counterActionstaki increaseByTwoCounter 
} 

export default connect(mapDispatchToProps)(IncreaseByTwoCounter); // IncreaseByTwoCounteri reduxa connect ediyoruz 
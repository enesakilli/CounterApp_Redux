import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {increaseCounter} from '../redux/actions/counterActions' // IncreaseCounter ile karistirma
import { connect } from 'react-redux' 


class IncreaseCounter extends Component { // export default asagida var kaldirdim
  render() {
    return (
      <div> {/* Burada bir action cagiriyoruz */}
        <button onClick={e=>{
            this.props.dispatch(increaseCounter()); // Actionu redux uzerinden calistirmis oluyoruz
        }}> 
            Increase by 1
        </button> 
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){ // Action cagiriyoruz
    return {actions:bindActionCreators(increaseCounter, dispatch)} // IncreaseCounter ile karistirma, bu kullandigimiz ise actionTypesta tanimladigimiz counterActionstaki increaseCounter 
} 

export default connect(mapDispatchToProps)(IncreaseCounter); // IncreaseCounteri reduxa connect ediyoruz 
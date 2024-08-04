import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {decreaseCounter} from '../redux/actions/counterActions' // DecreaseCounter ile karistirma
import { connect } from 'react-redux' 

class DecreaseCounter extends Component { // export default asagida var kaldirdim
  render() {
    return (
      <div> {/* Burada bir action cagiriyoruz */}
        <button onClick={e=>{
            this.props.dispatch(decreaseCounter()); // Actionu redux uzerinden calistirmis oluyoruz
        }}> 
            Decrease by 1
        </button> 
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){ // Action cagiriyoruz
    return {actions:bindActionCreators(decreaseCounter, dispatch)} // DecreaseCounter ile karistirma, bu kullandigimiz actionTypesta tanimladigimiz ise counterActionstaki decreaseCounter 
} 

export default connect(mapDispatchToProps)(DecreaseCounter); // DecreaseCounteri reduxa connect ediyoruz 
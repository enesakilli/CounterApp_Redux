import React, { Component } from 'react'
import { connect } from 'react-redux' // Redux ile baglantiyi saglar


class Counter extends Component { // export default asagida var kaldirdim
    render() {
    return ( // Sayac bilgisini Counter.js de tutacagim, Sayac bir statedir, state reduxtan o da reducersten o da counterReducer.js den gelir
      <div>
        <h1>{this.props.counter}</h1> {/* counterReducerden aldi state degerimiz 0 di */}
      </div>
    )
  }
}

function mapStateToProps(state){ // state --> counterReducer.js den gelecek deger 
    return {counter:state.counterReducer} // Proplarimizda artik deger var onu counterReducerden alir
}

export default connect(mapStateToProps)(Counter); // Redux ile baglantiyi saglar
// Counterin propslarina stateyi bagla demek
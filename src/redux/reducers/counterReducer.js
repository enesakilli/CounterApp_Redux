import * as actionTypes from '../actions/actionTypes'

const counterReducer = (state=0, action) => { // Butun reducerler cagirilan aksiyonu icerip icermedigine bakar
    
    let newState; // Switch ile increase_counter ise state uzerinde oynama yapacagiz, bunun icin newState olusturdum 

    switch (action.type) { // genelde switch ile yapilir, if ile falan da olur
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload); // +1 de diyebiliriz ama payload ne ise o kadar artsin istedik yani +1 ayni
        
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload);        

        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);   

        default:
            return state; // Eger bunlara uyulmamissa statenin kendisini donduruyoruz
    }
} // reducerler aksiyona gore state belirler, state kontrolu

export default counterReducer; // En son export edilir asagi tarafta 








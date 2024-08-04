import * as actionTypes from './actionTypes'  // * kullanmamin sebebi 3 tane export var hepsini import ediyorum, all demek

export const increaseCounter = () => ({ // Fonksiyon old icin () var ve parametre aliyor, increaseCounter bir fonksiyon ve bunun degeri de fonksiyon demek
    type: actionTypes.INCREASE_COUNTER, // Action typei
    payload:1 // 1 articak
}) // Bu event Sayaci +1 artiran tarafindan cagirilacak 


export const decreaseCounter = () => ({ // Bu event Sayaci -1 azaltan tarafindan cagirilacak 
    type: actionTypes.DECREASE_COUNTER, 
    payload:1 // 1 azalicak
})


export const increaseByTwoCounter = () => ({ // Bu event Sayaci +2 artiran tarafindan cagirilacak 
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2 // 2 articak
})

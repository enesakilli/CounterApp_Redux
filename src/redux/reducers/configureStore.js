import {createStore} from "redux" // Store --> Bu yapının tamamını içeren sistem 
import reducers from "./index" 

export default function configureStore(){
    return createStore(reducers)
}
// Bundan sonra yapilacak tek sey Store nin kendisini react a baglamak, ana index.jsye baglanir (reducers icerisindekine degil)
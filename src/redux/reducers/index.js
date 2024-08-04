import { combineReducers } from "redux"; // Birden fazla reducer olması durumunda reducerleri bir araya getirmemizi saglar
import counterReducer from "./counterReducer";

const reducers = combineReducers({
   counterReducer // counterReducer:counterReducer  bu ayni sey demek ayni isimle bir degisken olusturup onun icine atar
});

export default reducers;

// combineReducer index.js dosyasinda yapilir
// Action olusturduk component actionu cagiracak, o actiona sahip olan bir reducer varsa otomatik olarak devreye girer redux araciligi ile
// Redux, reducerlere bakar o actionu kullanan biri var mi varsa payloadina gore falan islemleri yapar statesini dondurur yoksa mevcut stateyi dondurur





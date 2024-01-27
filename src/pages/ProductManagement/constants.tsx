 const INITIAL_DATA ={
   name:"",
   brand:"",
   model:"",
   os:"",
   releaseDate:"",
   quantity:"",
   ram:"",
   storage:"",
   fontCamera:"",
   backCamera:"",
   screenSize:"",
   batteryBackup:"",
   description:"",

 }

 export type TInitialData= {
  [key :string] : string
 };

 export {
    INITIAL_DATA
 }
import {Schema,model,Types} from 'mongoose'
const employeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name required"]

    },
    email:{
        type:String,
        required:[true,"Email required"],
       unique:[true,"Email already exists"]
    },
    mobile:{
        type:Number,
        required:[true,"Mobile no. required "],
        minLength:[10,"Minimum length should be 10 chars"],
        maxLength:[10,"Maximum length should be 10 chars"]
    },
    designation:{
        type:String,
        required:[true,"Designation required"]
    },
    companyname:{
        type:String,
        required:[true,"Company name required"]
    }
},{
   versionKey:false,
   timestamps:true,
},)
export const EmpModel=model("employee",employeeSchema)
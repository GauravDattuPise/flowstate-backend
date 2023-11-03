// name: "",
//         age: "",
//         mobile: "",
//         score: "",
//         total: "",
//         hrv: "",
//         percentage: "",
//         calBaseFocus: "",
//         newHrv: "",
//         calActivityFlowState: ""

const mongoose = require("mongoose");

const flowStateSchema = new mongoose.Schema({
    
    name : {type : String,required : true },
    mobile : { type : Number, required : true },
    score : { type : Number, required : true },
    total : { type : Number, required : true },
    hrv : { type : Number, required : true },
    percentage : { type : Number, required : true },
    calBaseFocus : { type : Number, required : true },
    newHrv : { type : Number, required : true },
    age : { type : Number, required : true },
    calActivityFlowState : { type : Number, required : true },

});

module.exports = mongoose.model("FlowState", flowStateSchema);
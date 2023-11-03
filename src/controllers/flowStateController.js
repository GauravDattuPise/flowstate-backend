
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

const flowStateModel = require("../models/flowStateModel");
const HttpError = require("../models/httpError");

const createFlowState = async(req,res,next) => {
    try {

        const userData = req.body;
        const {name, age, mobile, score, total, hrv, percentage, calBaseFocus, newHrv, calActivityFlowState} = userData;
       
         // user validation
         if (!name) {
            return next( new HttpError("name is required", 400))            
         }
         if (!age) {
            return next( new HttpError("age is required", 400))            
         }
         if (!mobile) {
            return next( new HttpError("mobile is required", 400))            
         }
         if (!score) {
            return next( new HttpError("score is required", 400))            
         }
         if (!total) {
            return next( new HttpError("total is required", 400))            
         }
         if (!hrv) {
            return next( new HttpError("hrv is required", 400))            
         }
         if (!percentage) {
            return next( new HttpError("percentage is required", 400))            
         }
         if (!calBaseFocus) {
            return next( new HttpError("calBaseFocus is required", 400))            
         }
         if (!newHrv) {
            return next( new HttpError("newHrv is required", 400))            
         }
         if (!calActivityFlowState) {
            return next( new HttpError("calActivityFlowState is required", 400))            
         }

         const savedData = await flowStateModel.create(userData);
         return res.status(201).send({status : true, data : savedData})

    } catch (error) {
        return next(new HttpError("server error in create flow state", 500))
    }
}

module.exports = {createFlowState}
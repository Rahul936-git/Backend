const validator=require("validator");
const myModels = require("../Models/users");


// const ValidateUser = (req, res) => {

// const mandatoryField= ["firstName","age","gender","emailID"]
//         const IsAllowed=mandatoryField.every((k)=>Object.keys(req.body).includes(k));

//         if(!IsAllowed){
//             throw new Error("Field missing");
//         }
// }

// module.exports=ValidateUser;


 // //  or 

 const ValidateUser = async (data) => {

const mandatoryField= ["firstName","age","gender","emailID"]
        const IsAllowed=mandatoryField.every((k)=>Object.keys(data).includes(k));

        if(!IsAllowed){
            throw new Error("Field missing");
        }

        if(!validator.isEmail(data.emailID))
            throw new Error("Invalid Email");

        if(!validator.isStrongPassword(data.password))
            throw new Error("Weak password (must include uppercase, lowercase, number, symbol)");

        if(!(data.firstName.length<=27 && data.firstName.length>=3))
            throw new Error("firstName should be between 3 and 27 characters");

        //  Check uniqueness of email
        const existingEmail = await myModels.findOne({ emailID: data.emailID });
        if (existingEmail) {
            throw new Error("Email already registered");
        }

        // Check uniqueness of firstName
        const existingName = await myModels.findOne({ firstName: data.firstName });
        if (existingName) {
            throw new Error("First name already taken");
        }
}

module.exports=ValidateUser;



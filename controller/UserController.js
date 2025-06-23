const User = require('../models/User')
const validation = require('../middleware/validation')

// exports.register = async (request, response, next) => {
//     try {
//        // const { firstName, lastName, password, email, mobileNumber } = request.body;

//         const { error, data } = validateUser.validate(request.body);

//         const user = null;
//         if (error) {
//             response.status(400).json({
//                 success: false,
//                 message: "User Not Created!!!",
//                 error: error.message
//             })
//         } else {
//             user = await User.create(data)
//         }

//         response.status(201).json({
//             success: true,
//             message: "User created Successfully!!!!",
//             data: {
//                 id: user._id,
//                 firstName: user.firstName,
//                 email: user.email
//             }
//         });


//     } catch (error) {
//         //  console.log("User Not Created!!!");
//         response.status(400).json({
//             success: false,
//             message: "User Not Created!!!",
//             error: err.message
//         })
//     }
// }

// exports.getAllUser = async (request, response) => {
//     try {
//         const user = await User.find()
//         response.status(200).json({
//             success: true,
//             message: "Fetching All User Data",
//             data: user
//         })

//     } catch (error) {
//         console.log("Error in fetching User Details");
//         response.status(400).json({
//             success: false,
//             message: "Error  fetching Data!!"
//         })
//     }
// }


exports.getAllUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json({
            success: true,
            message: "Fetching All User Data",
            data: user
        })

    } catch (error) {
        console.log("Error in fetching User Details");
        res.status(400).json({
            success: false,
            message: "Error fetching Data!!"
        })
    }
}



exports.register = async (req, res) => {
    try {
        const { error, value } = validation.validate(req.body);

        // Validation failed
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                error: error.details[0].message
            });
        }

        // Check if email already exists (optional but good practice)
        const existingUser = await User.findOne({ email: value.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Create the user
        const user = await User.create(value);

        // Send success response
        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: {
                id: user._id,
                firstName: user.firstName,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};



exports.updateUser = async (request, response) => {
    try {
        const { id } = request.params;

        const user = await User.findByIdAndUpdate(id, request.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return response.status(404).json({
                success: false,
                message: "User Not Found!"
            });
        }

        response.status(200).json({
            success: true,
            message: "User Details Updated",
            data: user
        });
    } catch (err) {
        response.status(500).json({
            success: false,
            message: "Error updating user",
            error: err.message
        });
    }
};


exports.deleteUser = async (request, response) => {
    try {
        const email = request.params.email;

        const user = await User.findOneAndDelete({ email })

        if (!user) {
            console.log("User not Found")
        }
        response.status(200).json({
            success: true,
            message: `User Deleted with email id ${email}`
        })

    } catch (err) {
        response.status(400).json({
            success: false,
            message: "User not Deleted!!"
        })
    }
}

exports.getUserById = async (request, response) => {
    try {
        const id = request.params.id;
        const user = await User.findById(id);

        if (!user) {
            console.log("User Not Found");
        }

        response.status(200).json({
            success: true,
            message: "User Found",
            data: user
        })

    } catch (error) {
        response.status(400).json({
            success: false,
            message: "User not Found!!"
        })
    }
}

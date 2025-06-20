const User = require('../models/User')

exports.register = async (request, response, next) => {
    try {
        const { firstName, lastName, password, email, mobileNumber } = request.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            mobileNumber
        })
        response.status(201).json({
            success: true,
            message: "User created Successfully!!!!",
            data: {
                id: user._id,
                firstName: user.firstName,
                email: user.email
            }
        });
    } catch (err) {
        //  console.log("User Not Created!!!");
        response.status(400).json({
            success: false,
            message: "User Not Created!!!",
            error: err.message
        })
    }
}

exports.getAllUser = async (request, response) => {
    try {
        const user = await User.find()
        response.status(200).json({
            success: true,
            message: "Fetching All User Data",
            data: user
        })

    } catch (error) {
        console.log("Error in fetching User Details");
        response.status(400).json({
            success: false,
            message: "Error  fetching Data!!"
        })
    }
}


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

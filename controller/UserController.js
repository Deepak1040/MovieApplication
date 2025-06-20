const User = require('../models/User')

exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, password, email, mobileNumber } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            mobileNumber
        })
        res.status(201).json({
            success: true,
            message: "User created Successfully!!!!",
            data: {
                id: user._id,
                firstName: user.firstName,
                email: user.email
            }
        });
    } catch (err) {
        console.log("User Not Created!!!");
        res.status(400).json({
            success: false,
            message: "User Not Created!!!",
            error: err.message
        })
    }
}

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

// update user is not working need to change the logic
exports.updateUser = async (req, res) => {
    try {
        const email = req.body;
        console.log(email)
        const user = await User.findOneAndUpdate(
            { email },
            { mobileNumber },
            { new: true, runValidators: true }
        )
        if (!user) {
            console.log("User not Found");
            res.status(400).json({
                success: false,
                message: "User Not Found!!!"
            })
        }
        res.status(200).json({
            success: true,
            message: "User Details Updated",
            data: user
        })
    } catch (err) {
        console.log("User Not found !!");
        res.status(400).json({
            success: false,
            message: "User Details not Found"
        })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const email = req.body;

        const user = await User.findOneAndDelete({ email })

    } catch (err) {
        res.status(400).json({
            success: false,
            message: "User not Deleted!!"
        })
    }
}


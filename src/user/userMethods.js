const User = require("./userTable")

exports.addUser = async (userObj) => {
    try {
        await User.create(userObj)
    } catch (err) {
        console.log(err)
    }
}

exports.listUsers = async () => {
    try {
        return await User.findAll()
    } catch (err) {
        console.log(err)
    }
}

exports.updateUser = async (movieObj) => {
    try {
        await User.update({ userName: movieObj.newUserName, user_id: movieObj.newUser_id }, {
            where: {
                userName: movieObj.userName
            }
        })
    } catch (err) {
        console.log(err)
    }
}

exports.deleteUser = async (movieObj) => {
    try {
        await User.destroy({
            where: {
                userName: movieObj.userName
            }
        })
    } catch (err) {
        console.log(err)
    }
}

exports.findAUser = async (movieObj) => {
    try {
        await User.findOne({
            where: {
                userName: movieObj.userName
            }
        })
    } catch (err) {
        console.log(err)
    }
}


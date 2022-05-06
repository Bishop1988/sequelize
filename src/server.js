const yargs = require("yargs")
const { sequelize } = require("./db/connection")
// imports from CRUD functions
const { addMovie, listMovies, updateMovie, deleteMovie, findAMovie } = require("./movie/movieMethods")
const { addUser, listUsers, updateUser, deleteUser, findAUser } = require("./user/userMethods")

const app = async (yargsObj) => {
    try {
        // sync will attempt to create any tables in our database if they do not exist
        await sequelize.sync()
        if (yargsObj.add) {
            // add movie to db
            await addMovie({title: yargsObj.title, actor: yargsObj.actor})
        } else if (yargsObj.list) {
            // list movies
            console.log(await listMovies())
        } else if (yargsObj.update) {
            // update movie
            await updateMovie(yargsObj)
        } else if (yargsObj.delete) {
            // delete movie
            await deleteMovie(yargsObj)
        } else if (yargsObj.find) {
            await findAMovie(yargsObj)
        } else if (yargsObj.addUser) {
            await addUser({userName: yargsObj.userName, user_id: yargsObj.user_id})
        } else if (yargsObj.listUsers) {
            console.log(await listUsers())
        } else if (yargsObj.updateUser) {
            await updateUser(yargsObj)
        } else if (yargsObj.deleteUser) {
            await deleteUser(yargsObj)
        } else if (yargsObj.findUser) {
            await findAUser(yargsObj)
        } else {
            console.log("Incorrect command")
        }
    } catch (err) {
        console.log(err)
    }
}

app(yargs.argv)

// node src/server.js --add --title="The Game" --actor="Michael Douglas"
// node src/server.js --list
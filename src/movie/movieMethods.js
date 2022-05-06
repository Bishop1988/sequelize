const Movie = require("./movieTable")

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (err) {
        console.log(err)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.findAll()
    } catch (err) {
        console.log(err)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update({ title: movieObj.newTitle, actor: movieObj.newActor }, {
            where: {
                title: movieObj.title
            }
        })
    } catch (err) {
        console.log(err)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({
            where: {
                title: movieObj.title
            }
        })
    } catch (err) {
        console.log(err)
    }
}

exports.findAMovie = async (movieObj) => {
    try {
        const result = await Movie.findOne({
            where: {
                title: movieObj.title
            }
        })
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

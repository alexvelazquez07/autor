const mongoose = require ('mongoose')
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/autores', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Se estableció una conexión a la Base de datos'))
    .catch(err => console.log('Error al conectarse a la Base de datos ', err));
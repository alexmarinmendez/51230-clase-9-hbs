import express from 'express' //ES Modules
import __dirname from './utils.js'
import handlebars from 'express-handlebars'

const app = express()

//configuración de carpeta public (static)
app.use(express.static(__dirname+'/public'))

//configuracion del motor de plantillas (dynamic)
app.engine('handlebars', handlebars.engine())
app.set('view', __dirname+'/views')
app.set('view engine', 'handlebars')

app.listen(8080, () => console.log('Server Up'))

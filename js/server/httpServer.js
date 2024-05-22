

const http = require('http')

const server = http.createServer( (req, res) => {
  if( req.url === '/' ){
    res.write('hola mundo')
    res.write('desde NodeJS')
    res.end()
  }
})

  const puerto = 3030

  server.listen(puerto)

  console.log(`Escuchando en el puerto ${puerto}`)
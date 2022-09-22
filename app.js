const express =require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/clientes', (req, res) => res.sendFile(__dirname + '/static/clientes.html'));
app.get('/productos', (req, res) => res.sendFile(__dirname + '/static/productos.html'));

app.listen(3000, () => {
    console.log('Mi app esta corriendo');
})

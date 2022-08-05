const express = require('express')
const app = express();

const PORT = process.env.PORT || 8085;
app.get('/', (req,res) => {
    res.json({
        mamamoo:[
            {nome:'Hwasa',posicoes: ['rapper'], img: './assets/hwasa.jpg'},
            {nome:'Moonbyul',posicoes: ['rapper'], img: './assets/moonbyul.jpg'},
            {nome:'Solar', posicoes: ['lider','vocalista principal'], img: './assets/solar.jpg'},
            {nome:'Wheein',posicoes: ['vocalista'], img: './assets/wheein.jpg'}
        ]
    })
})
app.listen(PORT, () => {
    console.log('Estou na porta'+ PORT)
})
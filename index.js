//carregar o módulo express 
const express = require('express')

//carregar o módulo mongoose
const mongoose = require ('mongoose')

//conectar com o banco de dados
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:revisao@fiaptecnico.yk90q.mongodb.net/test')
}

//conectar com o bd revisao
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
const infos = mongoose.model('infos', modelo)

//executar o módulo express
const app = express()

//definir o local padrão para os arquivos  ejs
app.set('views','./')

//rendenizar o arquivo index.ejs na requisição 
app.get('/',(req,res)=>{
    //conectar com o revisao
    conexao()
    //buscar todos os dados de infos
    const resultado = infos.find()
    res.render('index.ejs', {resultado})
})

//ligar o servidor na porta 3050
app.listen(3050, ()=>{
    console.log ('Servidor local em http://localhost:3050/')
})
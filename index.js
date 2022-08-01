//carregar o módulo express 
const express = require('express')

//executar o módulo express
const app = express()

//definir o local padrão para os arquivos  ejs
app.set('views','./')

//rendenizar o arquivo index.ejs na requisição 
app.get('/',(req,res)=>{
    res.render('index.ejs', {nome:"Alunos Feiosos (MENOS THE GIRLS)", turma:"2EMIB", disciplina:"INW"})
})

//ligar o servidor na porta 3050
app.listen(3050)
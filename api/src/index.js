import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json())

app.get('/matricula', async( req, resp)=>{
    try {
        
        let r = await db.tb_matricula.findAll({order:[['id_matricula', 'desc' ]] });
        resp.send(r);
    
    } catch (e) {
        
        resp.send(e.toString());
    
    }

});

app.post('/matricula', async(req, resp)=> {
    try{

        let d = {

            nm_aluno:   req.body.nome, 
            nr_chamada: req.body.chamada, 
            nm_curso:   req.body.curso, 
            nm_turma:   req.body.turma
        
        };

        let i = await db.tb_matricula.findOne({d});
        if(i === null){
            let r = await db.tb_matricula.create(d);
            resp.send(r);
         } else {
             resp.send({erro: true})
         }

        
    }catch(e){
    
        resp.send(e.toString());
    
    }
});

app.put('/matricula/:id', async(req, resp)=> {
    try{
        let alteracao = {

            nm_aluno:   req.body.nome, 
            nr_chamada: req.body.chamada, 
            nm_curso:   req.body.curso, 
            nm_turma:   req.body.turma
        
        }; 

        let r = await db.tb_matricula.update(alteracao, {where:{id_matricula: req.params.id}} );
        resp.sendStatus(200);

    } catch(e) {

        resp.send(e.toString());

    }
});

app.delete('/matricula/:id', async(req, resp)=> {
    try {
        
        let r = await db.tb_matricula.destroy({where: {id_matricula: req.params.id}});
        resp.send(req.params.id);
    
    } catch(e){
        
        resp.send(e.toString());
    
    }
})


app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))
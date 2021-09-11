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

        if(req.body.nome === null || req.body.nome == "" || req.body.nome.length < 4){return resp.send({erro:'O campo nome deve conter 4 caracteres'})}
        
        if(parseInt(req.body.chamada) < 0 || req.body.chamada == ""){return resp.send({erro:'O campo Chamada deve ser maior que 0'})}
        
        if(req.body.curso === null || req.body.curso == "" || req.body.curso.length < 4 ){return resp.send({erro:'O campo curso deve conter 4 caracteres'})}
        
        if(req.body.turma === null || req.body.turma == ""|| req.body.turma.length < 4 ){return resp.send({erro:'O campo turma deve conter 4 caracteres'})}

        let ca = await db.tb_matricula.findOne({where:{nr_chamada: req.body.chamada, nm_turma: req.body.turma}});

        if(ca != null){return resp.send({erro:'Já um aluno cadastrado nessa turma com o mesmo numero de chamada'})}

        let d = {

            nm_aluno:   req.body.nome, 
            nr_chamada: req.body.chamada, 
            nm_curso:   req.body.curso, 
            nm_turma:   req.body.turma
        
        };

            let r = await db.tb_matricula.create(d);
            resp.send(r);
        
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
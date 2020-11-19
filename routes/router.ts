import {Router, Request, Response} from 'express'


export const router = Router();


router.get('/mensajes',(req:Request,res:Response)=>{
    res.json({
        ok: true,
        mensaje: 'Todo está Bién'
    });

});

router.post('/mensajes/:id',(req:Request,res:Response)=>{
    const id = req.params.id;
    const body = req.body;
    res.json({
        ok: true,
        cuerpo: body.cuerpo,
        desde: body.desde,
        id
    });

});

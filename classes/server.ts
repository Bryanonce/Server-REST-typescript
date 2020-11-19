import express from 'express';
import {SERVER_PORT} from '../global/enviroment';
export class Server{
    constructor(
        public app: express.Application = express(),
        public port:Number = SERVER_PORT
    ){}
    
    start(callback: Function){
        this.app.listen(this.port,callback());
    }
}
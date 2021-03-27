// require('http').Server().listen(4321)
import { Server } from 'http';

const CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET; POST; PUT; DELETE; OPTIONS",
    "Access-Control-Allow-Headers": "x-test; Content-Type; Accept; Access-Control-Allow-Headers",
}



const s = Server((req, res) => {
    if (req.url === '/result4/') {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8", ...CORS });
        
        let Response = {
            "message": "portyan19",
            "x-result":`${req.headers['x-test']}`,
            "x-body": `${req.body}`
        }
        console.log(Response['x-body'])
        return res.end(JSON.stringify(Response));
    }
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8", ...CORS })
    res.end('Ошибка\n');
});
s.listen(4321);

import express from 'express';
import { userData } from './data.js';
const app = express();
const PORT = 7000;
app.use(express.json()); // middleware




// routing:
// app.get('/', (req, res) => {
//     res.send('Hello from express server');
// }); 

// app.get('/api/user', (req, res) => {

//     res.send(userData); 
// });

// dynamic routing:
// app.get('/api/user/:id', (req, res) => {

//     const user = userData.find(usr => usr.id === parseInt(req.params.id));
//     if(!user) {
//         res.status(404).send('User ot found');         
//     } else {
//         res.send(user); 
//     }   
// });

// thunder client: vs code extension
// postman: software

// API all METHODS:
// GET, POST, PUT, DELETE

app.get('/api/getuser', (req, res) => {
    res.send("get user api");
}
);


app.post('/api/createuser', (req, res) => {   
    console.log(req.body);    
res.send("post user api ");
}
);


app.put('/api/updateuser', (req, res) => {
    res.send("put user api");
}   
);

app.delete('/api/deleteuser', (req, res) => { 
    res.send("delete user api");
}

);



// app.get('/api/user', (req, res) => {

//     // console.log(req.query.id);
    
// if (req.query.id) {
//     const user = userData.filter((e,i) => req.query.id == e.id);
//     res.send(user);
    
// } else {
//     res.send(userData);
// }
// });





// server creation:
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});


let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');
const req = require('express/lib/request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//homepage
app.get('/', (req , res)=>{
    return res.send({
        error : false,
        message: "Welcome",
        written_by: 'powarut',
        published_on: 'https://milerdev.dev'
    })
})

// เชื่อมต่อฐานข้อมูล sql
let dbCon = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'project'
})
dbCon.connect();

//เชื่อมต่อกับฐานข้อมูลสมาชิก
app.get('/member',(req, res) => {
    dbCon.query('SELECT * FROM member', (error ,results, fields) =>{
        if(error) throw error;

        let message = ""
        if(results == undefined || results.length == 0){
            message = "Member table is empty";
        } else{
            message = "Successfully retrived all member";
        }
        return res.send({error: false,data: results,message: message});
    })
})

app.listen(3000 , () =>{
    console.log('Node app is running on por 3000');
})

module.exports = app;
const conn = require('./connection');
const express = require('express');
const upload = require('express-fileupload');
//let MW = require('./middleware');
const app = express();
//const route = express.Router();

app.use(express.json());
app.use(upload());

app.get('/',(req,res)=>{
    //res.send("API working");
    //select all the entries from the Employee table
    conn.query("SELECT * FROM EMPLOYEE", (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });
});

app.post('/',(req,res)=>{
    //res.send("API working");
    //insert a new employee to data base
    const data = {Snn:"100000101", Fname: "Diego", Minit:"C", Lname:"Lopez", Bdate:"1988-03-28", Address: "Amarillo Texas", email:"diego@gmail.com", Cphone:"8174444567", Sex:"M", Super_ssn:"222222200", Dno:6};
    //const data = req.body;
    conn.query("INSERT INTO EMPLOYEE SET ?", data, (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });  
});

app.put('/:Snn',(req,res)=>{
    //console.log(req.params.U_ID);
    let employee_id = req.params.Ssn
    //update data based on employee id
    const data = [req.body.Address, req.body.email, req.body.Cphone, req.params.Ssn];
    conn.query("UPDATE EMPLOYEE SET Address =?, email =?, Cphone =? WHERE Snn = " + employee_id, data, (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });  
});
app.delete('/:Snn',(req,res)=>{
    //delete the information of an employee from employee table
    let employee_id = req.params.Snn
    conn.query("DELETE from EMPLOYEE WHERE Snn = " + employee_id, (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });  
});

app.get('/file_upload',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
 });

 app.post('/file_upload',(req,res)=>{
    if(req.files){
        let file = req.files.file;
        let filename = file.name;
        //console.log(filename);
        file.mv('./uploads/' + filename, (err)=>{
            if(err){
                throw err;
            }else{
                res.send("File Uploaded");
            }
        });
    };
 });
app.listen(4000);
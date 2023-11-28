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
    //select all the entries from the database cloud_project
    conn.query("SELECT * FROM PROJ_MANG_APP_USER", (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });
});

app.post('/',(req,res)=>{
   // const data = {U_ID:"000011100", U_First: "Peter", U_Middle:"M", U_Last:"Moore", B_date:"1978-02-28", U_gender:"M", U_Bio:" ", U_address: "Houston Texas", U_email:"PMM@gmail.com", U_cell_phone:"8173334567"};
    const data = req.body;
    conn.query("INSERT INTO PROJ_MANG_APP_USER SET ?", data, (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });  
});

app.put('/:U_ID',(req,res)=>{
    //console.log(req.params.U_ID);
    let employee_id = req.params.U_ID
    //static updates
    //const data = ["PeterPAN","M","Moore","1978-02-28","M"," ","Houston Texas","PETER@gmail.com","8173334567", "000000100"];
    //conn.query("UPDATE PROJ_MANG_APP_USER SET U_First = ?, U_Middle = ?, U_Last = ?, B_date = ?, U_gender = ?, U_Bio = ?, U_address = ?, U_email = ?, U_cell_phone = ? WHERE U_ID = ?", data, (err,result)=>{
    const data = [req.body.U_address, req.body.U_email, req.body.U_cell_phone, req.params.U_ID];
    conn.query("UPDATE PROJ_MANG_APP_USER SET U_address =?, U_email =?, U_cell_phone =? WHERE U_ID = " + employee_id, data, (err,result)=>{
        if(err){
            res.send('error');
        }else{
            res.send(result);
        }
    });  
});
app.delete('/:U_ID',(req,res)=>{
    let employee_id = req.params.U_ID
    conn.query("DELETE from PROJ_MANG_APP_USER WHERE U_ID = " + employee_id, (err,result)=>{
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
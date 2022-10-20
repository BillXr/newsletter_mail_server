//jshint esversion:6

require('dotenv').config()
const express=require("express");
const body_praser=require("body-parser");
const request=require("request");
const https=require("https");

const app=express();
app.use(express.static("public"));
app.use(body_praser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const email=req.body.email;

    var data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstname,
                    LNAME:lastname
                }

            }
        ]

    };
    const jsonData=JSON.stringify(data);

    const options={
        method:"POST",
        //auth:"bill:314a65f3ee21b3ea478defd38f8781f2-us18"
        auth:"bill:"+process.env.apiKey

    };

    //const url="https://us18.api.mailchimp.com/3.0/lists/01e6401984";
    const url="https://us18.api.mailchimp.com/3.0/lists/"+process.env.listid;

    const request=https.request(url,options,function(response){

        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
    
    
})


app.post("/failure",function(req,res){
    res.redirect("/");
})



app.listen(process.env.PORT || 3000,function(){
    console.log("server started at port 3000");
});

//const apiKey= "314a65f3ee21b3ea478defd38f8781f2-us18";
//const listid="01e6401984";
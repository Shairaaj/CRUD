import express from "express";

const app=express();

app.listen(5000, ()=>{
    console.log(`Server is running on PORT: http://localhost:5000`);
})

app.get("/",(req,res)=>{
    res.send("homePage");
})

echo "# CRUD" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Shairaaj/CRUD.git
git push -u origin main
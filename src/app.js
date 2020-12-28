const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
// console.log(__dirname);
// console.log(path.join(__dirname,'..'));
const port=process.env.PORT||3001
const publicdirectpath=path.join(__dirname,'../public');
const viewpath=path.join(__dirname,'../template/viwes');
const partialspath=path.join(__dirname,'../template/partials');

app.use(express.static(publicdirectpath));
app.set('view engine' ,'hbs');
app.set('views',viewpath);
hbs.registerPartials(partialspath);
app.get('',(req,res)=>{
    res.render('index',{
        name:'satya',
        title:'weather application',
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'satya',
        title:'about',
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name:'satya',
        title:'help',
    });
})
app.get('/weather',(req,res)=>{
    if(!req.query.address)
    return res.send('Error address dg');

    res.send({
        address:req.query.address,
    })
 })
 
 app.get('/products',(req,res)=>{
     console.log(req.query);
     res.send({
         product:[],
     });
  })
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'page not found'
    })
    // res.send('page 404');
})

//  app.get('/about',(req,res)=>{
//     res.send('help express');
//  })

app.listen(port,()=>{
    console.log('server started');
})
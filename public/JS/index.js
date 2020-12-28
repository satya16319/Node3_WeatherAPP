console.log('kgkkkg');

// const { response } = require("express");


const weather=document.querySelector('form');
const search=document.querySelector('input');
// const message=ducument.querySelector('#first-1');
const p=document.getElementById("first-1").innerHTML;
// message.textContent="gjkgk";

weather.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(search.value);
    document.getElementById("first-1").innerHTML='Loding.....';
    const city=search.value;
    if(!city)
    {
         console.log('City name can not empty');
         document.getElementById("first-1").innerHTML='City name can not empty';
    }
    else
    {
      document.getElementById("first-1").innerHTML='Hi  we are going to deploy';
          fetch(`http://api.weatherstack.com/current?access_key=061ca3d6ebdc9d876fb75f2a4e0abfdd&query=${city}`).then((response)=>{
            response.json().then((data=>{
                // console.log(data.error.info);
                if(data.error)
                {
                  // console.log(data);
                  document.getElementById("first-1").innerHTML='Hi  we have got some errors';

                   var gg=data.error.info;
                   document.getElementById("first-1").innerHTML=gg;
                }
                else
                {
                   // console.log(data);
                    document.getElementById("first-1").innerHTML=data.current.temperature;
                }
            }))
          });
         // console.log(data);
        // const request=require('request');
        // const url='http://api.weatherstack.com/current?access_key=061ca3d6ebdc9d876fb75f2a4e0abfdd&query=delhi'
        
        // request({url:url, json:true},(error,response)=>{
        //     // const data=JSON.parse(response.body);
        //     const data=response.body;
        //      console.log(data);
        // })
         
    }
    // console.log('trt');
    
})
console.log(weather);
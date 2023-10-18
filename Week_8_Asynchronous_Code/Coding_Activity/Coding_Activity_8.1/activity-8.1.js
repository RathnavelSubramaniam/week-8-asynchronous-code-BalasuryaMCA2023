const url_arr=[ "https://api.openweathermap.org/data/2.5/weather?q=Londonuk&APPID=6cad138f665424314a9ec7f51b5135d7 ",
"https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=6cad138f665424314a9ec7f51b5135d7",
"https://api.openweathermap.org/data/2.5/weather?q=Lisbon&APPID=6cad138f665424314a9ec7f51b5135d7",
"https://api.openweathermap.org/data/2.5/weather?q=Budapest&APPID=6cad138f665424314a9ec7f51b5135d7"
];

const markRequest=async function(url){
    let response=await fetch(url)
    let data=await response.text();
    return data
}

// url_arr.forEach((item.k)=>{console.log(item)})

// // 
markRequest(url_arr).then((return))=>

var dataArr[]
 url_arr.array.forEach(element => {
    
 });


 var dataArr[];
 url_arr.forEach(item,k)=>{
    markRequest(item).then(result)=>{
        console.log("Successful",result)
        dataArr.push(result)
        if(dataArr.length==4)
    for(dataArr.length==4){

for(let i=0;i<4;i++){
    console.log
}    }
        (
            console.log(JSON.parse)(dataArr[i]).name)
        
    }
 }
let data;
let lang = "ar";
async function fetchData(pos){
    
    let key = "3af8b7df3bc9d4a843a4449c9ec4f105";
    let url = "https://api.openweathermap.org/data/2.5/weather?lat="+pos.latitude+"&lon="+pos.longitude+"&lang="+lang+"&appid="+key;

    let response = await fetch(url);

    if(response.ok){
      return response.json();      
    }
    else{
        alert(response.status);
    }          
}

async function getposition(){
    let p = await(async()=>{
        return new Promise(resolve =>{
            navigator.geolocation.getCurrentPosition(resolve);    
        });
    })();
    return {
        latitude : p.coords.latitude,
        longitude : p.coords.longitude
    }
}

(async () => {

    let pos = await getposition();
    data = await fetchData(pos);
    const icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png";
    const city = data.name;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.wind.humidity;
    
})();


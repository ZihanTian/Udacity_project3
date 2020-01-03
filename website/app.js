/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=13ac1bbc957b47b34d40b3e0e9b6ef36';
//let tempt;
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();




document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newZip =  document.getElementById('zip').value;
const userResponse = document.getElementById('feelings').value;
getWeather(baseURL,newZip, apiKey)

.then(function(data){
    
    postData('/addData',{temperature:data.main.temp, date: newDate, user_response:userResponse })
    
    
}).then(data=>updateUI());
}
const getWeather = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+key)
  try {

    const data = await res.json();
    console.log(data)
    console.log(data.main.temp)
    //tempt = data.temperature;
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const res = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await res.json();
        // console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

  const updateUI = async () => {
      const req = await fetch('/all')
      try{
          const allData = await req.json()
          console.log(allData,'here i am');
          console.log(allData.length);
          let ind = allData.length;
          console.log(ind,'there is index');
          //document.getElementById('date').innerHTML = allData[ind-1].date;
          document.getElementById('date').innerHTML = allData.date;
          //document.getElementById('temp').innerHTML = allData[ind-1].temperature;
          document.getElementById('temp').innerHTML = allData.temperature;

          //document.getElementById('content').innerHTML = allData[ind-1].user_response;
          document.getElementById('content').innerHTML = allData.user_response;

      }catch(error){
          console.log("error",error)
      }
  }
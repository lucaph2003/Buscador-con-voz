window.addEventListener("load", setup);

//Declaracion de variables y arrays
let rec;
let userRegistered = new Array();

function setup()
{
    preLoad();
    document.querySelector("#btnRecord").addEventListener("click",record);
    document.querySelector("#btnSearch").addEventListener("click",searchByName);
}

function searchByName()
{
    let name = document.querySelector("#txtSearch").value;
    loadTableBySearch(name);
}

function loadTableBySearch(pName)
{
    clearTable();
    for(let i=0;i<userRegistered.length; i++)
    {
        if(userRegistered[i].name.indexOf(pName) != -1)
        {
            document.querySelector("#tableUser").innerHTML += "<tr> <td> "+userRegistered[i].name +" </td> <td> "+userRegistered[i].lastName +" </td> <td> "+userRegistered[i].age +" </td> <td> "+userRegistered[i].placeBirth +" </td> </tr>";
        }
    }
}

function clearTable()
{
    document.querySelector("#tableUser").innerHTML = "<tr><th>Name</th><th>Last Name</th><th>Age</th><th>Place of birth</th></tr>"
}

function loadTable()
{
    for(let i=0;i<userRegistered.length; i++)
    {
        document.querySelector("#tableUser").innerHTML += "<tr> <td> "+userRegistered[i].name +" </td> <td> "+userRegistered[i].lastName +" </td> <td> "+userRegistered[i].age +" </td> <td> "+userRegistered[i].placeBirth +" </td> </tr"
    }
}

function preLoad()
{
    addUser("Michael","Jordan",52,"United State");
    addUser("Javier","Rolon", 63, "Uruguay");
    addUser("Luca","Podesta",18,"Spain");
    addUser("Lionel","Messi",36,"Argentina");
    addUser("Cristiano","Ronaldo",38,"Portugal");
    addUser("LeBron","James",38,"United State");
    addUser("Giannis","Antetokoumpo",29,"Greece");
    addUser("Luis","Suarez",37,"Uruguay");
    addUser("Marc","Gasol",37,"Spain");
}

function addUser(pName,pLastName,pAge,placeBirth)
{
    let newUser = new User(pName,pLastName,pAge,placeBirth);
    userRegistered.push(newUser);
}


//Funciones del ecuchador para grabar la voz
function record()
{
    document.querySelector("#txtSearch").value = "";
    rec.start();
    
}


if(!("webkitSpeechRecognition" in window)) 
{
    alert("Cant use the API");
}   
else 
{
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result", start);
}

function start(event)
{
    for(i = event.resultIndex; i< event.results.length; i++) 
    {
        document.querySelector("#txtSearch").value = event.results[i][0].transcript;
    }
    let name = document.querySelector("#txtSearch").value;
    let newName = "";
    for(let i= 0;i<name.length -1;i++)
    {
        newName += name.charAt(i); 
    }
    document.querySelector("#txtSearch").value = newName;
    rec.stop();
    searchByName();
}



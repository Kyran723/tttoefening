import express from "express";
import ejs from "ejs"

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let numbers : number[] = [2,4,6,8,10,11,12,13,14,15];

// Zorg ervoor dat de vehicles array de juiste interface gebruikt
let vehicles: any;

app.get("/",(req,res)=>{
  res.render("index");
});

app.get("/numbers", (req,res) => {
    // bereken de som van de numbers array
    // bereken het gemiddelde van de array
    // filter de even numbers uit de array

    // render de juiste view en geef de juiste data mee
});

app.get("/vehicles/:name", (req,res)=>{
  // haal de naam van het voertuig uit de request
  // zoek het voertuig in de vehicles array
  // render de juiste view en geef de juiste data mee
  // als het voertuig niet bestaat, geef een 404
});

app.get("/vehicles",(req,res)=>{
  // haal de q en direction uit de request
  // filter de vehicles array op basis van de q en direction
  // render de juiste view en geef de juiste data mee
});


app.get("/calc", (req,res)=>{
  // render het calc formulier
});

app.post("/calc", (req, res) => {
  // haal de number1, number2 en operator uit de request
  // bereken het resultaat
  // render de view met het resultaat
  // als er gedeeld wordt door 0, geef een error
});

app.listen(app.get("port"), async () => {
  let response = await fetch("https://raw.githubusercontent.com/smaesAP/mock-api/main/vehicles.json");
  // Gebruik het juiste type voor data
  let data : any = await response.json();
  vehicles = data.vehicles;
  console.log( "[server] http://localhost:" + app.get("port"));
});
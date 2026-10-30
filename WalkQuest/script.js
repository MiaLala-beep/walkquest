const goalWeight = 75;
const startingWeight = 89;

let xp = Number(localStorage.getItem("xp")) || 0;
let carrots = Number(localStorage.getItem("carrots")) || 0;
let flowers = Number(localStorage.getItem("flowers")) || 0;
let steps = Number(localStorage.getItem("steps")) || 0;
let weight = Number(localStorage.getItem("weight")) || 89;
let streak = Number(localStorage.getItem("streak")) || 0;
let gardenLevel =
Number(localStorage.getItem("gardenLevel")) || 1;

const stepGoal = 7000;
let stats = JSON.parse(
localStorage.getItem("stats")
) || {
fitness:1,
consistency:1,
mood:1,
energy:1,
wellness:1
};

function saveAll(){
localStorage.setItem("xp", xp);
localStorage.setItem("carrots", carrots);
localStorage.setItem("flowers", flowers);
localStorage.setItem("steps", steps);
localStorage.setItem("weight", weight);
localStorage.setItem("streak", streak);
localStorage.setItem("stats", JSON.stringify(stats));
}

function updateBrayMood(){

let mood = "😊 Happy";

if(streak >= 7){
mood = "🥰 Proud";
}

if(steps >= 10000){
mood = "🎉 Excited";
}

if(streak === 0){
mood = "💜 Waiting For Adventure";
}

document.getElementById(
"brayMood"
).innerText = mood;
function updateStepGoal(){

const percentage =
Math.min((steps / stepGoal) * 100, 100);

document.getElementById(
"stepGoal"
).innerText = stepGoal;

document.getElementById(
"stepGoalBar"
).style.width = percentage + "%";

}function gardenProgress(){

gardenLevel =
Math.floor(carrots / 50) + 1;

document.getElementById(
"gardenLevel"
).innerText = gardenLevel;

localStorage.setItem(
"gardenLevel",
gardenLevel
);

}function generateRoute(){

const routes = [

"🏢 Work Loop - 15 mins around work",

"🚶 Explorer Loop - 20 mins around home",

"🌳 Park Adventure - 30 mins",

"☕ Coffee Quest - walk and grab a coffee",

"📸 Photo Quest Walk",

"🌇 Sunset Stroll",

"🏡 Walk One Extra Block"

];

const picked =
routes[
Math.floor(
Math.random()*routes.length
)
];

document.getElementById(
"routeText"
).innerText = picked;

}function dailyQuote(){

const quotes = [

"Small steps every day create big results.",

"You don't need motivation, only momentum.",

"5 minutes is better than 0 minutes.",

"Every walk improves your future health.",

"Bray believes in you.",

"Progress beats perfection.",

"The hardest step is out the door.",

"You are building a healthier life."

];

const quote =
quotes[
Math.floor(
Math.random() * quotes.length
)
];

document.getElementById(
"quoteText"
).innerText = quote;

}

}
function generateMission(){

const sleep =
Number(document.getElementById("sleep").value);

const energy =
Number(document.getElementById("energy").value);

const stress =
Number(document.getElementById("stress").value);

let score = sleep + energy - stress;

let mission = "";

if(score <= 2){
mission =
"💜 Recovery Quest: Walk 5-10 minutes.";
}
else if(score <= 5){
mission =
"🚶 Explorer Quest: Walk 15-20 minutes.";
}
else{
mission =
"🔥 Champion Quest: Walk 30-45 minutes.";
}

document.getElementById("mission")
.innerText = mission;
}

function notFeelingIt(){

document.getElementById("mission")
.innerText =
"💜 Just walk 5 minutes. Starting is winning today.";
}

function saveSteps(){

const value =
Number(document.getElementById("stepsInput").value);

if(value <= 0) return;

steps = value;

const earnedXP =
Math.floor(steps / 100);

xp += earnedXP;

carrots += Math.floor(steps / 500);

flowers += Math.floor(steps / 2000);

stats.fitness += 1;
stats.consistency += 1;
stats.mood += 1;
stats.wellness += 1;

streak += 1;

saveAll();
render();
}

function saveWeight(){

const value =
Number(
document.getElementById(
"weightInput"
).value
);

if(value <= 0) return;

const oldWeight = weight;

weight = value;

if(weight < oldWeight){

xp += 100;
carrots += 10;

alert(
"🎉 Weight loss achieved!\n+100 XP\n+10 Carrots"
);

}

saveAll();
render();

}

function weekendQuest(){

const quests = [

"☕ Walk and grab a coffee.",
"🐕 Count three dogs.",
"📸 Take a photo of something beautiful.",
"🌳 Explore a street you've never walked.",
"🎵 Walk for three songs.",
"🌇 Find the best sunset view.",
"🏡 Walk one extra block.",
"🌸 Find five flowers."
];

const random =
quests[Math.floor(Math.random()*quests.length)];

document.getElementById(
"weekendQuestText"
).innerText = random;

}

function level(){
return Math.floor(xp / 1000) + 1;
}

function render(){

document.getElementById("xp")
.innerText = xp;

document.getElementById("level")
.innerText = level();

document.getElementById("carrots")
.innerText = carrots;

document.getElementById("flowers")
.innerText = flowers;

document.getElementById("steps")
.innerText = steps;

document.getElementById("weight")
.innerText = weight;

document.getElementById("streak")
.innerText = streak;

document.getElementById("fitness")
.innerText = stats.fitness;

document.getElementById("consistency")
.innerText = stats.consistency;

document.getElementById("mood")
.innerText = stats.mood;

document.getElementById("energyStat")
.innerText = stats.energy;

document.getElementById("wellness")
.innerText = stats.wellness;

const xpPercent =
(xp % 1000) / 10;

document.getElementById("xpBar")
.style.width = xpPercent + "%";

const totalToLose =
startingWeight - goalWeight;

const lost =
startingWeight - weight;

let progress =
(lost / totalToLose) * 100;

if(progress < 0){
progress = 0;
}

document.getElementById("weightBar")
.style.width = progress + "%";

renderBadges();
}

function renderBadges(){

let badges = [];
if(weight <= 85)
badges.push("🌟 4kg Lost");

if(weight <= 80)
badges.push("🏆 9kg Lost");

if(gardenLevel >= 5)
badges.push("🌷 Master Gardener");

if(streak >= 14)
badges.push("💪 Consistency Hero");

if(carrots >= 100)
badges.push("🐰 Bray's Best Friend");
if(steps >= 5000)
badges.push("🏆 5K Steps");

if(steps >= 10000)
badges.push("👑 10K Steps");

if(weight <= 88)
badges.push("⚖️ First Kg Lost");

if(weight <= 84)
badges.push("🔥 5kg Lost");

if(streak >= 7)
badges.push("🔥 7 Day Streak");

if(streak >= 30)
badges.push("🚀 30 Day Streak");

if(xp >= 2000)
badges.push("⭐ Level Up Hero");

if(carrots >= 50)
badges.push("🥕 Bray's Helper");

document.getElementById("badges")
.innerHTML =
badges.map(
b => `<span class="badge">${b}</span>`
).join("");
}

render();
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => console.log("Service Worker Registered"));
  });
}updateBrayMood();
updateStepGoal();
gardenProgress();

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = generateDomains();
  });

  console.log("Hello");
};

let pronoun = ["the", "our", "your", "my", "his", "her"];
let adj = [
  "great",
  "big",
  "awesome",
  "fantastic",
  "amazing",
  "super",
  "seductive",
  "alluring",
  "sultry",
  "provocative",
  "enticing",
  "enchanting",
  "sensuous",
  "captivating",
  "ravishing",
  "flirtatious",
  "slinky",
  "sizzling",
  "intoxicating",
  "irresistible",
  "steamy",
  "sensational",
  "scintillating",
  "sweaty",
  "sensual",
  "appealing",
  "desirable",
  "spicy",
  "volcanic",
  "fervent",
  "fiery",
  "smoldering",
  "slinky",
  "radiant",
  "tempting",
  "bewitching",
  "lustful",
  "whimsical",
  "zany",
  "quirky",
  "eccentric",
  "ludicrous",
  "wacky",
  "absurd",
  "playful",
  "amusing",
  "hilarious",
  "entertaining",
  "uproarious",
  "jovial",
  "festive",
  "laughable",
  "comical",
  "fun-loving",
  "droll",
  "giddy",
  "lighthearted",
  "rollicking",
  "mirthful",
  "jaunty",
  "jocular",
  "gleeful",
  "witty",
  "hysterical",
  "joking",
  "jocund",
  "jubilant",
  "facetious",
  "merry",
];
let noun = [
  "jogger",
  "racoon",
  "website",
  "company",
  "project",
  "adventure",
  "Unicorn",
  "Pompom",
  "Cone",
  "Marshmallow",
  "Zucchini",
  "Gadget",
  "Lollipop",
  "Butterfly",
  "Scarf",
  "Cushion",
];
let extensions = [".com", ".net", ".us", ".io", ".es"];

function generateDomains() {
  let domains = [];

  for (let n = 0; n < pronoun.length; n++) {
    for (let a = 0; a < adj.length; a++) {
      for (let t = 0; t < noun.length; t++) {
        for (let y = 0; y < extensions.length; y++) {
          let domain = pronoun[n] + adj[a] + noun[t] + extensions[y];
          domains.push(domain);
        }
      }
    }
  }

  return domains;
}

let allDomains = generateDomains();
allDomains.forEach((domain) => console.log(domain));

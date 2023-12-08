let nameHero = "Ladino Escarlate";
let xpHero = 9888;
let maestria;

if (xpHero < 1000) {
    maestria = "ferro";
} else if (xpHero >= 1000 && xpHero <= 2000) {
    maestria = "Bronze";
} else if (xpHero >= 2001 && xpHero <= 5000) {
    maestria = "Prata";
} else if (xpHero >= 6001 && xpHero <= 7000) {
    maestria = "Ouro";
} else if (xpHero >= 7001 && xpHero <= 8000) {
    maestria = "Platina";
} else if (xpHero >= 8001 && xpHero <= 9000) {
    maestria = "Ascendente";
} else if (xpHero >= 9001 && xpHero<= 10000) {
    maestria = "Imortal";
} else if (xpHero >= 10001) {
    maestria = "Radiante";
}

console.log("O Herói " + nameHero + " está com " + xpHero + " de XP, e esta no nível " + maestria + " de Maestria!")
const prompt = require("prompt-sync")()
console.clear()

const intro1 = prompt ("JORNADA DO HÉROI \n============= \nPressione [ENTER] para começar.")

const intro2 = prompt ("\nO héroi chamado Naruto Uzumaki foi capturado por Madara Uchiha e precisa da sua ajuda para sair ileso... \n[ENTER]")

const intro3 = prompt ("\nApós ser gravemente ferido durante uma batalha ele foi capturado e  está desmaiado e vai precisar de sua assistência para conseguir escapar do cativeiro... \n[ENTER]")

const intro4 = prompt ("\nMadara Uchiha vai te fazer 5 perguntas sobre o Naruto Uzumaki. Para cada pergunta que você errar Naruto vai perder uma parte do corpo. Seja o herói e salve-o.\n[ENTER]")

let pergunta = 0

let pergunta1 = +prompt("\nNaruto tem olhos azuis?\n 1.[SIM] 2.[NÃO]").trim()



while (pergunta1 != 1 && pergunta1 != 2){
    pergunta1 = +prompt("\nNaruto tem olhos azuis? 1.[SIM] 2.[NÃO]").trim
    () 
}

if (pergunta1 == 1)
{pergunta++}

let pergunta2 = +prompt("\nNaruto é orfão? 1.[SIM] 2.[NÃO]").trim()



while (pergunta2 != 1 && pergunta2 != 2)
{
    pergunta2 = +prompt("\nNaruto é orfão? 1.[SIM] 2.[NÃO]").trim()
}
if (pergunta2 == 1)
{pergunta++}

let pergunta3 = +prompt("\nEle sonha em ser Hokage? 1.[SIM] 2.[NÃO]").trim()


while (pergunta3 != 1 && pergunta3 !=2)
{
    pergunta3 = +prompt("\nEle sonha em ser o Hokage? 1.[SIM] 2.[NÃO]").trim()
}
if (pergunta3 == 1)
{pergunta++}


let pergunta4 = +prompt("\nEle é casado atualmente? 1.[SIM] 2.[NÃO]").trim()


while (pergunta4 != 1 && pergunta4 !=2)
{
    pergunta4 = +prompt("\nEle é casado atualmente? 1.[SIM] 2.[NÃO]").trim()
}

if (pergunta4 == 1)
{pergunta++}

let pergunta5 = +prompt("\nSasuke Uchiha é meu melhor amigo? 1.[SIM] 2.[NÃO]").trim()


while (pergunta5 != 1 && pergunta5 != 2 )
{
    pergunta5 = +prompt("\nSasuke Uchiha é meu melhor amigo? 1.[SIM] 2.[NÃO]").trim()
}

if (pergunta5 == 1)
{ pergunta++}

if (pergunta == 1 || pergunta == 0)
{
    console.log("\nNaruto perdeu quatro partes do corpo e morreu. ")
}
else if (pergunta == 2)
{
    console.log("\nNaruto perdeu os dois braços e um olho e morreu. ")
}

else if (pergunta == 3)
{
 console.log("\nNaruto ficou cego conseguiu escapar mas morreu de hemorragia no caminho.")
}

else if (pergunta == 4)
{
 console.log("\nParabéns! Você salvou Naruto porém ele perdeu um olho. ")
}

else 
{
    console.log("\nParabéns! Você salvou Naruto e ele saiu ileso! ")
}


console.log(`Você acertou ${pergunta} perguntas`)

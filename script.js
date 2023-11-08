const allQuotes = [
    "A friend is one soul abiding in two bodies. — Aristotle.",
    "Things are never quite as scary when you've got a best friend. — Bill Watterson",
    "Friendship is the only cement that will ever hold the world together.- — Woodrow Wilson",
    "A day without a friend is like a pot without a single drop of honey left inside.— Winnie the Pooh",
    "To friendship every burden's light. — Aesop",
]

const quotes= document.querySelector("#quotes");
const generateQuotes =document.querySelector ("#generateQuotes");

function generateAllQuotes (){
    const index = Math.floor (Math.random()*allQuotes.length);
   quotes.textContent= allQuotes[index]
}

generateQuotes.addEventListener("click",generateAllQuotes);






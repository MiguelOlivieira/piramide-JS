const character = "#";
const count = 8;
const rows = [];
let inverted = false;

//função responsável por retornar tanto os strings vazios (" ") para espaço, quanto os # em cada linha da piramide.
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//for que passa os argumentos pra funcao padRow (a linha da piramide e o limite) a cada iteiração.
for (let i = 1; i <= count; i++) {
  if (inverted) { //Por padrão é False
    rows.unshift(padRow(i, count));  //Podemos inverter, fazendo com que os primeiros # gerados sempre fiquem no final do array, gerando uma piramide ao contrário
  } else {
    rows.push(padRow(i, count)); //Aqui a piramide fica ao normal, já que o push sempre adiciona o item pro fina ldo array, permitindo que os priemiros # fiquem no começo (do menor pro maior)
  }
}

let result = ""

for (const row of rows) { //Passamos os itens do array para a variavel row, somando com result, pq se imprimirmos o rows diretamente, vai ficar com virguals e  aspas de um array 
  result = result + row + "\n";
}

console.log(rows);
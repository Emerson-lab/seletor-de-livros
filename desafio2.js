/*
## Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    receitas: [],
    despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
  incomes: [1000, 300, 500, 2500],
  expenses: [2300, 300, 3000],
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function calcularBalanco() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;
  const itsOk = total >= 0;

  let balenceText = "negativo";

  if (itsOk) {
    balenceText = "positivo";
  }
  console.log(`seu saldo é ${balenceText}: R$${total.toFixed(2)}`);
}

calcularBalanco();

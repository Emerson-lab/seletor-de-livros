/*
    Celsius em fahrennheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transfiormação de um unidade para outra

    C = (F = 32) * 5/9

    F = C * 9/5 + 32
*/

//transformDegree('50E')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrennheitExists = degree.toUpperCase().includes("F");

  //Fluxo de erro
  if (!celsiusExists && !fahrennheitExists) {
    throw new Error("Grau não indentificado");
  }

  //fluxo ideal, F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrennheit) => ((fahrennheit - 32) * 5) / 9;
  let degreeSign = "C";

  //Fluxo alternatico C -> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => celsius * 9/5 + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree('50F'))
  transformDegree('50Z')
} catch (error) {
  console.log(error.message);
}

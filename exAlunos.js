const logica = [123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 111, 222, 333];
const linguagemProgramacao = [202, 303, 444, 555, 606, 777, 888, 909, 111, 999];

const alunosEmAmbasDisciplinas = logica.filter(matricula => linguagemProgramacao.includes(matricula));

console.log("Números de matrícula dos alunos que cursam ambas as disciplinas:");
console.log(alunosEmAmbasDisciplinas);
 


const logica = [123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 111, 222, 333];
const linguagemProgramacao = [202, 303, 444, 555, 606, 777, 888, 909, 111, 999];
const alunosEmAmbasDisciplinas = [];

for (let i = 0; i < logica.length; i++) {
  const matricula = logica[i];
  
  if (linguagemProgramacao.includes(matricula)) {
    alunosEmAmbasDisciplinas.push(matricula);
  }
}

console.log("Números de matrícula dos alunos que cursam ambas as disciplinas:");
console.log(alunosEmAmbasDisciplinas);

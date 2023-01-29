const prompt = require('prompt-sync')();
alturas = []

for (var i = 0; i < 10; i++) {
  var h = parseFloat(prompt("Digite a altura: "))
  alturas.push(h)
}

for (i = 0; i <= 9; i++) {
  var oc = 0
  for (j = 0; j <= 9; j++) {
    if (alturas[i] > alturas[j]) {
      oc++
      continue
    }

  }
  console.log('Aluno ' + i + ' : maior que ' + oc + ' aluno(s)')
}






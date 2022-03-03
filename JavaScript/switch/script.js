 let diaSemana = new Date().getDay()

 let nomeDiaSemana

 switch(diaSemana) {
    case 0: 
     nomeDiaSemana = 'Domingo'
     break;
    case 1: 
     nomeDiaSemana = 'Segunda-Feira'
     break;
    case 2: 
     nomeDiaSemana = 'Terça-Feira'
     break;
    case 3: 
     nomeDiaSemana = 'Quarta-Feira'
     break;
    case 4: 
     nomeDiaSemana = 'Quinta-Feira'
     break;
    case 5: 
     nomeDiaSemana = 'Sexta-Feira'
     break;
    case 6: 
     nomeDiaSemana = 'Sabado'
     break;
 }

 document.write(`Hoje é : ${nomeDiaSemana}`)
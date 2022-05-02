
let velocity = 130

switch(velocity) {
    case 80:
    case 90:
    case 100:
        document.write('Velocidade permitida')
        break
    case 110:
    case 120:
        document.write('Velocidade maxima permitida')
        break
    case 130:
    case 140:
    case 150:
        document.write('Velocidade não permitida [MULTADO!]')
        break
    default:
        document.write('Velocidade não encontrada!')
    }
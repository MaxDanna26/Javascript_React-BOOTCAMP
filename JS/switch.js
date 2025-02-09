const color = 'purpura';

switch (color) {
  case 'rojo':
    console.log('Has escogido rojo');
    break;
  case 'verde':
    console.log('Has escogido verde');
    break;
  case 'amarillo':
    console.log('Has escogido amarillo');
    break
  default:
    console.log('No hay color para tu constante!');
}

const golosina = 'nubes';

switch (golosina) {
  case 'chicle':
    console.log('Has escogido un chicle');
    break;
  case 'gominola':
    console.log('Has escogido una gominola');
    break;
  case 'regaliz':
    console.log('Has escogido un regaliz');
    break;
  default:
    console.log('Has escogido algo que no nos pertenece: ' + golosina);
}
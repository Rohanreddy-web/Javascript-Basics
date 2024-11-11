//  create a business name generator by combining
//  list of adjectives and shope name and another
// Adjectives:
// crazy
// Amazing
// Fire
// Shope names:
// Engine
// Foodes
// Garments

// Another word:
// Bros
// Limited
// Hub
const comp_name = (a) => {
  if (a >= 0.3 && a <= 0.6) {
    let adj1 = "Crazy";
    let shop1 = "Engine";
    let an1 = "Bros";
    return `${adj1} ${shop1} ${an1}`;
  } else if (a > 0.6 && a <= 0.9) {
    let adj2 = "Amazing";
    let shop2 = "Foods";
    let an2 = "Hub";
    return `${adj2} ${shop2} ${an2}`;
  } else if (a >= 1) {
    let adj3 = "Fire";
    let shop3 = "Garments";
    let an3 = "Limated";
    return `${adj3} ${shop3} ${an3}`;
    }
  else {
       let adj4 = "Fire";
       let shop4 = "Foods";
      let an4 = "Limated";
      return `${adj4} ${shop4} ${an4}`;
    }

}
function create_name(n_ame) {
   let a = Math.random();
  return n_ame(a);
}
console.log(create_name(comp_name));

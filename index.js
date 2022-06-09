function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return 'This one is on me!'
    } else if  (2000 < feet && feet <= 2500){
      return 'I will gladly take your thirty bucks.'
     } else {
        return 'No can do.'
     }
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
      default:
        return 'Bye.'
  }
}
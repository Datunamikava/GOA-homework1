const correctPassword = 'Group 41 is best';
let attempts = 3;

function checkPassword() {
  const input = prompt('შეიყვანეთ პაროლი:');
  if (input === correctPassword) {
    alert('თქვენი შეყვანილი პაროლი სწორია');
  } else {
    attempts--;
    if (attempts > 0) {
      alert(`არასწორი პაროლი. დარჩენილია ${attempts} ცდა.`);
      checkPassword();
    } else {
      alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
    }
  }
}

checkPassword();











function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // 120
  
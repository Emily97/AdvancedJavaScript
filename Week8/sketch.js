function getAge()
{
  let today = new Date();
  let birthDate = new Date(this.dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
  {
    age--;
  }
  return age;
}

let emily = {dob: 'April 04, 1997'};

console.log(getAge.call(emily));
console.log(getAge.apply(emily));

const emilyAge = getAge.bind(emily);
console.log(emilyAge());

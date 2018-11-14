class User {
  constructor(name, password, permissions) {
    this.name = name;
    this.password = password;
    this.permissions = permissions;
  }
  checkPw(password){
    return password === this.password;
  }
  print() {
    console.log(`Hi I'm ${this.name}`);
  }
}

class Admin extends User {
  constructor(name, password, permissions, salary) {
    super(name, password, permissions);
    if(salary > 0){
      this.salary = salary;
    }
    else {
      this.salary = 0;
    }
  }

  print() {
    console.log(`Hi I'm ${this.name} and I earn £${this.salary}`);
  }
}

const admin = new Admin("Ciara", "monkey123", "all", "70000");
admin.print();
console.log(admin.checkPw("monkey123"));

const user = new Admin("Pete", "horse321", "readonly");
user.print();

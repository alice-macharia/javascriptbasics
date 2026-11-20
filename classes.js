class Account{
    constructor(name, accNo, balance) {
        this.name = name;
        this.accNo = accNo;
        this.balance = balance;

    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if (amount > this.balance){
            console.log("Insufficient balance")
        }else{
            this.balance -= amount;
        }
    }
    printDetails(){
        console.log(`${this.name} USD ${this.accNo}`);
    }
}

let acc1 = new Account("Jane", "001",10000);
let acc2 = new Account("Hilary", "003",70000);
acc1 .deposit(60000)
acc1.printDetails();
//copy the link
//git init
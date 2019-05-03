type AccountType = {
  money: number;
  deposit: (value: number) => void;
};

type Me = {
  name: string;
  bankAccount: AccountType;
  hobbies: string[];
};

let bankAccount: AccountType = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

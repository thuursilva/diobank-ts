import { BubbleAccount } from './class/BubbleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(30)
peopleAccount.withdraw(10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(20)
companyAccount.withdraw(10)
companyAccount.getLoan(50)

const bubbleAccount: BubbleAccount = new BubbleAccount('Arthur', 7)
console.log(bubbleAccount)
bubbleAccount.deposit(60)

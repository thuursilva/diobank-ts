import { DioAccount } from "./DioAccount"

export class BubbleAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance = (this.balance + value) + 10
            console.log('Voce depositou ' + value)
            console.log('Seu saldo agora é: ' + this.balance)
        }
    }
}
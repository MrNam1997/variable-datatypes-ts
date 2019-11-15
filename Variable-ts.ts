class VariableTs {
    num:number;
    constructor(num:number){
        this.num = num;
    }
    show():string{
        return 'Hello, '+ this.num;
    }
}
let variable = new VariableTs(6);
console.log(variable.show());
import { action, computed, has, makeObservable, observable } from "mobx";
import { faker } from '@faker-js/faker';
let hashmap = new Map<number,number>();
type User = {
    name : string ,
    age : number 
   
}
export class UserStore{
    user : User[] = [{name:"Sunny",age:23}];
    
    constructor(){
        makeObservable(this,{
            user : observable,
            addUser : action,
        
        })
    }

    addUser = () => {
       this.user.push({name:faker.name.fullName(),age:faker.datatype.number({min:20,max:50,precision:1})});
    }

   

}

import { useStore } from "../hooks/useStore";



type User = {
    name : string ,
    age : number 
}



export const user = () => {
    const { rootStore } = useStore();
    
    

    for(let i=0;i < 1000;i++){
        rootStore.userStore.addUser();
    }

   
    
    
    let datas:User[] = rootStore.userStore.user;
    let hashmap = new Map<number,number>();
        datas.forEach(item => {
            if(hashmap.has(item.age)){
                let num = hashmap.get(item.age); 
                num = (num as number) + 1;
                hashmap.set(item.age,num as number);
            } 
            else{
                hashmap.set(item.age,1);
            }
        })

        
    

  //  hashmap =  new Map([...hashmap.entries()].sort());
     const userData = Object.entries(Object.fromEntries(hashmap))
    .map(([age, count]) => ({ age: parseInt(age), count }));

    return userData;
    
};


export const userD = () => {
    const { rootStore } = useStore();
    return rootStore.userStore.user;
}








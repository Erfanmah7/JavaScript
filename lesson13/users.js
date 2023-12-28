const users = [

{id:1,name:"erfan",job:"developer",skill:"node.js"},
{id:2,name:"mohammad",job:"developer",skill:"java"},
{id:3,name:"ali",job:"developer",skill:"php"},
{id:4,name:"amir",job:"developer",skill:"python"}

]

export function userDB() {

    return new Promise((resolve, reject) => {
        
       if (users.length > 0) resolve(users);
       else reject(new Error("not find user")); 

    })
    
}
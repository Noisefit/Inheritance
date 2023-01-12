// Question no:1- Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent ={
    name:"sagar",
    age:60,
    showDetails : function(){
        console.log(`the parent name is ${this.name} and the parent age is ${this.age}`);

    }
}

const child={
    name:"ram",

}

child.__proto__=parent;

console.log(child.age);
console.log(child.showDetails());



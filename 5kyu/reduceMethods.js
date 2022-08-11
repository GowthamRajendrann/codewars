let people = [
    {'id':1,"name":Gowtham,"age":26}
    {'id':2,"name":Praveen,"age":30}
]

//convert to dictionary type lookup with id

result = people.reduce((acc,person)=>{
    return {...acc,[person.id]:person}
},acc)

//Maximum Value inside a object
result = people.reduce((acc,person)=>{
    if(acc===null || person.age>acc) return person.age;
    return acc;
},null)

//find by name
result = people.reduce((acc,person)=>{
    if(acc !== null) return acc;
    if(person.name === 'Gowtham') return person
    return null
},null)

//everyone is above 18
result = people.reduce((acc,person)=>{
    if(!acc) return false;
    return person.age> 18; 
},true)

//some is above 18
result = people.reduce((acc,person)=>{
    if(acc) return true;
    return person.age> 18; 
},true)

// count occurences
result = orders.reduce((acc,item)=>{
    return {...acc,[item.order]: (acc[item.order]|| 0) + 1 }
},{})

//flatten array

const folders = [
    "index.js",
    ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js"]],
  ];
  
function flatten(acc,item){
    if(Array.isArray(item)){
        return item.reduce(flatten,acc)
    }
    return [...acc,item];
}
result  = folders.reduce(flatten,[])
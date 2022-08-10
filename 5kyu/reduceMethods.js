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
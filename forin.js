//object

const x={ 
name: "Aishik",
age: 25,
class: 12,
email: "aa"
};

for(let i in x)
{
    console.log(i, x[i]);
}
   

//array

const y=["1","45","Aish","aa#4"];

for(let i in y)
    console.log(i,y[i]);


i=0;
while(i<=20)
{
    if(i==5){
        break;
    }
    console.log(i);
    i++;
}
console.log(" ");

i=0;
while(i<=20)
{
    if(i==5){
        ++i;
        continue;
    }
    console.log(i);
    i++;
}
console.log(" ");

i=0;
while(i<=20)
{
    if(i%2!==0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
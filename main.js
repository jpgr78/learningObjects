let learningToCode = {
    languages: ["JavaScript", "C#", "Java"],
    isDifficult: true,
    difficulty: 8,
    isRewarding: true,
    humor: "https://www.reddit.com/r/ProgrammerHumor/"
}

learningToCode.languages.push("Go");
learningToCode.difficulty=7;
delete learningToCode.humor;
learningToCode.calledisFun=true;

for(var i=0;i<learningToCode.languages.length;i++){
    console.log(learningToCode.languages[i])
}

//for(var x in learningToCode)
//  console.log(learningToCode[x])

  
    
    
  
  var at=Object.getOwnPropertyNames(learningToCode);
 
 for(var i=0;i<at.length;i++){
     console.log(at[i])
 }
 for(var x in learningToCode)
  console.log(learningToCode[x])
let cake={title:'Tres Leches (Three milks)',serves:15,ingredients:['CAKE','large egg whites','granulated sugar','egg yolks','all-purpose flour','CREAM','Sweetened Condensed Milk']}
at=Object.getOwnPropertyNames(cake);
 
 for(var i=0;i<at.length;i++){
     console.log(at[i])
 }
 for(var x in cake)
  console.log(cake[x])

  let restaurants=[{name:'buffet',city:'San Diego',alreadyVisit:true},{name:'Congress Cafe',city:'San Diego',alreadyVisit:true},{name:'Mi Pana',city:'San Diego',alreadyVisit:false}]


for(var i=0;i<restaurants.length;i++){
 if(restaurants[i].alreadyVisit){
     console.log('You already visit "'+restaurants[i].name+'" in '+restaurants[i].city)
 }else{
    console.log('You still need to visit "'+restaurants[i].name+'" in '+restaurants[i].city)  
 }

}
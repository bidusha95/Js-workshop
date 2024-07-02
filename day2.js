//const days = ['sunday', 'monday', 'tuesday']
//console.log (days.length)

// length le xai number print garauxa ani bracket ma number halyo bhane xai tyo number ma bhayeko element lai print garxa

//days.pop()
//console.log(days)

//last ma garda xai push ra pop and aagadi garda xai shift ra unshift

//const data = days.slice(1,2)
//console.log(data)
//days.splice(1,1, 'haha')
//console.log(days)
//splice ma xai 1,1 or 2,2 yesto garyo bhane xai frst ko num le xai kun element lai replace garne ho bhanxa
//ani arko num le xai kun element dekhi pachadi ko aru element lai hataune bhnne hunxa

//const data = [1,2,3,4,5,6]
//data.splice(1,3, 'hello','bye','world')

//console.log(data)

//const vowels = ['a','e','i','o','u']
//vowels.splice()
//function greet(name){
  //  console.log("hello"+name)
//}
//const text = 'i am from Korea'
//const splittedData = text.split("")
//console.log(splittedData)

//const language = ['Js','Php','C']
//language.splice(1,0,'Html')
//console.log(language)


const person = Object.freeze({
    name : "Bidusha" ,
    address : "Itahari",
    nationality : "Nepali"
})

console.log(person.address)
console.log(person['address'])

//array bhitra pani objet hunxa

//const datas = {
  //  name : ['Bidusha','Ila']
//}
//datas.name.push('winner')
//console.log(datas)

const test = [
    {
        name : "Bidusha"
    },
    {
        name : "Ila"
    }
]

test.push({
    name : "Mausami"
}

)
console.log(test)

const test2 = {
    name : ['Bidusha','Ila','Mausam']
}
test2.name.splice(0,3, '1','2','3')
console.log(test2)


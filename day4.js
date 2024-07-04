//topic :call by function

//call back function vaneko arko function ma argument vayera janxa like
 /* getSomething(function(){
    }) */

//jasle call back function accept garxa teslai chai higher order function vanxa 

//foreach ko kaam loop garne 
//return gardaina
/*const  fruits = ["Mango", "Apple", "Watermelon"]
fruits.forEach(function(fruits){
    console.log(fruits)
})*/

/*fruit.filter(function(){
    }) */

//yesari haina    
/* const nums=[1,2,3,4,5]
nums.forEach(function(nums){
    console.log(nums*nums)
})*/

// const num=[1,2,3,4,5]
// const square =[]
// num.forEach(function(num){
//     square.push(num*num)
// })
// console.log(square)

// //wap to print first name + last name using for Each

// const data = [
//     {
//     firstname : "Bidusha",
//     lastname : "Dahal",
//     address : "Itahari" 
// },
// {
//     firstname : "Ila",
//     lastname : "Rai",
//     address : "Dharan"
// },
// {
//     firstname : "Nishchita",
//     lastname : "Tamang",
//     address : "Kathmandu"
// }
// ]
// // data.forEach((hello)=>{
// //     console.log(hello.firstname + " " + hello.lastname)
//  const result = data.map((Object)=>{
//     return {
//         Fullname : Object.firstname + " " + Object.lastname
//     }
//  })
//  console.log(result)

// //map le loop garxa ani additon pani garxa
// //value return garxa
// //main kaam bhaneko data manupalution 
// //original array ko data lai change grdaina naya array dinxa
// //data lai change garnu xa bhane map use garne ani loop matra garnu xa bhane xai forEach use garne
// //map use garda xai return dinu parxa 
// const nums2 = [2,4,6,8]
// const squared = nums2.map((num)=>{
// //     return num * num 
// })
// console.log(squared)

// const num = [1,2,3,4,5]
// const result = num.map((object)=>{
//     return {
//         text : 'A',
//         Number : object,
//     }
// })
// console.log(result)

// const data = [
//     {
//     firstname : "Bidusha",
//     lastname : "Dahal",
//     address : "Itahari" 
// },
// {
//     firstname : "Ila",
//     lastname : "Rai",
//     address : "Dharan"
// },
// {
//     firstname : "Nishchita",
//     lastname : "Tamang",
//     address : "Kathmandu"
// }
// ]
// const Result = data.map((hello)=>
//     {
//         return {
//             ...hello, 
//             Fullname : hello.firstname + " " + hello.lastname
//         }
//     }) 
//     console.log(Result)

//     const numberData = [1,2,3,4,5,6,7,8,9,10]
//     const oddNumbers = numberData.filter((number)=>{
//         return number%2 !== 0 
//     })
//     console.log(oddNumbers)


//    const books = [
//         {
//             title : "You can win",
//             author : 'shiv khera',
//             publishedAt : 2001
//         },
//         {
//             title : "Think like a monk",
//             author : 'Jay shetty',
//             publishedAt : 2022
//         },
//         {
//             title : "Cashflow quadrant",
//             author : 'Robert T. Kiyosaki',
//             publishedAt : 1909
//         },
//         {
//             title : "You can win2",
//             author : 'shiv khera',
//             publishedAt : 1990
//         },
//         {
//             title : "Think like a monk2",
//             author : 'Jay shetty',
//             publishedAt : 1999
//         },
//         {
//             title : "Cashflow quadrant2",
//             author : 'Robert T. Kiyosaki',
//             publishedAt : 2010
//         }
//     ]

//     const booksat20s = books.filter((hello)=>{
//         return hello.publishedAt > 2000 
//     })
//     console.log(booksat20s)

    // const lastTask = [1,2,null,undefined,"Bidusha","haha","hehe"]
    // const task = lastTask.filter((hy)=>{
    //     return hy !== null && hy !== undefined
    // })
    // console.log(task)

   const students = [
        {
            name : "Manish",
            marks : 800,
            status : "pass"
        },
        {
            name : "Anish",
            marks : 500,
            status : "fail"
        },
        {
            name : "Pranjal",
            marks : 900,
            status : "pass"
        },
        {
            name : "Bob",
            marks : 100,
            status : "fail"
        },
        {
            name : "Hari",
            marks : 550,
            status : "fail"
        },
        {
            name : "Shyam",
            marks : 600,
            status : "pass"
        },
        {
            name : "Laxman",
            marks : 300,
            status : "fail"
        }
    ]
const result = students.filter((data)=>{
    return data.marks > 500 && data.name.endsWith("sh") && data.status === "pass"
})
console.log(result)
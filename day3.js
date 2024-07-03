

































// const temperature = 27
// if(temperature > 30){
//     console.log("Hot")
// }
// else if (temperature > 20){
//     console.log("Moderate")
// }
// else{
//     console.log("Cool")
// }

// const grade = 55 
// //Grade 
// //80-90 --> console.log("A")
// //70-80 --> console.log("B+")
// //60-70 --> console.log("B")
// //0-60 --> console.log("Fail")

// if(grade > 90){
//     console.log("A+")
// }
// else if(grade > 80){
//      console.log("A")
// }
// else if (grade > 70){
//     console.log("B+")
// }
// else if (grade > 60){
//     console.log("B")
// }
// else {
//      console.log("Fail")
// }


// const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// //for(var i=0;i<days.length;i++)
//     //{
//       //  console.log(days[i])
//     //}

// // for(let day of days){
// //     console.log(day)
// // }

// // const data = {
// //     name : "Bidusha" ,
// //     age : "21",
// //     address : "Itahari"
// // }

// // for (let key in data){
// //     console.log(key)
// // }

// // for(let key in data){
// //     console.log(key+':'+data[key])
// // }

// // function add(a,b){
// //     console.log(a+b)

// // }
// // add (1,2)
// // //named regular function 
// // const add = function(a,b){
// //     console.log(a+b)
// // }

// // const add = (a,b)=>{
// //     console.log(a+b)
// // }

// // ()=>{
// //     console.log("Hello World")
// // }

// add(2,5,7)
// const numbers = [1,2,3,4,5]

// //ARRAY MA FOR OF 
// //OBJECT MA FOR IN

// function n(numbers){
//     for(let num of numbers){
//         console.log(num)
//     }
// }
// n(numbers)


const data={
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}

function name (data){
    console.log(data.code[0]._id)
    console.log(data.code[0].userId)
    console.log(data.code[0].ipAddress)

}

name(data)
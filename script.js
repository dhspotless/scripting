
// let items = [20 , 30, 40, 50, 100]


//  let newArray = items.filter ((element) => {
//     // console.log(element)
//     if (element < 50) {
//         return true
//     }         
//  })
//                     // OR
    
// })
// let items2 = [20 , 30, 40, 50, 100]
//  let newArray = items2.filter (Element =>Element < 50)
   
// console.log(newArray)




// let newGrade = grade.filter ((element) => {
//     if(element < 'Fail'){
//         return true
//     }
// })
// let newGrade = grade.filter (element => element < 'Fail')
//                 //    OR


// console.log(newGrade)


// let grade2 = ['Fail','Fail','B'] 

// let grade2New = grade2.filter ((Element) => {
//     if(Element <= 'B'){
//         return true
//     }
// })
// OR
// let grade2New = grade2.filter (Element => Element <= 'B')

// console.log(grade2New)



// let grade3 = ['Fail'] 

// let grade3New = grade3.filter ((Element2) => {
//     if (Element2 < 'Fail'){
//         return true
//     }
// })

// OR

// let grade3New = grade3.filter (Element2 => Element2 < 'Fail' )

// console.log(grade3New)



// let grade = ['A+', 'A', 'Fail'] 

// let goodGrade = []

// for (let i = 0; i < grade.length; i++){
//     if( grade[i] !== 'Fail'){
//         goodGrade.push(grade[i])
//         console.log(goodGrade[i])
//     }
    
// }


// let grade = ['A+', 'A', 'Fail'];

// let goodGrade = [];

// for (let i = 0; i < grade.length; i++){
//     if( grade[i] !== 'Fail'){
//         goodGrade.push(grade[i]);
//         console.log(goodGrade[i]);
//     }
    
// }


// let grade = ['A+', 'A', 'Fail']; 

// let goodGrade = [];

// for (let i = 0; i < grade.length; i++){
//     if( grade[i] !== 'Fail'){
//         goodGrade.push(grade[i]);
//         console.log(goodGrade[i]);
//     }
    
// }
// console.log(goodGrade)



// let arr = [1,4,9,16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })

// console.log(newArray)


// let dollars = [1,5,10,3]

// // let cent = dollars.map ((element) => {
// //     console.log(element)
// //     return element * 100
// // })

// let cent = dollars.map(element => element * 100)

// console.log(cent)


// let dollars2 = [0, 10, 20]

// let cent2 = dollars2.map ((element2) => {
//     console.log(element2)
//     return element2 * 100
// })

// console.log(cent2)

// let dollars2 = [0, 10, 20]

// for(let i = 0; i < dollars2.length; i++){
//    let cent = (dollars2[i] * 100 )
//    console.log(cent)

// }

// OR


// let dollars2 = [0, 10, 20];

// let cent = [];

// for (let i = 0; i < dollars2.length; i++){
//     cent.push(dollars2[i] * 100)
// }

// console.log(cent)


// let cents = []
// for( let dollar of dollars){
//     cents.push(dollar * 100)
   
// }
// console.log(cents)


// let cents = []

// for(let i = 0; i < dollars.length; i++){
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)


// let dollars = [1, 5, 10, 3]


// let cents = dollars.map((element) => {
//    return element * 100
// })

// console.log(cents)


// let dollars2 = [0, 10, 20]

// let cent2 = dollars2.map ((element2) => {
//     console.log(element2)
//     return element2 * 100
// })

// console.log(cent2)




// let userId = [{
//     userName: 'Wisdom',
//     userLastName: 'Samuel',
//     Email: 'liki@gmail.com',
//     password: 'test123',
//     userDiscord: 'Techbywes',
//     userSubscriptionStatus: 'VIP',
//     userBillingInformation: '9991 ajaka',
//     lessonsComplted: [0, 1]
// }, 
// {
//     userName: 'Ebuka',
//     userLastName: 'sam',
//     email: 'sally@gmail.com',
//     password2: 'sally123',
//     userDiscord: 'wes00',
//     userSubscriptionStatus: 'VIP',
//     userBillingInformation: 'ajaka',
//     lessonsComplted: [0, 1, 2, 3]
// },

// ];

// console.log(userId[0].lessonsComplted.map (Element => Element * 2))

// function login(email, password2){
//     for ( let i = 0; i < userId.length; i++){
        
//         if(userId[i].email === email){
//             console.log(userId[i])
//         }if (userId[i].password2 === password2){
//             console.log('log the user in the details are correct')
//         }else{
//            console.log( 'password is incorrect')
//         }
//         return
//     }
    
// }
// login('sally@gmail.com', 'sally123')
// let userId = [{
//     userName: 'Wisdom',
//     email: 'liki@gmail.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP',
//     discordId: 'Techbywes',
//     lessonsComplted: [0, 1]
// },]


// function register (user){
// userId.push(user)
   
// }

// register({
//     userName:'sam',
//     email:'liki@gmail.com',
//     password: 'test123',
//     subscriptionStatus:'VIP',
//     discordId: 'Techbywes', 
//     lessonsComplted:[0, 1]})
// console.log(userId)



// DOM MANIPULATION STARTS HERE

// document.querySelector('body').style.display = 'none'


// document.getElementById("title-el").textContent = ('greatful')
// document.querySelector('#title2').textContent = ('i am blessed')
// document.querySelector('.title3').textContent = ('we won')




function changeTitleToRed() {
    document.querySelector('#title').style.color = 'red'
   
}
// DOM MANIPULATION ENDS HERE
// OBJECTS ENDS HERE

function resetEl(){
    document.querySelector('#title').style.color = ''
}










let items = [20 , 30, 40, 50, 100]



 let newArray = items.filter ((element) => {
    console.log(element)
    if (element < 50) {
        return true
    }
    
})
console.log(newArray)
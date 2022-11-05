generateRandNum = num => {
    return Math.floor(Math.random()*num)
}

const foodGroups = {
protein : ['chicken', 'beef', 'salmon', 'lentils', 'pork', 'lamb'],
carbs : ['rice', 'pasta', 'potatoes', 'noodles', 'sweet potatoes', 'couscous'],
veg : ['brocolli', 'carrots', 'salad', 'cauliflower', 'peas', 'roasted veg']
}

let dinnerChoice = [];

for (let food in foodGroups) {
    let option = generateRandNum(foodGroups[food].length)

    switch(food) {
        case 'proteinInfo':
            dinnerChoice.push(`Your protein choice for dinner tonight is: ${foodGroups[food][option]}.`)
        break
        case 'carbInfo':
            dinnerChoice.push(`Your Carbohydrate choice for dinner tonight is ${foodGroups[food][option]}.`)
        break
        case 'vegInfo':
            dinnerChoice.push(`Your vegetable choice for dinner tonight is: ${foodGroups[food][option]}.`)
        break
        default:
            dinnerChoice.push('You should go out for dinner tonight.')
    }
}

const dinner = whatToEat => {
    const formatted = dinnerChoice.join('/n')
    console.log(formatted);
}

dinner(dinnerChoice);





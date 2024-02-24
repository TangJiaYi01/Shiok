var foodDict = {
    // Index 0 Photo, Index 1 Attributes, Index 2 Score
    "Chicken Rice": {
      "Photo": {
        "Hong Yu's Chick":
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/640px-Hainanese_Chicken_Rice.jpg",
        "Kaleb's Chick":
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/640px-Hainanese_Chicken_Rice.jpg",
        },
      "Attributes": ['Chicken', 'Rice', 'High Fat', 'High Oil','Salty','Spicy','Chinese'],
      "Score": 0
    },
    "Fried Chicken": {
      "Photo": {
      KFC: "https://www.kfc.com.sg//Content/OnlineOrderingImages/Menu/Items/DEL_Satay_Crunch_Chicken_ALC.jpg",
      "Texas Chicken":
        "https://assets.grab.com/wp-content/uploads/sites/8/2019/03/12143755/Texas-Chicken-Chicken-Combo-delivery-kl-700x700.jpg",
      },
      "Attributes": ['Chicken', 'High Fat', 'High Oil','Salty','Western'],
      "Score": 0
    },
    Burgers: {
      "Photo": {
      McDonald:
        "https://b.zmtcdn.com/data/pictures/chains/0/20630/a1bb80a3bdb9968b0b937458ae6acfa8.jpg?fit=around|300:273",
      KFC: "https://cdn.discordapp.com/attachments/1018710809360220221/1020012348183949362/unknown.png",
      },
      "Attributes": ['Chicken','Beef', 'High Fat', 'High Oil','Salty','Starchy','Western'],
      "Score": 0
    },
    'Yong Tau Foo':{
      "Photo": {
      'RandomYong_Tau_Foo':
        'https://ewr1.vultrobjects.com/hawkerpedia/article/20210512/4bHCDY9p0D9p_20210408_111319.jpg',
      },
      "Attributes": ['Fish', 'Vegetables', 'Salty','Spicy','Noodles','Chinese'],
      "Score": 0
    },
    'Hokkien Mee':{
      "Photo": {
      'RandomHokkienMee': 'https://sethlui.com/wp-content/uploads/2021/10/Best-Hokkien-Mee-Ah-Hock.jpg',
      },
      "Attributes": ['Noodles', 'Salty','Spicy','Chinese','Shellfish'],
      "Score": 0
    },
    "Char Kway Tiao":{
      "Photo": {
      "RandomChar_Kway_Tiao": 'https://noobcook.com/wp-content/uploads/2014/03/charkwayteow2.jpg'
      },
      "Attributes": ['Noodles', 'Chicken', 'Shellfish', 'High Oil','High Fat','Salty','Chinese'],
      "Score": 0
    },
    "Laksa":{
      "Photo": {
      "RandomLaksa":'https://rasamalaysia.com/w p-content/uploads/2011/07/curry-laksa-thumb.jpg'
      },
      "Attributes": ['Noodles', 'Fish', 'Vegetables', 'High Fat','Salty','Spicy','Lactose Intolerant','Chinese'],
      "Score": 0
    },
    "Kaya Toast":{
      "Photo": {
      'RandomKayaToast': "https://www.thebestsingapore.com/wp-content/uploads/2014/11/best-kaya-toast-596x480.jpg"
      },
      "Attributes": ['Bread', 'Eggs', 'High Fat','Salty','Western'],
      "Score": 0
    }
  };

dish_attributes = {
    'Chicken Rice': ['Chicken', 'Rice', 'High Fat', 'High Oil','Salty','Spicy','Chinese'],
    "Yong Tau Foo": ['Fish', 'Vegetables', 'High Fat','Salty','Spicy','Noodles','Chinese'],
    "Hokkien Mee": ['Noodles','Pork', 'Shellfish', 'High Fat', 'High Oil','Salty','Spicy','Chinese'],
    "Char Kway Tiao": ['Noodles', 'Chicken', 'Shellfish', 'High Oil','High Fat','Salty','Chinese'],
    "Kaya Toast": ['Sweet','Vegan','Starchy','Local'],
    "Laksa": ['Noodles', 'Fish', 'Vegetables', 'High Fat','Salty','Spicy','Lactose Intolerant','Chinese'],
    'Fried Chicken': ['Chicken', 'High Fat', 'High Oil','Salty','Western'],
    'Burgers': ['Chicken','Beef', 'High Fat', 'High Oil','Salty','Starchy','Western'],
    // 'Pizza': ['Chicken','Beef','Pork','High Fat', 'High Oil','Salty','Starchy','Western'],
}

attributes = {
    'Sweet' : 0,
    'Spicy' : 0,
    'Salty' : 0,
    'Chicken' : 0,
    'Pork': 0,
    'Beef' : 0,
    'Halal' : 0,
    'Fish' : 0,
    'Shellfish' : 0,
    'High Fat' : 0,
    'High Oil' : 0,
    'Nuts' : 0,
    'Lactose Intolerant' : 0,
    'Rice' : 0,
    'Noodles' : 0,
    'Vegan' : 0,
    'Vegetables' : 0,
    'Starchy' : 0,
    'Local' : 0,
    'Western' : 0,
    'Chinese' : 0,
}

dish_score = {
    'Chicken Rice': 0,
    "Yong Tau Foo": 0,
    "Hokkien Mee": 0,
    "Char Kway Tiao": 0,
    "Kaya Toast": 0,
    "Laksa": 0,
    'Fried Chicken': 0,
    'Burgers': 0,
    'Pizza': 0,
}

function getDishAttributes(dish){
    return dish_attributes[dish];
}

function updateAttributes(dish,type){

    if (type=="like"){
        dish_attributes[dish].forEach(function(attribute){
            attributes[attribute] += 1;
        });
    }
    else if (type=="dislike") {
        dish_attributes[dish].forEach(function(attribute){
            attributes[attribute] -= 2;
        });
    }
    else{
        console.log('Error: Invalid type');
    }
}

function resetAttributes(){
    for (var key in attributes) {
        attributes[key] = 0;
    }
}

function viewAttributes(){
    // Function returns values of attributes in one array
    var attribute_values = [];
    for (var key in attributes) {
        attribute_values.push(attributes[key]);
    }
    return attribute_values;
}

function calculateDishScore(){
    // Score is calculated by summing up the values of attributes for each dish, divided by the number of attributes
    for (var dish in dish_attributes){
        var score = 0;
        dish_attributes[dish].forEach(function(attribute){
            score += attributes[attribute];
        });
        dish_score[dish] = score/dish_attributes[dish].length;
        console.log(dish + " score: " + dish_score[dish]);
    }
    return dish_score;
}
function predictNextDish(dish_score){
    // Function returns the dish with the highest score
    var max = -100;
    var max_dish = "";
    for (var dish in dish_score){
        console.log(dish + " score: " + dish_score[dish]);
        if (dish_score[dish] > max){
            max = dish_score[dish];
            max_dish = dish;
        }
    }
    console.log(max_dish);
}

updateAttributes('Chicken Rice','like');
updateAttributes('Yong Tau Foo','dislike');
dishscore = calculateDishScore()
console.log(predictNextDish(dish_score))
// function main(n,No_dishes_to_recommend){
//     // n is the number of dishes randomly selected before algo is used to selct the next dish
//     for (var i = 1; i <= No_dishes_to_recommend; i++){
//         if (i < n) {
//             // random
//             var dish = Object.keys(dish_attributes)[Math.floor(Math.random() * Object.keys(dish_attributes).length)];
//             console.log('Dish ' + i + ': ' + dish);
//             updateAttributes(dish);
//         }
//         else {
//             dish_score_ranking = calculateDishScore();
//             // Sort dish_score_ranking in descending order
//             dish_score_ranking = Object.keys(dish_score_ranking).sort(function(a,b){return dish_score_ranking[b]-dish_score_ranking[a]})
//             console.log('Dish ' + i + ': ' + dish);
//             updateAttributes(dish);
//         }
//     }
// }

// main(3,6);

// print length of foodDict
console.log(Object.keys(foodDict).length);

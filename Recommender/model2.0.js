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
      "Attributes": ['Sweet','Vegan','Starchy','Local'],
      "Score": 0
    }
  };

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

// Function takes in a dish from foodDict updates attributes
function updateAttributes(dish,like_dislike){
    if(like_dislike= 'like') {
        for (var i = 0; i < foodDict[dish]['Attributes'].length; i++){
            attributes[foodDict[dish]['Attributes'][i]] += 1;
        }
    }
    else if(like_dislike= 'dislike'){
        for (var i = 0; i < foodDict[dish]['Attributes'].length; i++){
            attributes[foodDict[dish]['Attributes'][i]] -= 2;
        }
    }
    else{
        console.log('Invalid Input keyword: like_dislikes');
    }
}

// Function takes in a dish from foodDict updates score of all dish
function updateScore(dish){
    // Score is calculated by summing up the values of attributes for each dish, divided by the number of attributes
    var score = 0;

    for (var dishname in foodDict){
        for (var i = 0; i < foodDict[dishname]['Attributes'].length; i++){
            score += attributes[foodDict[dishname]['Attributes'][i]];
        }
        score = score/foodDict[dishname]['Attributes'].length;
        foodDict[dishname]['Score'] = score;
    }
    // Reutrn the dishname sorted in descending order of score as a list
    return Object.keys(foodDict).sort(function(a,b){return foodDict[b]['Score']-foodDict[a]['Score']})
}

// Function takes in a dish from foodDict updates attributes and score
function main(dish,like_dislike){
    updateAttributes(dish,like_dislike);
    foodRanking = updateScore(dish);
    console.log(attributes);
    // Pring all scores in foodDict
    for (var key in foodDict){
        console.log(key + ' ' + foodDict[key]['Score']);
    }
    console.log(foodRanking)
}

function genNumber(start, end, int = true) {
    if (int) {
      return Math.floor(Math.random() * end + start);
    }
  }
  
function getImage(n){
    // n is the number of images to be displayed
    // Returns array of food image, food name, and food brand
    foodRanking = Object.keys(foodDict).sort(function(a,b){return foodDict[b]['Score']-foodDict[a]['Score']})

    var dish_to_be_displayed = [];
    for (var i = 0; i < n; i++){
        var food = foodRanking[i];
        var brandIndex = genNumber(0,Object.keys(foodDict[food]['Photo']).length)
        var brand = Object.keys(foodDict[food]['Photo'])[0];
        var image = foodDict[food]['Photo'][brand];
        dish_to_be_displayed.push([image,food,brand]);
    }
    return dish_to_be_displayed;
}


main('Chicken Rice','like');
main('Fried Chicken','dislike');
main('Burgers','like');


console.log(getImage(3))
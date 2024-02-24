dish_score = {
    'Chicken_Rice': 0,
    "Yong_Tau_Foo": 0,
    "Hokkien_Mee": 0,
    "Char_Kway_Tiao": 0,
    "Kaya_Toast": 0,
}

var foodDict = {
  "Chicken Rice": {
    "Hong Yu's Chick":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/640px-Hainanese_Chicken_Rice.jpg",
    "Kaleb's Chick":
      "https://d1e1vgxjd1htwd.cloudfront.net/-/media/recipe-hainanese-chicken-rice.jpg?h=969&la=en&w=1250&hash=2AE75B9674FDE26B8978059DA848F8A888E2845C",
  },
  "Fried Chicken": {
    KFC: "https://www.kfc.com.sg//Content/OnlineOrderingImages/Menu/Items/DEL_Satay_Crunch_Chicken_ALC.jpg",
    "Texas Chicken":
      "https://assets.grab.com/wp-content/uploads/sites/8/2019/03/12143755/Texas-Chicken-Chicken-Combo-delivery-kl-700x700.jpg",
  },
  Burgers: {
    McDonald:
      "https://b.zmtcdn.com/data/pictures/chains/0/20630/a1bb80a3bdb9968b0b937458ae6acfa8.jpg?fit=around|300:273",
    KFC: "https://cdn.discordapp.com/attachments/1018710809360220221/1020012348183949362/unknown.png",
  },
  "Yong Tau Foo": {
    Yong_Tau_Foo:
      "https://ewr1.vultrobjects.com/hawkerpedia/article/20210512/4bHCDY9p0D9p_20210408_111319.jpg",
  },
  "Hokkien Mee": {
    RandomHokkienMee:
      "https://sethlui.com/wp-content/uploads/2021/10/Best-Hokkien-Mee-Ah-Hock.jpg",
  },
  "Char Kway Tiao": {
    RandomChar_Kway_Tiao:
      "https://noobcook.com/wp-content/uploads/2014/03/charkwayteow2.jpg",
  },
  Laksa: {
    RandomLaksa:
      "https://rasamalaysia.com/wp-content/uploads/2011/07/curry-laksa-thumb.jpg",
  },
  "Ayam Penyet": {
    RandomAyamPenyet:
      "https://burpple.imgix.net/foods/283117ab7a78753d09e1850511_original.?w=645&dpr=1&fit=crop&q=80&auto=format",
  },
  "Chili Crab": {
    RandomKayaToast:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/268999.jpg",
  },
  "Kaya Toast": {
    RandomChiliCrab:
      "https://www.thebestsingapore.com/wp-content/uploads/2014/11/best-kaya-toast-596x480.jpg",
  },
  "Dim Sum": {
    RandomDimSum:
      "http://cdn.cnn.com/cnnnext/dam/assets/160325033254-hk-dim-sum-fook-lam-moon.jpg",
  },
  "Otah": {
    citysatayOtah:
      "https://citysatay.com/wp-content/uploads/2021/03/BananaLeafOtah.jpg",
  },
  "Ice Kachang": {
    RandomIceKachang:
      "https://singaporelocalfavourites.com/wp-content/uploads/2016/11/ice-kacang.jpg",
  },
  "Curry Puff": {
    RandomCurryPuff:
      "https://christieathome.com/wp-content/uploads/2020/12/Malaysian-Curry-Puffs-18-scaled.jpg",
  },
  "Satay": {
    RandomSatay:
      "https://sadia.sg/uploads/recipes/20210802080638-2021-08-02recipes080634_md.jpg",
  },
  "Chendol": {
    RandomChendol:
      "https://southeastasiabackpacker.com/wp-content/uploads/2020/11/Cendol-Header.jpg",
  },
  "Roti Prata": {
    RandomRotiPrata:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2020/05/pratasingapore3.jpg",
  },
  "Naan": {
    RandomNaan:
      "https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg",
  },
  "Tandoori Chicken": {
    RandomTandooriChicken:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg",
  },
  "Chicken Masala": {
    RandomChickenMasala:
      "https://static.toiimg.com/thumb/54673639.cms?width=1200&height=900",
  },
  "Fish Head Curry": {
    RandomFishHeadCurry:
      "https://img-global.cpcdn.com/recipes/a82f9bdc6c383ff4/1200x630cq70/photo.jpg",
  },
  "French Fries": {
    RandomFrenchFries:
      "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
  },
  "Pasta": {
    TomatoPasta:
      "https://static.toiimg.com/thumb/52759758.cms?imgsize=560987&width=800&height=800",
  },
  "Chawanmushi": {
    RandomSushi:
      "https://www.justonecookbook.com/wp-content/uploads/2022/09/Chawanmushi-9784-I-500x500.jpg",
  },
  "Sashimi": {
    RandomSushi:
      "https://www.rd.com/wp-content/uploads/2022/02/GettyImages-1284722254.jpg",
  },
  "Sushi": {
    RandomSushi:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536",
  },
  "Miso Soup": {
    RandomMisoSoup:
      "https://www.pressurecookrecipes.com/wp-content/uploads/2021/05/miso-soup.jpg",
  },
  "Ramen": {
    RandomRamen:
      "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
  },
  "Korean BBQ ": {
    RandomKoreanBBQ :
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/11/korean-bbq-8064w.jpg",
  },
};

// Function to get all the keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(foodDict))


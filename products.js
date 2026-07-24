const products = [

/* ============================
   ATTA
============================ */

{
    id: 1,
    name: "Kalash Atta 5kg",
    brand: "Kalash",
    category: "ATTA",
    mrp: 270,
    price: 215,
    image: "images/kalash desi chakki fresh atta 5kg.webp",
    offer: "₹65 OFF"
},

{
    id: 2,
    name: "Fortune Atta 5kg",
    brand: "Fortune",
    category: "ATTA",
    mrp: 270,
    price: 235,
    image: "images/fortune atta 5kg.webp",
    offer: "₹35 OFF"
},

{
    id: 3,
    name: "Fortune Atta 10kg",
    brand: "Fortune",
    category: "ATTA",
    mrp: 507,
    price: 445,
    image: "images/fortune 10kg atta.webp",
    offer: "₹62 OFF"
},

/* ============================
   RICE
============================ */

{
    id: 4,
    name: "Lalat Diamond 1kg",
    brand: "Lalat",
    category: "Rice",
    mrp: 48,
    price: 43,
    image: "images2/rice.jpeg",
    offer: "₹5 OFF"
},

{
    id: 5,
    name: "Lalat Diamond 2kg",
    brand: "Lalat",
    category: "Rice",
    mrp: 95,
    price: 86,
    image: "images2/rice.jpeg",
    offer: "₹9 OFF"
},

{
    id: 6,
    name: "Taj Mahal Arwa 1kg",
    brand: "Taj Mahal",
    category: "Rice",
    mrp: 50,
    price: 46,
    image: "images2/taj mahal arwa 1kg.jpeg",
    offer: "₹4 OFF"
},

{
    id: 7,
    name: "Taj Mahal Arwa 2kg",
    brand: "Taj Mahal",
    category: "Rice",
    mrp: 100,
    price: 92,
    image: "images2/rice.jpeg",
    offer: "₹8 OFF"
},

{
    id: 8,
    name: "Sampoorna Sonam 1kg",
    brand: "Sampoorna",
    category: "Rice",
    mrp: 72,
    price: 65,
    image: "images2/sampoorna sonam 1kg.jpeg",
    offer: "₹7 OFF"
},

{
    id: 9,
    name: "Sampoorna Sonam 2kg",
    brand: "Sampoorna",
    category: "Rice",
    mrp: 145,
    price: 130,
    image: "images2/rice.jpeg",
    offer: "₹15 OFF"
},

{
    id: 10,
    name: "Fortune Katarni 1kg",
    brand: "Fortune",
    category: "Rice",
    mrp: 62,
    price: 56,
    image: "images2/rice.jpeg",
    offer: "₹6 OFF"
},

{
    id: 11,
    name: "Fortune Katarni 2kg",
    brand: "Fortune",
    category: "Rice",
    mrp: 125,
    price: 112,
    image: "images2/rice.jpeg",
    offer: "₹13 OFF"
},

{
    id: 12,
    name: "Lakhi Bhog 1kg",
    brand: "Lakhi Bhog",
    category: "Rice",
    mrp: 78,
    price: 70,
    image: "images2/rice.jpeg",
    offer: "₹8 OFF"
},

{
    id: 13,
    name: "Lakhi Bhog 2kg",
    brand: "Lakhi Bhog",
    category: "Rice",
    mrp: 155,
    price: 140,
    image: "images2/rice.jpeg",
    offer: "₹15 OFF"
},

{
    id: 14,
    name: "Premium Miniket 1kg",
    brand: "Premium",
    category: "Rice",
    mrp: 58,
    price: 53,
    image: "images2/miniket rice 1kg.jpeg",
    offer: "₹5 OFF"
},

{
    id: 15,
    name: "Premium Miniket 2kg",
    brand: "Premium",
    category: "Rice",
    mrp: 118,
    price: 106,
    image: "images2/rice.jpeg",
    offer: "₹12 OFF"
},

{
    id: 16,
    name: "Ladli Rice 1kg",
    brand: "Ladli",
    category: "Rice",
    mrp: 58,
    price: 52,
    image: "images2/ladli 1kg.jpeg",
    offer: "₹6 OFF"
},

{
    id: 17,
    name: "Ladli Rice 2kg",
    brand: "Ladli",
    category: "Rice",
    mrp: 115,
    price: 104,
    image: "images2/rice.jpeg",
    offer: "₹11 OFF"
},

/* ============================
   NOODLES & PASTA
============================ */

{
    id: 18,
    name: "Maggi 70g",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 8,
    price: 7,
    image: "images/maggie 15.jpg",
    offer: "₹1 OFF"
},

{
    id: 19,
    name: "Maggi 140g",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 15,
    price: 15,
    image: "images/maggie 15.jpg",
    offer: "Best Price"
},

{
    id: 20,
    name: "Maggi Family Pack",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 60,
    price: 58,
    image: "images/maggi 58.webp",
    offer: "₹2 OFF"
},

{
    id: 21,
    name: "Maggi Saver Pack",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 90,
    price: 83,
    image: "images/maggi 2-minute noodles family pack.webp",
    offer: "₹7 OFF"
},

{
    id: 22,
    name: "Maggi 8 Pack",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 116,
    price: 116,
    image: "images/maggi 8 pack.webp",
    offer: "Best Price"
},

{
    id: 23,
    name: "Maggi Penne",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 35,
    price: 35,
    image: "images/maggi masala penne.jpg",
    offer: "Best Price"
},

{
    id: 24,
    name: "Maggi Cheese",
    brand: "Maggi",
    category: "Noodles & Pasta",
    mrp: 35,
    price: 35,
    image: "images/maggi cheeze pazzta.jpg",
    offer: "Best Price"
},

/* ============================
   MILK
============================ */

{
    id: 25,
    name: "Sudha Milk 1L",
    brand: "Sudha",
    category: "Milk",
    mrp: 65,
    price: 63,
    image: "images/sudha milk 1l.webp",
    offer: "₹2 OFF"
},

{
    id: 26,
    name: "Amul Shakti 1L",
    brand: "Amul",
    category: "Milk",
    mrp: 65,
    price: 63,
    image: "images/amul sakti milk 1l.webp",
    offer: "₹2 OFF"
},

{
    id: 27,
    name: "Sudha Lassi",
    brand: "Sudha",
    category: "Milk",
    mrp: 20,
    price: 20,
    image: "images/sudha lassi 20rs.webp",
    offer: "Best Price"
},

/* ============================
   DAIRY
============================ */

{
    id: 28,
    name: "Amul Cow Ghee 500ml",
    brand: "Amul",
    category: "Dairy",
    mrp: 150,
    price: 145,
    image: "images/amul cow ghee 500ml.jpg",
    offer: "₹5 OFF"
},

/* ============================
   SALT & SUGAR
============================ */

{
    id: 29,
    name: "Tata Salt 1kg",
    brand: "Tata",
    category: "Salt & Sugar",
    mrp: 30,
    price: 29,
    image: "images/tata salt 1kg.webp",
    offer: "₹1 OFF"
},

/* ============================
   SAUCES
============================ */

{
    id: 30,
    name: "Rich Tomato Ketchup",
    brand: "Rich",
    category: "Sauces",
    mrp: 130,
    price: 120,
    image: "images/rich ketchup.webp",
    offer: "Free Maggi"
},

/* ============================
   COLD DRINK
============================ */

{
    id: 31,
    name: "Nescafe Choco Mocha",
    brand: "Nescafe",
    category: "Cold Drink",
    mrp: 50,
    price: 45,
    image: "images/nescafe choco mocha rs 45.webp",
    offer: "₹5 OFF"
},

{
    id: 32,
    name: "Nescafe Latte",
    brand: "Nescafe",
    category: "Cold Drink",
    mrp: 50,
    price: 45,
    image: "images/nescafe chilled latte rs 45.webp",
    offer: "₹5 OFF"
},

{
    id: 33,
    name: "Slice 250ml",
    brand: "Slice",
    category: "Cold Drink",
    mrp: 10,
    price: 10,
    image: "images/slice rs 10.webp",
    offer: "Best Price"
},

{
    id: 34,
    name: "Slice 600ml",
    brand: "Slice",
    category: "Cold Drink",
    mrp: 20,
    price: 20,
    image: "images/slice.webp",
    offer: "Best Price"
},

{
    id: 35,
    name: "Mountain Dew 600ml",
    brand: "Mountain Dew",
    category: "Cold Drink",
    mrp: 30,
    price: 30,
    image: "images/mouintain dew 600ml rs 30.webp",
    offer: "Best Price"
},

{
    id: 36,
    name: "Mirinda 1L",
    brand: "Mirinda",
    category: "Cold Drink",
    mrp: 50,
    price: 50,
    image: "images/mirinda.webp",
    offer: "Best Price"
},

{
    id: 37,
    name: "7UP 250ml",
    brand: "7UP",
    category: "Cold Drink",
    mrp: 10,
    price: 10,
    image: "images/7up.webp",
    offer: "Best Price"
},

{
    id: 38,
    name: "Diet Coke",
    brand: "Coca-Cola",
    category: "Cold Drink",
    mrp: 60,
    price: 50,
    image: "images/diet coke.webp",
    offer: "₹10 OFF"
},

{
    id: 39,
    name: "Sting",
    brand: "Sting",
    category: "Cold Drink",
    mrp: 20,
    price: 20,
    image: "images/sting.webp",
    offer: "Best Price"
},

/* ============================
   DAILY ESSENTIALS
============================ */

{
    id: 40,
    name: "Kalash Besan 1kg",
    brand: "Kalash",
    category: "ATTA",
    mrp: 90,
    price: 82,
    image: "images/kalash besan.webp",
    offer: "₹8 OFF"
},

{
    id: 41,
    name: "Kalash Suji 1kg",
    brand: "Kalash",
    category: "ATTA",
    mrp: 55,
    price: 48,
    image: "images/kalash suji.webp",
    offer: "₹7 OFF"
},

{
    id: 42,
    name: "Kalash Maida 1kg",
    brand: "Kalash",
    category: "ATTA",
    mrp: 60,
    price: 52,
    image: "images/kalash maida.webp",
    offer: "₹8 OFF"
},

{
    id: 43,
    name: "Amulya Milk Powder",
    brand: "Amulya",
    category: "Milk",
    mrp: 30,
    price: 30,
    image: "images/amulya milk powder.webp",
    offer: "Best Price"
},

{
    id: 44,
    name: "Rich Hot & Sweet",
    brand: "Rich",
    category: "Sauces",
    mrp: 140,
    price: 130,
    image: "images/hot and sweet.webp",
    offer: "₹10 OFF"
},

/* ============================
   COLD DRINK
============================ */

{
    id: 45,
    name: "Pepsi 600ml",
    brand: "Pepsi",
    category: "Cold Drink",
    mrp: 40,
    price: 40,
    image: "images/pepsi 600ml.webp",
    offer: "Best Price"
},

{
    id: 46,
    name: "Sprite 600ml",
    brand: "Sprite",
    category: "Cold Drink",
    mrp: 40,
    price: 40,
    image: "images/sprite.webp",
    offer: "Best Price"
},

/* ============================
   SPICES
============================ */

{
    id: 47,
    name: "Tej Patta",
    brand: "Kalash",
    category: "Masala",
    mrp: 25,
    price: 20,
    image: "images/tejpatta.webp",
    offer: "₹5 OFF"
},

/* ============================
   FROZEN FOOD
============================ */

{
    id: 48,
    name: "Green Peas 500g",
    brand: "Freshe",
    category: "Frozen Food",
    mrp: 90,
    price: 85,
    image: "images3/green peas.webp",
    offer: "₹5 OFF"
},

{
    id: 49,
    name: "Sweet Corn 500g",
    brand: "Freshe",
    category: "Frozen Food",
    mrp: 95,
    price: 90,
    image: "images3/sweet corn.webp",
    offer: "₹5 OFF"
},

/* ============================
   DAL
============================ */

{
    id: 51,
    name: "Arhar Dal 1kg",
    brand: "",
    category: "Dal",
    mrp: 180,
    price: 175,
    image: "images3/arhar.webp",
    offer: "₹5 OFF"
},

{
    id: 52,
    name: "Masoor Dal 1kg",
    brand: "",
    category: "Dal",
    mrp: 135,
    price: 130,
    image: "images3/masoor.webp",
    offer: "₹5 OFF"
},

{
    id: 53,
    name: "Moong Dal 1kg",
    brand: "",
    category: "Dal",
    mrp: 165,
    price: 160,
    image: "images3/moong.webp",
    offer: "₹5 OFF"
},

{
    id: 54,
    name: "Chana Dal 1kg",
    brand: "",
    category: "Dal",
    mrp: 105,
    price: 100,
    image: "images3/chana.webp",
    offer: "₹5 OFF"
},

{
    id: 55,
    name: "Urad Dal 1kg",
    brand: "",
    category: "Dal",
    mrp: 170,
    price: 165,
    image: "images3/urad.webp",
    offer: "₹5 OFF"
},

{
    id: 56,
    name: "Kabuli Chana 1kg",
    brand: "",
    category: "Dal",
    mrp: 145,
    price: 140,
    image: "images3/kabuli chana.webp",
    offer: "₹5 OFF"
},

{
    id: 57,
    name: "Kala Chana 1kg",
    brand: "",
    category: "Dal",
    mrp: 105,
    price: 100,
    image: "images3/kala chana.webp",
    offer: "₹5 OFF"
},

{
    id: 58,
    name: "White Peas 1kg",
    brand: "",
    category: "Dal",
    mrp: 95,
    price: 90,
    image: "images3/white peas.webp",
    offer: "₹5 OFF"
},

{
    id: 59,
    name: "Rajma Chitra 1kg",
    brand: "",
    category: "Dal",
    mrp: 180,
    price: 175,
    image: "images3/rajma chitra.webp",
    offer: "₹5 OFF"
},

{
    id: 60,
    name: "Red Rajma 1kg",
    brand: "",
    category: "Dal",
    mrp: 190,
    price: 185,
    image: "images3/red rajma.webp",
    offer: "₹5 OFF"
},
/* ============================
   BISCUITS OFFERS
============================ */

{
    id: 61,
    name: "Hide & Seek + Magix Choco",
    brand: "",
    category: "Biscuits",
    mrp: 35,
    price: 34,
    image1: "images4/HIDE SEEK.webp",
    image2: "images4/MAGIX CHOCO.webp",
    offer: "Combo Offer"
},

{
    id: 62,
    name: "Hide & Seek + Magix Elaichi",
    brand: "",
    category: "Biscuits",
    mrp: 35,
    price: 34,
    image1: "images4/HIDE SEEK.webp",
    image2: "images4/MAGIX ELAICHOI.webp",
    offer: "Combo Offer"
},

{
    id: 63,
    name: "Hide & Seek + Magix Strawberry",
    brand: "",
    category: "Biscuits",
    mrp: 35,
    price: 34,
    image1: "images4/HIDE SEEK.webp",
    image2: "images4/MAGIX STRAWBERRY.webp",
    offer: "Combo Offer"
},

{
    id: 64,
    name: "Good Day Butter + Magix Choco",
    brand: "",
    category: "Biscuits",
    mrp: 15,
    price: 14,
    image1: "images4/GOOD DAY.webp",
    image2: "images4/MAGIX CHOCO.webp",
    offer: "Combo Offer"
},

{
    id: 65,
    name: "Good Day Cashew + Magix Strawberry",
    brand: "",
    category: "Biscuits",
    mrp: 15,
    price: 14,
    image1: "images4/GOOD DAY.webp",
    image2: "images4/MAGIX STRAWBERRY.webp",
    offer: "Combo Offer"
},

{
    id: 66,
    name: "Jim Jam + Magix Choco",
    brand: "",
    category: "Biscuits",
    mrp: 15,
    price: 14,
    image1: "images4/JIM JAM.webp",
    image2: "images4/MAGIX CHOCO.webp",
    offer: "Kids Combo"
},

{
    id: 67,
    name: "Monaco + Magix Elaichi",
    brand: "",
    category: "Biscuits",
    mrp: 15,
    price: 14,
    image1: "images4/MONACO.webp",
    image2: "images4/MAGIX ELAICHOI.webp",
    offer: "Snack Combo"
},

{
    id: 68,
    name: "Nutri Choice + Magix Strawberry",
    brand: "",
    category: "Biscuits",
    mrp: 15,
    price: 14,
    image1: "images4/NUTRI CHOICE.webp",
    image2: "images4/MAGIX STRAWBERRY.webp",
    offer: "Healthy Combo"
},

{
    id: 69,
    name: "Parle-G + Magix Choco",
    brand: "",
    category: "Biscuits",
    mrp: 15,
    price: 14,
    image1: "images4/PARLE G.webp",
    image2: "images4/MAGIX CHOCO.webp",
    offer: "Value Combo"
},

{
    id: 70,
    name: "Parle Marie + Magix Elaichi",
    brand: "",
    category: "Biscuits",
    mrp: 40,
    price: 40,
    image1: "images4/PARLE MARIE.webp",
    image2: "images4/MAGIX ELAICHOI.webp",
    offer: "Tea Time Combo"
},

{
    id: 71,
    name: "Rich Marie + Magix Strawberry",
    brand: "",
    category: "Biscuits",
    mrp: 40,
    price: 40,
    image1: "images4/RICH MARIE.webp",
    image2: "images4/MAGIX STRAWBERRY.webp",
    offer: "Tea Time Combo"
},

{
    id: 72,
    name: "Pure Magic + Magix Choco",
    brand: "",
    category: "Biscuits",
    mrp: 35,
    price: 34,
    image1: "images4/PURE MAGIC.webp",
    image2: "images4/MAGIX CHOCO.webp",
    offer: "Premium Combo"
},

{
    id: 73,
    name: "Top Butter + Magix Elaichi",
    brand: "",
    category: "Biscuits",
    mrp: 35,
    price: 34,
    image1: "images4/TOP.webp",
    image2: "images4/MAGIX ELAICHOI.webp",
    offer: "Family Combo"
},

{
    id: 74,
    name: "Milk Shakti + Magix Strawberry",
    brand: "",
    category: "Biscuits",
    mrp: 50,
    price: 49,
    image1: "images4/MILKL SHAKTI.webp",
    image2: "images4/MAGIX STRAWBERRY.webp",
    offer: "Family Saver"
},

{
    id: 75,
    name: "Good Day Butter + Hide & Seek",
    brand: "",
    category: "Biscuits",
    mrp: 40,
    price: 39,
    image1: "images4/GOOD DAY.webp",
    image2: "images4/HIDE SEEK.webp",
    offer: "Special Combo"
},

{
    id: 76,
    name: "Monaco + Hide & Seek",
    brand: "",
    category: "Biscuits",
    mrp: 40,
    price: 39,
    image1: "images4/MONACO.webp",
    image2: "images4/HIDE SEEK.webp",
    offer: "Snack Combo"
},

{
    id: 77,
    name: "Parle-G + Hide & Seek",
    brand: "",
    category: "Biscuits",
    mrp: 40,
    price: 39,
    image1: "images4/PARLE G.webp",
    image2: "images4/HIDE SEEK.webp",
    offer: "Value Combo"
},

{
    id: 78,
    name: "Nutri Choice + Hide & Seek",
    brand: "",
    category: "Biscuits",
    mrp: 40,
    price: 39,
    image1: "images4/NUTRI CHOICE.webp",
    image2: "images4/HIDE SEEK.webp",
    offer: "Healthy Combo"
},

{
    id: 79,
    name: "Pure Magic + Hide & Seek",
    brand: "",
    category: "Biscuits",
    mrp: 60,
    price: 59,
    image1: "images4/PURE MAGIC.webp",
    image2: "images4/HIDE SEEK.webp",
    offer: "Premium Combo"
},

{
    id: 80,
    name: "Top Butter + Hide & Seek",
    brand: "",
    category: "Biscuits",
    mrp: 60,
    price: 59,
    image1: "images4/TOP.webp",
    image2: "images4/HIDE SEEK.webp",
    offer: "Family Combo"
}


];
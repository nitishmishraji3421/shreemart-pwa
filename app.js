// ================================
// SHREE MART APP.JS
// PHASE 3C-1
// Product Render + Search + Filter
// ================================

const productContainer = document.getElementById("products");
const searchBox = document.querySelector(".search input");
const categoryButtons = document.querySelectorAll(".cat");

let currentCategory = "ALL";

// Render Products
function renderProducts(data){

productContainer.innerHTML="";

if(data.length===0){

productContainer.innerHTML=`
<div style="grid-column:1/3;text-align:center;padding:40px;">
<h2>No Products Found</h2>
</div>
`;

return;

}

data.forEach(product=>{

productContainer.innerHTML+=`

<div class="product">

<div class="offer">${product.offer}</div>

<div class="favourite">
❤️
</div>

<div class="product-image">

${
product.image1 && product.image2

?

`

<div class="combo-images">

<img src="${product.image1}" class="combo-img">

<div class="plus-sign">+</div>

<img src="${product.image2}" class="combo-img">

</div>

`

:

`

<img src="${product.image}" loading="lazy">

`

}

</div>

<div class="product-info">

<div class="product-name">

${product.name}

</div>

<div class="product-weight">

${product.category}

</div>

<div class="price-row">

<div>

<span class="price">

₹${product.price}

</span>

<span class="old-price">

₹${product.mrp}

</span>

</div>

<button
class="add-btn"
onclick="addToCart(${product.id})">

+

</button>

</div>

</div>

</div>

`;

});

}

// Initial Load

renderProducts(products);

// Search

searchBox.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const filtered=products.filter(product=>{

const matchName=product.name
.toLowerCase()
.includes(keyword);

const matchCategory=currentCategory==="All"
||product.category===currentCategory;

return matchName && matchCategory;

});

renderProducts(filtered);

});

// Category Filter

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

categoryButtons.forEach(c=>{

c.style.border="none";

});

button.style.border="2px solid #16a34a";

currentCategory = button.dataset.category;

if(currentCategory==="Categories"){

currentCategory="All";

}

const keyword=searchBox.value.toLowerCase();

const filtered=products.filter(product=>{

const matchCategory=currentCategory==="All"
||product.category===currentCategory;

const matchName=product.name
.toLowerCase()
.includes(keyword);

return matchCategory && matchName;

});

renderProducts(filtered);

});

});

// Floating Cart Click


// Placeholder

function addToCart(id){

console.log("Add",id);

}
// =======================================
// SHREE MART APP.JS
// PHASE 3C-2
// Add To Cart + LocalStorage + Cart Count
// =======================================

// ---------- CART ----------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

// ---------- SAVE ----------

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}

// ---------- CART COUNT ----------

function updateCartCount() {

    const badge = document.getElementById("cartCount");

    let total = 0;

    cart.forEach(item => {

        total += item.qty;

    });

    badge.innerText = total;

}

// ---------- ADD TO CART ----------

function addToCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.qty++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            qty: 1

        });

    }

    saveCart();

    showToast(product.name + " Added");

}

// ---------- REMOVE ----------

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

}

// ---------- INCREASE ----------

function increaseQty(id) {

    const item = cart.find(i => i.id === id);

    if (!item) return;

    item.qty++;

    saveCart();

}

// ---------- DECREASE ----------

function decreaseQty(id) {

    const item = cart.find(i => i.id === id);

    if (!item) return;

    item.qty--;

    if (item.qty <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

}

// ---------- CLEAR ----------

function clearCart() {

    cart = [];

    saveCart();

}

// ---------- TOTAL ----------

function getCartTotal() {

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.qty;

    });

    return total;

}

// ---------- ITEM COUNT ----------

function getItemCount() {

    let count = 0;

    cart.forEach(item => {

        count += item.qty;

    });

    return count;

}

// ---------- TOAST ----------

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        toast.style.position = "fixed";
        toast.style.left = "50%";
        toast.style.bottom = "100px";
        toast.style.transform = "translateX(-50%)";
        toast.style.background = "#16a34a";
        toast.style.color = "#fff";
        toast.style.padding = "14px 22px";
        toast.style.borderRadius = "30px";
        toast.style.fontWeight = "600";
        toast.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
        toast.style.zIndex = "999999";
        toast.style.opacity = "0";

        document.body.appendChild(toast);

    }

    toast.innerHTML = "🛒 " + message;

    toast.style.opacity = "1";

    toast.style.transition = ".25s";

    setTimeout(() => {

        toast.style.opacity = "0";

    }, 1800);

}

// ---------- FLOATING CART ----------

document.querySelector(".floating-cart").onclick = () => {

    console.log(cart);

    alert(

        "Items : " +

        getItemCount() +

        "\n\nTotal : ₹" +

        getCartTotal()

    );

};
/* ==========================================
   SHREE MART
   PHASE 3C PART-2
   CART OPEN/CLOSE + RENDER + TOTAL
========================================== */

const cartPage = document.getElementById("cartPage");
const cartItems = document.getElementById("cartItems");
const closeCart = document.getElementById("closeCart");

const itemCount = document.getElementById("itemCount");
const subTotal = document.getElementById("subTotal");
const grandTotal = document.getElementById("grandTotal");

const DELIVERY = 30;


/*=====================
OPEN CART
======================*/

document.querySelector(".floating-cart").onclick = function(){

    renderCart();

    cartPage.classList.add("show");

}


/*=====================
CLOSE CART
======================*/

closeCart.onclick=function(){

    cartPage.classList.remove("show");

}


/*=====================
RENDER CART
======================*/

function renderCart(){

    cartItems.innerHTML="";

    if(cart.length==0){

        cartItems.innerHTML=`

        <div style="padding:60px;text-align:center;">

        <img src="images/empty-cart.png"

        style="width:180px">

        <h2>Your Cart is Empty</h2>

        </div>

        `;

        itemCount.innerHTML=0;

        subTotal.innerHTML="₹0";

        grandTotal.innerHTML="₹0";

        return;

    }


    let total=0;

    let totalItems=0;


    cart.forEach(item=>{

        total+=item.price*item.qty;

        totalItems+=item.qty;


        cartItems.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<div class="cart-name">

${item.name}

</div>

<div class="cart-price">

₹${item.price}

</div>

<div class="qty-box">

<button

class="qty-btn"

onclick="decreaseQty(${item.id});renderCart();">

-

</button>

<span>

${item.qty}

</span>

<button

class="qty-btn"

onclick="increaseQty(${item.id});renderCart();">

+

</button>

</div>

</div>

<button

class="removeBtn"

onclick="removeItem(${item.id})">

Remove

</button>

</div>

`;

    });


    itemCount.innerHTML=totalItems;

    subTotal.innerHTML="₹"+total;

    grandTotal.innerHTML="₹"+(total+DELIVERY);

}


/*=====================
REMOVE
======================*/

function removeItem(id){

    cart=cart.filter(i=>i.id!=id);

    saveCart();

    renderCart();

}


/*=====================
UPDATE
======================*/

function updateAfterQty(){

    saveCart();

    renderCart();

}


/*=====================
OVERRIDE
======================*/

function increaseQty(id){

    const item=cart.find(i=>i.id==id);

    item.qty++;

    updateAfterQty();

}


function decreaseQty(id){

    const item=cart.find(i=>i.id==id);

    item.qty--;

    if(item.qty<=0){

        removeItem(id);

        return;

    }

    updateAfterQty();

}


/*=====================
REFRESH AFTER ADD
======================*/

const oldAdd=addToCart;

addToCart=function(id){

    oldAdd(id);

    renderCart();

}


/*=====================
LOAD
======================*/

renderCart();
/*==================================
PHASE 4B
CHECKOUT
==================================*/

const checkoutPage = document.getElementById("checkoutPage");

const checkoutBtn = document.getElementById("checkoutBtn");

const backCheckout = document.getElementById("backCheckout");

const placeOrderBtn = document.getElementById("placeOrderBtn");





// Back

backCheckout.onclick=function(){

    checkoutPage.classList.remove("show");

    cartPage.classList.add("show");

}


// Place Order

placeOrderBtn.onclick=function(){

    const name=document.getElementById("customerName").value.trim();

    const phone=document.getElementById("customerPhone").value.trim();

    const address=document.getElementById("customerAddress").value.trim();

    const note=document.getElementById("customerNote").value.trim();



    if(name==""){

        alert("Enter Name");

        return;

    }


    if(!/^[6-9]\d{9}$/.test(phone)){

        alert("Enter Valid Mobile Number");

        return;

    }


    if(address==""){

        alert("Enter Delivery Address");

        return;

    }



    let message="🛒 *SHREE MART ORDER*%0A%0A";

    message+="👤 Name : "+name+"%0A";

    message+="📞 Mobile : "+phone+"%0A";

    message+="📍 Address : "+address+"%0A";

    if(note!=""){

        message+="📝 Note : "+note+"%0A";

    }

    message+="%0A";

    message+="------------------------%0A";

    message+="🛍 ITEMS%0A";

    message+="------------------------%0A";


    let total=0;


    cart.forEach(item=>{

        message+=item.name+" x "+item.qty;

        message+=" = ₹"+(item.price*item.qty);

        message+="%0A";

        total+=item.price*item.qty;

    });


    message+="%0A";

    message+="Subtotal : ₹"+total+"%0A";

    message+="Delivery : ₹30%0A";

    message+="Total : ₹"+(total+30)+"%0A";

    message+="%0A";

    message+="Thank You ❤️";


    window.open(

        "https://wa.me/919279805601?text="+message,

        "_blank"

    );

    clearCart();

    renderCart();

    document.getElementById("customerName").value = "";

    document.getElementById("customerPhone").value = "";

    document.getElementById("customerAddress").value = "";

    document.getElementById("customerNote").value = "";

    checkoutPage.classList.remove("show");

    alert("Order Sent Successfully");


};
// ===========================
// NAVIGATION BUTTONS
// ===========================

const navButtons = document.querySelectorAll("nav div");

// Home
navButtons[0].onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Category
navButtons[1].onclick = () => {
    document.querySelector(".category").scrollIntoView({
        behavior: "smooth"
    });
};

// Cart
navButtons[2].onclick = () => {
    renderCart();
    cartPage.classList.add("show");
};

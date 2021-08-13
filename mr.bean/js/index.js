function border(name){
    var elements=Array(5);
  elements[0]=  document.getElementById('welc');
  elements[1]=  document.getElementById('find');
  elements[2]=  document.getElementById('interior');
  elements[3]=  document.getElementById('menu');
  elements[4]=  document.getElementById('more');
  var namee=document.getElementById(name);
  for(var i=0;i<5;i++){
      if(  namee.innerText==elements[i].innerText)
  elements[i].style.borderRight='4px solid #EEB76B';
  else
  elements[i].style.borderRight='';
}

}
function nav(){
    var navbar=document.getElementById('nav-bar');
    menu=document.getElementById('menuu');
   if(navbar.style.display=='none'){
    navbar.style.display='block';
    menu.setAttribute('src','../images/close.png');

   }
   else {
       navbar.style.display='none';
       menu.setAttribute('src','../images/menu.png');

}
}
function more(){
var text=document.getElementById('contant');
var link=document.getElementById('link');
link.setAttribute('href','../style/index2.css');
text.innerHTML=
`<section id="banner">
<div class="banner-img">
<img src="../images/internal.jpg">

</div>
</section>
<!--WELCOME-->
<section id="welcome">
<h1 class="title">MORE THAN JUST GREAT COFFEE!
</h1>

<div class="descrption">
 <h3 class="sub-title">DO SOMETHING GREAT TODAY – DRINK GOOD COFFEE
 </h3>
 <hr>

<p>The Daily Coffee Group is a fast-growing and truly South African coffee franchise group. Coffee is our business and we have two tailor-made franchise models – The Daily Coffee Café and The Daily Coffee Express – from which franchisees can choose to give their customers what The Daily Coffee Group has become renowned for – good coffee and a warm emotion!</p>
<p>We offer franchisees more than mere franchise opportunities. We present a premium investment platform to become part of South Africa’s lucrative and fast-growing coffee industry – an industry where a modern way of life and a growing number of coffee enthusiasts create an increasing demand for good coffee and branded lifestyle coffee destinations.</p>
<p>Founded in 2013 when the first The Daily Coffee Café opened and officially expanding into a franchise group in October 2015, The Daily Coffee Group is already recognized as an industry leader with our popular coffee cafés and other coffee outlets renowned for their high standards in service, coffee, food and décor. Inspired by the café life prevalent from Cape Town to New York, we pride ourselves on our professionally made five-senses espresso coffee and associated drinks. At the same time our seasonal fresh and newly-prepared food and baked items, together with service based on genuine hospitality, create even more reason to frequent these trendy destinations.
</p>
<p>Enter any of our coffee cafés, and the modern and striking, yet subtle interior, together with its hassle-free atmosphere will uplift, relax and prepare you for a refined experience. Key to this is the pleasing and much talked about New-York-meets-Karoo theme which takes our patrons on a visual journey where they can expect to come across hints of upmarket Big Apple urbanism, combined with shades of customary down-to-earth South African appeal to make it local.</p>
<p>Our community-based coffee cafés have become destinations of choice where the staff is friendly and real, making it their task to make customers feel at home in this great place and space, whether meeting with a friend or two, or simply to enjoy quality me-time on their own.

</p>
<p>The Daily Coffee Group’s future growth is based on a carefully conceptualized and managed strategy. It is furthermore driven by our passion for people and an underlying desire to offer The Daily Coffee experience to more and more clientele to come home to our good coffee and inviting atmosphere.</p>
</div>
<div class="shop">
<div class="box">
<h3>OUR FOUNDATION</h3>
<hr>
<p>The Daily Coffee Group’s business is coffee and as such we are driven by our love for coffee, our passion for people and an underlying desire to expand our franchise network so that more and more coffee lovers can come home to our good coffee and get hooked by our warm emotion.</p>
</div>
<div class="box">
 <h3>OUR JOURNEY</h3>
 <hr>
 <p>We seek to grow our brand and to be recognized as the preferred and trusted coffee franchisor that offers its franchisees the best support and a proprietary business package renowned for its high standards in coffee, food, décor and service.</p>
    </div>
</div>
<div class="shop second">
 <div class="box-1">
<h3>OUR COFFEE</h3>
<h6>A SPECIAL MENTION</h6>
<hr>
<p>The Daily Coffee Group’s distinct coffee blend – a medium-dark roast blend of 100% Arabica coffee beans from Africa’s recognised coffee producing regions – offers the ideal espresso base for South African’s favourite coffee beverage – cappuccino and latte. On its own it is also a favourite for its deep, rich flavour with soft undertones, a prominent characteristic of East African beans.</p>
<p>The Daily Coffee Group’s distinct coffee blend – a medium-dark roast blend of 100% Arabica coffee beans from Africa’s recognised coffee producing regions – offers the ideal espresso base for South African’s favourite coffee beverage – cappuccino and latte. On its own it is also a favourite for its deep, rich flavour with soft undertones, a prominent characteristic of East African beans.</p>
 </div>
 <div class="box-2">
  <img src="../images/item-1.jpg">
     </div>
</div>
<div class="shop second">
 <div >
 <img src="../images/item-2.jpg"></div>
 <div class="box-1">
     <h3>GREAT MENU</h3>
     <h6>THE DAILY DELIGHTS</h6>
<p>
 
As with everything else that we do, the items and preparation of the food on The Daily Coffee Café’s menu contribute to that overall experience of gratification that frequenting our cafés offer. Being constantly aware of our clientele’s dietary needs, we are able to carefully compile our menu so that it offers everything that our discerning guests may require, but without making it complicated or overwhelming. We cater for breakfast, brunch and lunch, and in particular for craving-for-delectable-delight moments with our superior cakes and confectionery. We make seasonal adjustments to our menu so that we are able to offer only the freshest of what is available at any given time.
</p>
 </div>
</div>
</section>
`;
}

function welcome(){
    var text=document.getElementById('contant');
var link=document.getElementById('link');
link.setAttribute('href','../style/index.css');
text.innerHTML=`
<section id="banner">
   <div class="banner-img">

   </div>
</section>
<!--WELCOME-->
<section id="welcome">
<h1 class="title">THE DAILY COFFEE GROUP</h1>

<div class="descrption">
    <h3 class="sub-title">DO SOMETHING GREAT TODAY – DRINK GOOD COFFEE</h3>
    <hr>

<h3>Coffee shop franchise – Become a franchisee!</h3>
<p>The Daily Coffee Group is a fast-growing and truly South African coffee franchise group currently comprising 30 coffee franchises and set to further expand nationally. Coffee is our business and we have two tailor-made coffee shop franchise models from which franchisees can choose to give their customers what The Daily Coffee Group has become renowned for – good coffee and a warm emotion!</p>
<p>We offer franchisees more than mere franchise opportunities. We present a premium investment platform to become part of South Africa’s lucrative and fast-growing coffee industry – an industry where a modern way of life and a growing number of coffee enthusiasts create an increasing demand for good coffee and branded lifestyle coffee destinations</p>
<p>
    Welcome to The Daily Coffee Group. Discover your future today in our range of remarkable franchise opportunities…
</p>
</div>
<div class="shop">
    <img src="../images/item-1.jpg" alt="">
    <img src="../images/item-2.jpg" alt="">

</div>
</section>`;
}

function interior(){
    var text=document.getElementById('contant');
    var link=document.getElementById('link');
    link.setAttribute('href','../style/index3.css');
    text.innerHTML=`
    <section id="banner">
   <div class="banner-img">
<img src="../images/shop.jpg">

   </div>
   <h1 class="title">The Intertior
</h1>
</section>
<!--WELCOME-->
<section id="welcome">


<div class="photo">
    <img src="../images/internal-1.jpg">

<img src="../images/internal.jpg">
<img src="../images/secondflore.jpg">


</div>
</section>`;
}

function menu(){
    var text=document.getElementById('contant');
    var link=document.getElementById('link');
    link.setAttribute('href','../style/index3.css');
    text.innerHTML=`
    <section id="banner">
   <div class="banner-img">
<img src="../images/cover2.jpg">

   </div>
   <h1 class="title">OUR MENU
</h1>
</section>
<!--WELCOME-->
<section id="welcome">


<div class="photo">
    <img src="../images/menu.jpg">

<img src="../images/item-4.jpg">
<img src="../images/item.jpg">
<img src="../images/item-3.jpg">
<img src="../images/item-5.jpg">
</div>
</section>`;
}

function find(){
    var text=document.getElementById('contant');
    var link=document.getElementById('link');
    link.setAttribute('href','../style/index3.css');
    text.innerHTML=`
    <section id="banner">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62721.42641691171!2d35.80910450907872!3d32.593272603537955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd732fa6fe6df70d7!2z2YXYs9iq2LEg2KjZitmGIC0gTXIuIEJlYW4!5e0!3m2!1sen!2sjo!4v1628065218685!5m2!1sen!2sjo" width="98%" height="70%" style="border:0; padding: 10px; " allowfullscreen="" loading="lazy
    "></iframe>
</section>
<section class="welcome">
    <div class="social-links">
        <i class="fab fa-facebook"></i>        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
    
    </div>
</section>`;
}
<!DOCTYPE html>
<html>
<head>
	<meta charset  ="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>The Road</title>
	<style>*{
	margin:0;
	padding:0;
	font-family: sans-serif;
	list-style-type:none;
	text-decoration:none;
	box-sizing:border-box;
	outline: none;
}
html{
	font-size: 60%;
}
:root {
	--primary-color:#2b81e4;
	--secondary-color:#eee;
	--white-color:#fff;
	--grey-color:#555;
	--light-grey-color:#777;
}
.center{
	display:flex;
	justify-content: center;
	align-items: center;
}


.container{
	background-color:var(--secondary-color);
	margin:3.5rem;
	box-shadow:0 1rem 3rem var(--grey-coor);
	overflow: hidden;
	padding: 20px;
}
.n-i{
	width:5.5rem;
	height: 5.5rem;
	background-color: white;
    border-radius: 50%;
    cursor:pointer;
    flex-direction: column;
}
.n-i .line{
	height: 0.2rem;
	width:3.5rem;
	background-color: grey;
}
.o-n-i{
	position: fixed;
	top:6.5rem;
	left:6.5rem;
	z-index: 200;
}
.o-n-i .line{
	margin:0.3rem 0;

}
.n-w{
	width: 100vw;
	height: 100vh;
	background-color: rgba(255,255,255,0.7);
	position: fixed;
	left: 0;
	bottom: -100%;
	opacity: 0;
	z-index: 300;
	padding:3.5rem 5.5rem 3.5rem 3.5rem;
	transition: bottom 0.5s, opacity 0.2s;
}
.change .n-w{
	bottom: 0;
	opacity: 1;
	transition: bottom 0.5s, opacity 0.2s 0.25s;
}
.nb{
	width: 100%;
	height: 100%;
    background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(../img12.jpg) center no-repeat;
    background-size: cover;
    position: relative;
    overflow-y: hidden;
}
.c-n-i{
	position: absolute;
    top:2.5rem;
    right: 3rem;
    z-index: 300;
}
.c-n-i .line{
	position: absolute;
}
.l1{
	transform: rotate(40deg);
}
.l2{
	transform: rotate(-40deg);
}
.n-a{
	font-size: 3rem;
	font-weight: 700;
	color:white;
	text-transform: uppercase;
	width: 100%;
	opacity: 0.8;
	position: relative;
	top: -100%;
	transition: all 0.3s;
}
.change .n-a{
	top:0;
}
.n-a:hover{
	opacity: 1;
	color:var(--primary-color);
}
.n-l{
	height: 100%;
	display: flex;
}
.change .n-a:nth-child(1){
	transition: top 1s 0.4s,opacity 0.3s, color 0.3s;
}
.change .n-a:nth-child(2){
	transition: top 1s 0.6s,opacity 0.3s, color 0.3s;
}
.change .n-a:nth-child(3){
	transition: top 1s 0.8s,opacity 0.3s, color 0.3s;
}
.change .n-a:nth-child(4){
	transition: top 1s 1s,opacity 0.3s, color 0.3s;
}
.change .n-a:nth-child(5){
	transition: top 1s 1.2s,opacity 0.3s, color 0.3s;
}

.header{
	width:100%;
	height:900px;
	background-image:url(../img2.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	display:flex;
	flex-direction: row;
}
.htext{
	text-align:center;
	text-transform: uppercase;
	letter-spacing: 0.1rem; 
	
}
.h1{
	font-size: 7rem;
	color:var(--white-color);
	position: relative;
    top:300px;
    left: 60px;
}
.pt{
	font-size: 2rem;
	font-weight: 500;
	color:var(--secondary-color);
	max-width: 70rem;
	margin:auto;
	position: relative;
	top:350px;
}
.logo{
	position: relative;
	top:30px;
	right: 70px;
}
.logo h1{
	display:flex;
}
.logo h1 span {
	font-size: 2rem;
	font-weight: 900;
	color:var(--primary-color);
	text-transform: uppercase;
	background-color: var(--white-color);
	width:3.5rem;
	height: 3.5rem;
	margin:0.5rem;
	border-radius: 50%;
	display:flex;
	justify-content:center;
	align-items: center;
}

.logo h1 span:nth-child(1){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.1s;
	animation-iteration-count: infinite;

}
.logo h1 span:nth-child(2){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.2s;
	animation-iteration-count: infinite;

}
.logo h1 span:nth-child(3){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.3s;
	animation-iteration-count: infinite;

}
.logo h1 span:nth-child(4){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.4s;
	animation-iteration-count: infinite;

}
.logo h1 span:nth-child(5){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.5s;
	animation-iteration-count: infinite;

}
.logo h1 span:nth-child(6){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.6s;
	animation-iteration-count: infinite;

}
.logo h1 span:nth-child(7){
	animation-name:drop-letters;
	animation-duration: 5s;
	animation-delay: 0.7s;
	animation-iteration-count: infinite;

}
@keyframes drop-letters{
	0%{
		transform:translateY(0);
	}
	10%{
		transform:translateY(0);
	}
	15%{
		transform:translateY(-100%);
	}
	20%{
		transform:translateY(0);
	}
	100%{
		transform:translateY(0);
	}
}
.hi{
	width:35%;
	animation:image-float 90s infinite;	
}
@keyframes image-float{
	0%{
      transform: translateY(20rem);
      opacity: 1;
	}
	25%{
		transform: translateY(40rem)
		translateX(50rem);
		opacity: 0.8;
	}
	50%{
		transform: translateY(60rem)
		translateX(20rem);
		opacity: 0.8;
		width: 10%;
		height: 20%;
	}
    70%{
    	transform: translateY(60rem)
		translateX(20rem);
		opacity: 0.8;
		width: 10%;
		height: 20%;
    }
	100%{
		transform: translateY(100rem)
		opacity: 1;

	}


}
.s1{
   padding:20px 0 25px 0;
}
.s1-h{
   font-size: 8rem;
   text-align: center;
   margin-bottom: 8rem;
   color:var(--primary-color);
   text-shadow: 5px 5px 14px var(--primary-color)
}

.c-w{
	display:flex;
	justify-content: space-around;
}
.c{
	width: 35rem;
	position: relative;
	perspective: 150rem;
}
.c-i{
	width: 100%;
	border-radius: 10px 10px 0 0 ;
}
.f-s{
    text-align: center;
    background-color:white;
    border-radius: 10px;
    position: relative;
    z-index: 10;
    opacity: 0.9;
    transition: opacity 0.4s, transform 0.4s,
    box-shadow:0.4s;
}
.change > .f-s{
	transform:translateZ(-5rem) translateX(3rem);
	box-shadow:0 2rem 4rem #777;
	opacity: 0.5;
	z-index: 0;
}
.n1{
	font-size: 25px;
	font-weight: 700;
	text-transform: uppercase;
	position: absolute;
	top:30%;
	right: 50px;
	color:white;
}
.c-l{
	width: 80%;
	margin:auto;
	padding:5px 0 5px 0;
}
.c-l1{
	font-size: 1.6rem;
	font-weight: 500;
	color:grey;
    margin:5px 0;
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: 10px;
}
.b-s{
	position: absolute;
	top:0;
	background-color: var(--primary-color);
	width: 100%;
	height: 100%;
	border-radius: 10px;
	box-shadow: 0 5rem 2rem #aaa;
	flex-direction: column;
	transform: translateZ(-5rem) translateX(3rem);
	opacity: 0.5;
	transition: opacity 0.4s, transform 0.4s,
    box-shadow 0.4s;
}
.change > .b-s{
	transform:translateZ(0) translateX(0);
	box-shadow:0 2rem 4rem #777;
	opacity: 0.9;
}
.t-p{
    font-size: 5rem;
    font-weight: 300;
    color:white;
    margin-bottom: 3rem;
}
.c-b{
	color: var(--primary-color);
	background-color: white;
	border:none;
	font-size: 2.5rem;
	padding:1rem 2rem;
	border-radius: 5rem;
	cursor:pointer;
}
.n-b{
	position: absolute;
	top:0.5rem;
	left:0.5rem;
	padding: 0.5rem;
	background-color: rgba(255,255,255,0.8);
	color:grey;
	border-radius: 0.3rem;
	border:none;
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
	cursor:pointer;
}

.s2{
	margin-top:50px;
	padding:20px 0;
	position: relative;
}
.s-w{
	display:flex;
	flex-direction: column;
	align-items: center;
}
.s-b{
	background-color: rgba(238,238,238,0.9);
    padding: 40px;
    margin:20px;
    width: 70%;
    box-shadow: 0 2rem 5rem rgba(51,51,51, 0.4);
    transform:skewX(20deg);
}
.s-i{
	width: 100px;
	height: 100px;
	border-radius:50%;
	object-fit: cover; 
	margin-right: 10px;
}
.st{
	transform: skewX(-20deg);
	display:flex;
}
.s-h{
	font-size: 17px;
    text-transform: uppercase;
    color:#6e6d65;
    margin-bottom: 10px;
}
.s-p{
	font-size: 12px;
	color:#6d6c63;

}
.s-p::first-letter{
margin-left:10px;
}
.v-c{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.4;
}
.vd{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.cont{
	padding: 30px 0 35px 0;
    text-align: center;
    background: url(../img11.png) center;
    width:100%;
    height: 700px;
    background-repeat: no-repeat;
    background-size: cover;
    animation: c-bg 20s infinite;
}
.cont-h{
	font-size: 40px;
	font-weight: 700;
	text-transform: uppercase;
	color:white;
	text-shadow: 0 5px 10px #000;
    margin-bottom: 20px;
}
.cont-f{
	width:60rem;
	height: 50rem;
	margin:auto;
	flex-direction: column;
	border-radius: 1rem;
	box-shadow: 0 1rem 3rem #000;
    background-color: rgba(255,255,255,0.93);
    padding:5rem;
}
.i-g{
	width:100%;
	display: flex;
	flex-direction: column;
	margin:1rem 0;
	position: relative;
}
.i-gs{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
 .i-gs .i-g{
 	width: 48.5%;
 }
 .i-g input, .i-g textarea{
 	padding: 3rem 1rem 1rem 1rem;
 	background-color: var(--secondary-color);
    font-size: 1.4rem;
    color:grey;
    border-radius: 0.5rem;
    border:0.2rem solid var(--secondary-color);
    transition: border 0.3s;
 }

.i-g input:focus, .i-g textarea:focus{
	border:0.1rem solid #ccc;
}
.i-g label{
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	color:grey;
	position: absolute;
	top:1rem;
	left: 1rem;
}
.f-b{
	width:100%;
	padding:1rem;
	font-size: 1.6rem;
	margin-top: 1rem;
	border:none;
    background-color: grey;
    color:white;
    border-radius: 0.5rem;
    cursor:pointer;
    transition: background-color 0.4s;
}
.f-b:hover{
	background-color: #5d5c54;
}
.i-g textarea{
	max-height: 15rem;
	max-width:100%; 
}
@keyframes c-bg{
	0%{
		background-color: #3d3d3d;
	}
	25%{
		background-color: #ced8e4;
	}
	50%{
		background-color: #1e81f3;
	}
	75%{
		background-color: #ff7842;
	}
	100%{
		background-color: #3d3d3d;
	}
}
.ft{
	background-color: grey;
	padding:4rem 0 2rem 0;
}
.ft-l{
	display: flex;
	justify-content: center;
}
.ft-a{
	font-size: 2rem;
	color:white;
	margin:0 2rem;
	background-color: grey;
	padding: 0.3rem 3rem;
	transition:all 0.2s;  
}
.ft-a:hover{
	transform: rotate(-10deg);
	box-shadow: 0 2rem 3rem #000;
}

.ft-p{
	text-align: center;
	font-size: 1.5rem;
	color:var(--secondary-color);
	margin-top: 5rem;
}
@media(max-width:1200px ){
	.c-w{
		flex-direction: column;
		align-items: center;
	}
	.c{
		margin:3rem 0;
	}
	.s-b{
		width:85%;
	}
}
@media(max-width:1000px){
	.n-l{
       flex-direction: column;
	}
	.n-a{
		flex-grow: 1;
	}
	.htext{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	.h1{
		font-size: 6rem;
	}
	.pt{
		font-size: 2.5rem;
	}
	.s1-h{
		font-size: 6rem;
	}
	.s-b{
		transform: skewX(0);
	}
	.st{
		transform: skewX(0);
		flex-direction: column;
		align-items: center;
	}
	.s-i{
		margin-bottom: 3rem;
	}
	.ft-l{
		padding: 0.3rem 2rem;
		margin: 0 1rem;
	}
}
@media(max-width: 800px){
	.pt{
		display:none;
	}
	.s1-h{
      font-size: 5rem;
	}
	.cont-f{
		width: 90%;
	}
	.ft-l{
        flex-direction: column;
        align-items: center;
	}
	.ft-a{
		margin:1rem 0;
	}
}
@media(max-width: 650px){
	.container{
		margin: 0;
	}
	.o-n-i{
		top: 2.5rem;
		left:2.5rem;
	}
	.n-w{
		padding: 0;
	}
	.c-n-i{
		right: 4rem;
	}
	.header{
		height: 100vh;

	}
	.cont-h{
		font-size: 6rem;
	}
	.cont-f{
		padding: 2rem;
		height: 40rem;
	}
}
@media(max-width:500px ){
	html{
		font-size: 45%;
	}
}
</style>
</head>
<body>
<div class="container">
	<div class="o-n-i n-i center">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>
	<div class="n-w">
		<nav class="nb">
			<div class="c-n-i n-i center">
				<div class="line l1"></div>
				<div class="line l2"></div>
			</div>
         <div class="n-l">
         	<a href="#" class="n-a center">Home</a>
         	<a href="#" class="n-a center">Tours</a>
         	<a href="#" class="n-a center">About Us</a>
         	<a href="#" class="n-a center">Offer</a>
         	<a href="#" class="n-a center">Contact</a>
         </div>
		</nav>
	</div>
	<header class="header" >
		<div class="htext">
			<h1 class="h1">Around the world</h1>
			<p class="pt">"Traveling-it leaves you speechless, then turns you into a storyteller"</p>
		</div>
		<img src="img3.png" alt="Header Image" class="hi"  height="700px">
		<div class="logo">
			<h1>
			<span >t</span>
			<span >h</span>
			<span >e</span>
			<span >r</span>
			<span >o</span>
			<span >a</span>
			<span >d</span>
		</h1>
		</div>
	</header>
	<section class="s1">
		<h1 class="s1-h">The Most Popular Tours</h1>
		<div class="c-w">
			<div class="c">
				<div class="f-s">
					<img class="c-i" src="img4.jpg">
					<h1 class="n1">The wild forest</h1>
					<ul class="c-l">
						<li class="c-l1">7 days tour</li>
						<li class="c-l1">Up to 20 people</li>
						<li class="c-l1">4 tour guides</li>
						<li class="c-l1">SLeep in privatte tents</li>
						<li class="c-l1">Dificulty: medium</li>
					</ul>
					<button class="n-b">
						price &gt;&gt;
					</button>
				</div>
					<div class="b-s center">
						<button class="n-b">
							&lt;&lt;back
						</button>
						<h3 class=t-p>$399</h3>
						<button class="c-b">Booking</button>
					</div>
			</div>
				<div class="c">
				<div class="f-s">
					<img class="c-i" src="img5.jpg">
					<h1 class="n1">Along the river</h1>
					<ul class="c-l">
						<li class="c-l1">9 days tour</li>
						<li class="c-l1">Up to 30 people</li>
						<li class="c-l1">4 tour guides</li>
						<li class="c-l1">SLeep in privatte tents</li>
						<li class="c-l1">Dificulty: hard</li>
					</ul>
					<button class="n-b">
						price &gt;&gt;
					</button>
				</div>
					<div class="b-s center">
						<button class="n-b">
							&lt;&lt;back
						</button>
						<h3 class=t-p>$499</h3>
						<button class="c-b">Booking</button>
					</div>
				</div>
			<div class="c">
				<div class="f-s">
					<img class="c-i" src="img6.jpg">
					<h1 class="n1">The Island beach</h1>
					<ul class="c-l">
						<li class="c-l1">5 days tour</li>
						<li class="c-l1">Up to 40 people</li>
						<li class="c-l1">8 tour guides</li>
						<li class="c-l1">SLeep in hotel</li>
						<li class="c-l1">Dificulty: easy</li>
					</ul>
					<button class="n-b">
						price &gt;&gt;
					</button>
				</div>
					<div class="b-s center">
						<button class="n-b">
							&lt;&lt;back
						</button>
						<h3 class=t-p>$599</h3>
						<button class="c-b">Booking</button>
				</div>
			</div>
		</div>
	</section>
	<section class="s2">
		<div class="v-c">
			<video class="vd" autoplay muted loop>
				<source src="vd1.mp4" type="video/mp4">
			</video>
		</div>
		<div class="s-w">
			<div class="s-b">
				<div class="st">
					<img src="img8.jpg" class="s-i">
					<div class="s-t">
						<h1 class="s-h">These were the best days of this year</h1>
						<p class="s-p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.	
						</p>
					</div>
				</div>
			</div>
						<div class="s-b">
				<div class="st">
					<img src="img9.jpg" class="s-i">
					<div class="s-t">
						<h1 class="s-h">I enjoyed this great tour </h1>
						<p class="s-p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.	
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="cont">
		<h1 class= "cont-h">Contact Us</h1>
      <form class="cont-f center">
      	<div class="i-g">
      		<label>Full Name *</label>
      		<input type="text" class="cont-i" placeholder="Enter Your Name">
      	 </div>
      	 <div class="i-gs">
      	 	<div class = "i-g">
      		<label>Email *</label>
      		<input type="email" class="cont-i" placeholder="Enter Your Email">
      	 </div>
      	 <div class="i-g">
      		<label>Phone </label>
      		<input type="text" class="cont-i" placeholder="Enter Phone Number">
      	 </div>
      	 </div>
      	 <div class="i-g">
      	 	<label>Message</label>
      	 	<textarea class="f-t" placeholder="Your Message Here..."></textarea>
      	 </div>
      	 <input type="submit" value="Submit" class="f-b">
      </form>
	</section>
	<footer class="ft">
		<div class="ft-l">
			<a href="#" class="ft-a">Home</a>
			<a href="#" class="ft-a">Tours</a>
			<a href="#" class="ft-a">About Us</a>
			<a href="#" class="ft-a">Offer</a>
			<a href="#" class="ft-a">Contact</a>
		</div>
			<p class="ft-p">Copyright &copy; CodeAndCreate All Rights Reserved </p>
		</div>
	</footer>
</div>
<script>
	const container=document.querySelector(".container")
document.querySelector(".o-n-i").addEventListener("click",()=>{
	container.classList.add("change");
})
document.querySelector(".c-n-i").addEventListener("click",()=>{
	container.classList.remove("change");
})


const colors=["#6495ed","#7fffd4","#ffa07a","#f08080","#afeeee"];
let i=0;
Array.from(document.querySelectorAll(".n-a")).forEach((item)=>{
item.style.cssText = `background-color:${colors[i++]
}`;
})

Array.from(document.querySelectorAll(".n-b")).forEach((item) =>{
 item.onclick = () =>{
 	item.parentElement.parentElement.classList.toggle("change");
 };
});
</script>
</body>
</html>  

// // Copy the templates content
// const myTpl = document.querySelector("#tpl").content;
//
// // Clone it
// const myTplClone = myTpl.cloneNode(true);
//
// // Change the clone if needed
// myTplClone.querySelector('h2').innerHTML = 'Super!';
//
// // Append it to an element
// const parent = document.querySelector("#important");
// parent.appendChild(myTplClone);


const myTpl = document.querySelector("#myTemplate").content;
const myTplClone = myTpl.cloneNode(true);
myTplClone.querySelector(".postImage").src = "img/post1.png";
myTplClone.querySelector("h2").innerHTML = "Meetings Schedule released!";
myTplClone.querySelector("p").innerHTML = "What happened at the previous meeting??";
const parent = document.querySelector(".post");
parent.appendChild(myTplClone);

const myTplClone2 = myTpl.cloneNode(true);
myTplClone2.querySelector(".postImage").src = "img/post2.png";
myTplClone2.querySelector("h2").innerHTML = "Last arrival camp was special!";
myTplClone2.querySelector("p").innerHTML = "Did they even survive this?";
parent.appendChild(myTplClone2);

const myTplClone3 = myTpl.cloneNode(true);
myTplClone3.querySelector(".postImage").src = "img/post3.png";
myTplClone3.querySelector("h2").innerHTML = "That was my backyard for a year.";
myTplClone3.querySelector("p").innerHTML = "Come and read how living in Canada looks like.";
parent.appendChild(myTplClone3);

const myTplClone4 = myTpl.cloneNode(true);
myTplClone4.querySelector(".postImage").src = "img/post4.jpg";
myTplClone4.querySelector("h2").innerHTML = "I can't believe we're here!";
myTplClone4.querySelector("p").innerHTML = "I have so many new friends around the world.";
parent.appendChild(myTplClone4);

const myTplClone5 = myTpl.cloneNode(true);
myTplClone5.querySelector(".postImage").src = "img/post5.jpg";
myTplClone5.querySelector("h2").innerHTML = "Meetings Schedule released!";
myTplClone5.querySelector("p").innerHTML = "What happened at the previous meeting??";
parent.appendChild(myTplClone5);

const myTplClone6 = myTpl.cloneNode(true);
myTplClone6.querySelector(".postImage").src = "img/post6.png";
myTplClone6.querySelector("h2").innerHTML = "You can now go to Greece with YFU!";
myTplClone6.querySelector("p").innerHTML = "What if I tell you that could be your view from the window?";
parent.appendChild(myTplClone6);

const myTplClone7 = myTpl.cloneNode(true);
myTplClone7.querySelector(".postImage").src = "img/post7.png";
myTplClone7.querySelector("h2").innerHTML = "He ate a silk worm!";
myTplClone7.querySelector("p").innerHTML = "I lived in Thailand. How cool is that?";
parent.appendChild(myTplClone7);

const myTplClone8 = myTpl.cloneNode(true);
myTplClone8.querySelector(".postImage").src = "img/post8.png";
myTplClone8.querySelector("h2").innerHTML = "My graduation party in the USA!";
myTplClone8.querySelector("p").innerHTML = "Best moment of my life!";
parent.appendChild(myTplClone8);
var likeCount1 = 0;
var likeCount2 = 0;
var likeCount3 = 0;
var likes1 = document.getElementById("likes1");
likes1.innerText = likeCount1;
var likes2 = document.getElementById("likes2");
likes2.innerText = likeCount2;
var likes3 = document.getElementById("likes3");
likes3.innerText = likeCount2;

function likeUp1() {
    likeCount1 ++;
    likes1.innerText = likeCount1;
}

function likeUp2() {
    likeCount2 ++;
    likes2.innerText = likeCount2;
}

function likeUp3() {
    likeCount3 ++;
    likes3.innerText = likeCount3;
}
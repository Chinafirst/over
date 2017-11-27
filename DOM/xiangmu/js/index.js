window.onload = function() {
	var oimg = document.getElementsByClassName('img-lsb')[0];
	var oban = oimg.children;
	var ool = document.getElementsByClassName('ol-lsb')[0];
	var aol = ool.children;
	var inow = 0;
	for(var i = 0; i < aol.length; i++) {
		aol[i].index = i;
		aol[i].onclick = function() {
			inow = this.index;
			tab();
		}
	}

	function tab() {
		for(var k = 0; k < aol.length; k++) {
			aol[k].className = "ol-li-lsb";
			move(oban[k], {
				opacity: 0
			}, 2000);
		}
		aol[inow].className = "active-lsb ol-li-lsb";
		move(oban[inow], {
			opacity: 1
		}, 2000);
	}
	setInterval(next, 4000);

	function next() {
		inow++;
		if(inow > aol.length - 1) {
			inow = 0;
		}
		tab();
	}
	var oul = document.getElementsByClassName("ul-lsb")[0];
	var aul = oul.children;
	for(var i = 0; i < aul.length; i++) {
		aul[i].index = i;
		aul[i].onclick = function() {
			for(var k = 0; k < aul.length; k++) {
				aul[k].style.borderColor = "gray";
				aul[k].style.opacity = "0.6";
			}
			this.style.borderColor = "#DA8D5A";
			this.style.opacity = "1";
		};
	};
	var down = document.getElementsByClassName('down')[0];
	var up = document.getElementsByClassName('up')[0];
	var otxt = document.getElementsByClassName('text-lsb')[0];
	down.onclick = function() {
		move(otxt, {
			bottom: -170
		}, 500);
		up.style.display = "block";
		down.style.display = "none";
	}
	up.onclick = function() {
		move(otxt, {
			bottom: 0
		}, 500);
		down.style.display = "block";
		up.style.display = "none";
	}



var otb=document.getElementsByClassName('tibet-banner')[0]
var otbi=otb.children
var otu=document.getElementsByClassName('tibet-ul')[0]
var otul=otu.children
var zuo=document.getElementsByClassName('zuo')[0]
var you=document.getElementsByClassName('you')[0]
var now=0
for(var i = 0; i < otul.length; i++) {
		otul[i].index = i;
		otul[i].onclick = function() {
			now = this.index;
			taba();
		}
	}

	function taba() {
		for(var k = 0; k < otul.length; k++) {
			otul[k].className = "";
			move(otbi[k], {
				opacity: 0
			}, 2000);
		}
		otul[now].className = "active-tibet";
		move(otbi[now], {
			opacity: 1
		}, 2000);
	}

	function nexta() {
		now++;
		if(now > otul.length - 1) {
			now = 0;
		}
		taba();
	}
	function preva() {
		now--;
		if(now < 0) {
			now = otul.length-1;
		}
		taba();
	}
zuo.onclick=preva
you.onclick=nexta








}
var myapp = angular.module("myapp", ["ngRoute"])
myapp.controller("cont", ["$scope", function($a) {

}])
myapp.config(["$routeProvider", function($a) {
	$a.when("/one", {
		templateUrl: "Hotelsummary.html"
	}).when("/two", {
		templateUrl: "Hotelequipment.html"
	}).when("/three", {
		templateUrl: "Preferentialinformation.html"
	}).when("/four", {
		templateUrl: "Press challenge.html"
	}).when("/five", {
		templateUrl: "Tibetscenery.html"
	}).otherwise({
		redirectTo: "/one"
	})

}])



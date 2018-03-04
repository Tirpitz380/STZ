
var cmz=0
var yb=[0,0,0,0,0];
$('.duzhu li img').click(function() {
$('.duzhu li img').removeClass("change");
$(this).addClass("change");

   cmz=($(this).attr("id")).replace(/[^\d.]/g,'')
  console.log(cmz)

	
	return cmz
	
})
// 到这 是获取被选中的筹码是哪个！！！！！！！！！————————————————————————————————————————
//每个按钮的施工现场
//————————————————————对照表——————————————————————————
/*
 * t1单          t2双          t3大         t4小
 * 第二排1~6  h1-  h6
 * 中间16个 m1-   m16
 * 
 * 最下150  b1~b6
 * 通杀25  b7——数组名字         class=“ts25”
 */
//___________________________________________________
var t1=[0,0,0,0,0];
$("#t1").click(function(){
	goscv(t1);
})

var t2=[0,0,0,0,0];
$("#t2").click(function(){
	goscv(t2);
})


var t3=[0,0,0,0,0];
$("#t3").click(function(){
	goscv(t3);
})


var t4=[0,0,0,0,0];
$("#t4").click(function(){
	goscv(t4);
})




var h1=[0,0,0,0,0];
$("#h1").click(function(){
	goscv(h1);
})



var h2=[0,0,0,0,0];
$("#h2").click(function(){
	goscv(h2);
})


var h3=[0,0,0,0,0];
$("#h3").click(function(){
	goscv(h3);
})


var h4=[0,0,0,0,0];
$("#h4").click(function(){
	goscv(h4);
})



var h5=[0,0,0,0,0];
$("#h5").click(function(){
	goscv(h5);
})







var h6=[0,0,0,0,0];
$("#h6").click(function(){
	goscv(h6);
})







var m1=[0,0,0,0,0];
$("#m1").click(function(){
	goscv(m1);
})

var m2=[0,0,0,0,0];
$("#m2").click(function(){
	goscv(m2);
})



var m3=[0,0,0,0,0];
$("#m3").click(function(){
	goscv(m3);
})


var m4=[0,0,0,0,0];
$("#m4").click(function(){
	goscv(m4);
})




var m5=[0,0,0,0,0];
$("#m5").click(function(){
	goscv(m5);
})



var m6=[0,0,0,0,0];
$("#m6").click(function(){
	goscv(m6);
})


var m7=[0,0,0,0,0];
$("#m7").click(function(){
	goscv(m7);
})
var m8=[0,0,0,0,0];
$("#m8").click(function(){
	goscv(m8);
})
var m9=[0,0,0,0,0];
$("#m9").click(function(){
	goscv(m9);
})
var m10=[0,0,0,0,0];
$("#m10").click(function(){
	goscv(m10);
})
var m11=[0,0,0,0,0];
$("#m11").click(function(){
	goscv(m11);
})
var m12=[0,0,0,0,0];
$("#m12").click(function(){
	goscv(m12);
})
var m13=[0,0,0,0,0];
$("#m13").click(function(){
	goscv(m13);
})
var m14=[0,0,0,0,0];
$("#m14").click(function(){
	goscv(m14);
})
var m15=[0,0,0,0,0];
$("#m15").click(function(){
	goscv(m15);
})
var m16=[0,0,0,0,0];
$("#m16").click(function(){
	goscv(m16);
})





var b1=[0,0,0,0,0];
$("#b1").click(function(){
	goscv(b1);
})



var b2=[0,0,0,0,0];
$("#b2").click(function(){
	goscv(b2);
})



var b3=[0,0,0,0,0];
$("#b3").click(function(){
	goscv(b3);
})

var b4=[0,0,0,0,0];
$("#b4").click(function(){
	goscv(b4);
})

var b5=[0,0,0,0,0];
$("#b5").click(function(){
	goscv(b5);
})

var b6=[0,0,0,0,0];
$("#b6").click(function(){
	goscv(b6);
})







var b7=[0,0,0,0,0];
$(".tx25").click(function(){
	goscv(b7);
})









//封装一下点击添加方法————————————————————————————————————————————————————————————
var yxcmz=0
var goscv=function (a){
	if (cmz==10) {
		a[0]=10;
	}
  else	if (cmz==50) {
		a[1]=50;
	}
    else if (cmz==100) {
		a[2]=100;
	}
     else	if (cmz==200) {
	    a[3]=200;
	}
     else	if (cmz==500) {
		a[4]=500;;
	}

console.log(a)

	
}

/*
 ($(this).attr("id")).replace(/[^\d.]/g,'') 这个方法能直接获取这个标签的倍数。 
 * 
 * */
//————————————————————对照表——————————————————————————
/*
 * t1单          t2双          t3大         t4小
 * 第二排1~6  h1~h6
 * 中间16个 m1~m16
 */
//___________________________________________________




$('#audio').click(function() {
	$(this).toggleClass("musicshut");
	$(this).siblings().removeClass("musicshut");
})

$('.fourbox li:nth-child(1)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50').show()
		$('#img50').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10').show()
		$('#img10').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100').show()
		$('#img100').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200').show()
		$('#img200').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500').show()
		$('#img500').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})


$('.fourbox li:nth-child(2)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-2').show()
		$('#img50-2').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-2').show()
		$('#img10-2').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-2').show()
		$('#img100-2').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-2').show()
		$('#img200-2').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-2').show()
		$('#img500-2').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('.fourbox li:nth-child(3)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-3').show()
		$('#img50-3').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-3').show()
		$('#img10-3').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-3').show()
		$('#img100-3').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-3').show()
		$('#img200-3').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-3').show()
		$('#img500-3').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('.fourbox li:nth-child(4)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-4').show()
		$('#img50-4').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-4').show()
		$('#img10-4').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-4').show()
		$('#img100-4').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-4').show()
		$('#img200-4').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-4').show()
		$('#img500-4').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#dandu li:nth-child(1)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-5').show()
		$('#img50-5').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-5').show()
		$('#img10-5').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-5').show()
		$('#img100-5').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-5').show()
		$('#img200-5').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-5').show()
		$('#img500-5').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#dandu li:nth-child(2)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-6').show()
		$('#img50-6').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-6').show()
		$('#img10-6').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-6').show()
		$('#img100-6').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-6').show()
		$('#img200-6').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-6').show()
		$('#img500-6').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})


$('#dandu li:nth-child(3)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-7').show()
		$('#img50-7').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-7').show()
		$('#img10-7').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-7').show()
		$('#img100-7').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-7').show()
		$('#img200-7').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-7').show()
		$('#img500-7').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#dandu li:nth-child(4)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-8').show()
		$('#img50-8').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-8').show()
		$('#img10-8').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-8').show()
		$('#img100-8').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-8').show()
		$('#img200-8').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-8').show()
		$('#img500-8').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})


$('#dandu li:nth-child(5)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-9').show()
		$('#img50-9').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-9').show()
		$('#img10-9').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-9').show()
		$('#img100-9').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-9').show()
		$('#img200-9').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-9').show()
		$('#img500-9').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#dandu li:nth-child(6)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-10').show()
		$('#img50-10').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-10').show()
		$('#img10-10').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-10').show()
		$('#img100-10').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-10').show()
		$('#img200-10').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-10').show()
		$('#img500-10').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi1 li:nth-child(1)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-11').show()
		$('#img50-11').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-11').show()
		$('#img10-11').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-11').show()
		$('#img100-11').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-11').show()
		$('#img200-11').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-11').show()
		$('#img500-11').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi1 li:nth-child(2)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-12').show()
		$('#img50-12').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-12').show()
		$('#img10-12').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-12').show()
		$('#img100-12').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-12').show()
		$('#img200-12').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-12').show()
		$('#img500-12').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi1 li:nth-child(3)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-13').show()
		$('#img50-13').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-13').show()
		$('#img10-13').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-13').show()
		$('#img100-13').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-13').show()
		$('#img200-13').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-13').show()
		$('#img500-13').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi1 li:nth-child(4)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-14').show()
		$('#img50-14').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-14').show()
		$('#img10-14').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-14').show()
		$('#img100-14').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-14').show()
		$('#img200-14').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-14').show()
		$('#img500-14').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi1 li:nth-child(5)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-15').show()
		$('#img50-15').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-15').show()
		$('#img10-15').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-15').show()
		$('#img100-15').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-15').show()
		$('#img200-15').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-15').show()
		$('#img500-15').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi2 li:nth-child(1)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-16').show()
		$('#img50-16').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-16').show()
		$('#img10-16').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-16').show()
		$('#img100-16').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-16').show()
		$('#img200-16').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-16').show()
		$('#img500-16').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi2 li:nth-child(2)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-17').show()
		$('#img50-17').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-17').show()
		$('#img10-17').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-17').show()
		$('#img100-17').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-17').show()
		$('#img200-17').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-17').show()
		$('#img500-17').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi2 li:nth-child(3)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-18').show()
		$('#img50-18').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-18').show()
		$('#img10-18').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-18').show()
		$('#img100-18').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-18').show()
		$('#img200-18').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-18').show()
		$('#img500-18').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi2 li:nth-child(4)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-19').show()
		$('#img50-19').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-19').show()
		$('#img10-19').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-19').show()
		$('#img100-19').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-19').show()
		$('#img200-19').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-19').show()
		$('#img500-19').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi2 li:nth-child(5)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-20').show()
		$('#img50-20').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-20').show()
		$('#img10-20').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-20').show()
		$('#img100-20').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-20').show()
		$('#img200-20').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-20').show()
		$('#img500-20').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi2 li:nth-child(6)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-21').show()
		$('#img50-21').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-21').show()
		$('#img10-21').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-21').show()
		$('#img100-21').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-21').show()
		$('#img200-21').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-21').show()
		$('#img500-21').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi3 li:nth-child(1)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-22').show()
		$('#img50-22').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-22').show()
		$('#img10-22').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-22').show()
		$('#img100-22').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-22').show()
		$('#img200-22').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-22').show()
		$('#img500-22').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi3 li:nth-child(2)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-23').show()
		$('#img50-23').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-23').show()
		$('#img10-23').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-23').show()
		$('#img100-23').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-23').show()
		$('#img200-23').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-23').show()
		$('#img500-23').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi3 li:nth-child(3)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-24').show()
		$('#img50-24').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-24').show()
		$('#img10-24').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-24').show()
		$('#img100-24').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-24').show()
		$('#img200-24').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-24').show()
		$('#img500-24').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi3 li:nth-child(4)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-25').show()
		$('#img50-25').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-25').show()
		$('#img10-25').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-25').show()
		$('#img100-25').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-25').show()
		$('#img200-25').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-25').show()
		$('#img500-25').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi3 li:nth-child(5)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-26').show()
		$('#img50-26').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-26').show()
		$('#img10-26').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-26').show()
		$('#img100-26').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-26').show()
		$('#img200-26').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-26').show()
		$('#img500-26').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi4 li:nth-child(1)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-27').show()
		$('#img50-27').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-27').show()
		$('#img10-27').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-27').show()
		$('#img100-27').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-27').show()
		$('#img200-27').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-27').show()
		$('#img500-27').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi4 li:nth-child(2)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-28').show()
		$('#img50-28').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-28').show()
		$('#img10-28').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-28').show()
		$('#img100-28').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-28').show()
		$('#img200-28').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-28').show()
		$('#img500-28').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi4 li:nth-child(3)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-29').show()
		$('#img50-29').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-29').show()
		$('#img10-29').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-29').show()
		$('#img100-29').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-29').show()
		$('#img200-29').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-29').show()
		$('#img500-29').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi4 li:nth-child(4)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-30').show()
		$('#img50-30').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-30').show()
		$('#img10-30').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-30').show()
		$('#img100-30').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-30').show()
		$('#img200-30').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-30').show()
		$('#img500-30').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi4 li:nth-child(5)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-31').show()
		$('#img50-31').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-31').show()
		$('#img10-31').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-31').show()
		$('#img100-31').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-31').show()
		$('#img200-31').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-31').show()
		$('#img500-31').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi4 li:nth-child(6)').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-32').show()
		$('#img50-32').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-32').show()
		$('#img10-32').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-32').show()
		$('#img100-32').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-32').show()
		$('#img200-32').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-32').show()
		$('#img500-32').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

$('#hezhi5').click(function() {
	if($('.duzhu li:nth-child(2) img').hasClass('change')) {
		$('#img50-33').show()
		$('#img50-33').css({
			"left": x + "px",
			"top": y + "px"
		})
//		$('.duzhu li:nth-child(2) img').removeClass('change')
	} else if($('.duzhu li:nth-child(1) img').hasClass('change')) {
		$('#img10-33').show()
		$('#img10-33').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(1) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(3) img').hasClass('change')) {
		$('#img100-33').show()
		$('#img100-33').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(3) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(4) img').hasClass('change')) {
		$('#img200-33').show()
		$('#img200-33').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(4) img').removeClass('change')
	}
	
	else if($('.duzhu li:nth-child(5) img').hasClass('change')) {
		$('#img500-33').show()
		$('#img500-33').css({
			"left": x + "px",
			"top": y + "px"
		})	
//		$('.duzhu li:nth-child(5) img').removeClass('change')
	}
	
})

function show_coords(event) {
	x = event.clientX-5
	y = event.clientY-5
}

/*setTimeout(function () {
	$('.boxbig').css('display','none')
	$('.tran').css('display','block')
},3000)*/

var data={
    'option1':'repeating-linear-gradient(45deg, purple 20%, transparent 40%), repeating-linear-gradient(-45deg, purple 20%, white 40%);',
    'option2':'repeating-linear-gradient(45deg, red 5%, transparent 5% 10%, orange 10% 15%, transparent 15% 20%, red 20% 25%, transparent 25% 30%, green 30% 35%, transparent 35% 40%, blue 40% 45%, transparent 45% 50%, purple 50% 55%), repeating-linear-gradient(-45deg, red 5%, white 5% 10%, orange 10% 15%, white 15% 20%, yellow 20% 25%, white 25% 30%, green 30% 35%, white 35% 40%, blue 40% 45%, white 45% 50%, purple 50% 55%);',
    'option7':'repeating-conic-gradient(red 10deg, lightgreen 10deg 20deg, lightgray 20deg 30deg, lightblue 30deg 40deg,lightpink 40deg 50deg);',
    'option5':'repeating-radial-gradient(at 80% 30%, red 10% 20%, orange 20% 30%, yellow 30% 40%, lightgreen 40% 50%, lightblue 50% 60%, purple 60% 70%, violet 70% 80%);',
    'option3':'repeating-conic-gradient(red 10deg, purple 10deg 20deg, transparent 20deg 30deg, orange 30deg 39deg,pink 40deg 52deg), repeating-radial-gradient(transparent 10px, yellow 10px 20px, transparent 20px 30px, orange 30px 40px,transparent 40px 50px), repeating-conic-gradient(red 10deg, purple 10deg 20deg, white 20deg 30deg, orange 30deg 39deg,pink 40deg 52deg);',
    'option6':'repeating-linear-gradient(44deg, transparent 10px, lightblue 10px 20px, transparent 20px 30px, orange 30px 40px,transparent 40px 50px),repeating-linear-gradient(-44deg, white 10px, lightblue 10px 20px, white 20px 30px, orange 30px 40px,white 40px 50px);',
    'option4':'repeating-radial-gradient(ellipse farthest-corner at 10% 50%, lightpink 10% 20%, transparent 20% 30% ,pink 30% 40%, transparent 40% 50%, lightpink 50% 55%),repeating-radial-gradient(ellipse closest-corner at 10% 50%, transparent 10% 20%, lightpink 20% 30%, lightblue 30% 50%, gray 50% 53%);',
    'option8':'repeating-linear-gradient(45deg, red 5%, transparent 10%, pink 20%), repeating-linear-gradient(-45deg, purple 5%, white 10%, red 20%);',
    'optionow':'lightgreen;',
};

var inputarea=document.querySelectorAll('.backgroundinput');

let k=1;
for (const input of inputarea){
	backgroundvalue=data['option'+k];
	input.style='background:'+backgroundvalue;
	k += 1;
};

var picture=document.getElementById('picture');
function inputclick(e){
	updateradio(e);
	backgroundvalue=data[`${e.id}`];
	document.getElementById('picture').style='background:'+data[`${e.id}`];
	optionow='background:'+data[`${e.id}`];
	return data['optionow']=optionow;
};

function updateradio(e){
	return data[`${e.id}`]
};

window.setTimeout(function(){
	secondbutton.style.zIndex='1';
},7000);

var secondbutton=document.getElementById('secondbutton');
function copy(e){
    console.log('click');
    textarea=document.createElement("textarea");
    textarea.value='background:'+ data['optionow'];
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    textarea.remove();
	secondbutton.innerHTML='copied!';
	window.setTimeout(function(){
		secondbutton.innerHTML="copy";
	},1000);
};
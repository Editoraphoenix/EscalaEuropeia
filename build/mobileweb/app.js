Ti.UI.setBackgroundColor('#000');

var win1 = Ti.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var w1geral = Ti.UI.createView();

var btnMale = Ti.UI.createButton({
	backgroundImage: 'images/M_button.png',
	backgroundSelectedImage: 'images/M_button.png',
	height: 100,
	left: 700,
	width: 100,
	top: 20,
});

var btnFemale = Ti.UI.createButton({
	backgroundImage: 'images/F_button_pb.png',
	backgroundSelectedImage: 'images/F_button.png',
	height: 100,
	left: 600,
	width: 100,
	top: 20,
});

var lblIdade = Ti.UI.createLabel({text: 'Idade', top: 150});
var pckIdade = Ti.UI.createPicker({height: 120, width: 200, top: 170});
var dataIdade = [];
dataIdade = [
	Ti.UI.createPickerRow({title: '40 anos', id: 1}),
	Ti.UI.createPickerRow({title: '50 anos', id: 2}),
	Ti.UI.createPickerRow({title: '55 anos', id: 3}),
	Ti.UI.createPickerRow({title: '60 anos', id: 4}),
	Ti.UI.createPickerRow({title: '65 anos', id: 5}),
];
var i = 0;
while( i <= 4 ){
	pckIdade.add(dataIdade[i]);
	 i++;
}

var lblPA = Ti.UI.createLabel({text: 'Pressão Arterial Sistólica', top: 300});
var pckPA = Ti.UI.createPicker({height: 120, width: 200, top: 330});
var dataIdade = [];
dataPA = [
	Ti.UI.createPickerRow({title: '180 mmHg', id: 1}),
	Ti.UI.createPickerRow({title: '160 mmHg', id: 2}),
	Ti.UI.createPickerRow({title: '140 mmHg', id: 3}),
	Ti.UI.createPickerRow({title: '120 mmHg', id: 4}),
];
var i = 0;
while( i <= 3 ){
	pckPA.add(dataPA[i]);
	i++;
}

var lblColesterol = Ti.UI.createLabel({text: 'Colesterol', top: 470});
var pckColesterol = Ti.UI.createPicker({height: 120, width: 200, top: 500});
var dataColesterol = [];
dataColesterol = [
	Ti.UI.createPickerRow({title: '>300', id: 1}),
	Ti.UI.createPickerRow({title: '250 - 300', id: 2}),
	Ti.UI.createPickerRow({title: '200 - 250', id: 3}),
	Ti.UI.createPickerRow({title: '150 - 200', id: 4}),
	Ti.UI.createPickerRow({title: '<150', id: 5}),
];
var i = 0;
while( i <= 4 ){
	pckColesterol.add(dataColesterol[i]);
	 i++;
}

var stcFumante = Ti.UI.createSwitch({
	height: 50,
  	titleOn: 'Fumante: Sim',
  	titleOff: 'Fumante: Não',
  	top: 300,
  	left: 300,
  	value: true,
  	width: 200,
});

var btnOK = Ti.UI.createButton({
	title: 'OK',
	top: 630,
});

var sexo = 1;

btnFemale.addEventListener('click', function(){
	sexo = 1;
});

btnMale.addEventListener('click', function(){
	sexo = 2;
});

btnOK.addEventListener('click', function(){
	Ti.include('function.js');
});

w1geral.add(btnMale);
w1geral.add(btnFemale);
w1geral.add(lblIdade);
w1geral.add(pckIdade);
w1geral.add(lblPA);
w1geral.add(pckPA);
w1geral.add(lblColesterol);
w1geral.add(pckColesterol);
w1geral.add(stcFumante);
w1geral.add(btnOK);
win1.add(w1geral);
win1.open();
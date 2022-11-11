
module.exports = {
  scream : () => {
    console.log("go");
  },

  check : () => {
    	return ([
        calcProtein().toFixed(2),
        calcCarbo().toFixed(2),
        calcFatMacro().toFixed(2)
    ])
      // modifiedCalorie().toFixed(2) + 'kcal'
  }

};

function getGender(){
	var obj_length = document.getElementsByName("gener").length;
    for (var i=0; i<obj_length; i++) {
    	if (document.getElementsByName("gener")[i].checked == true) {
			return (document.getElementsByName("gener")[i].value);
    	}
	}
    return 'male';
}

function calculateBasicMetabolism(){
    if(getGender()=="male"){
        return 10*getWeight()+ 6.25*getHeight()+5
    }
    else{
        return 10*getWeight()+ 6.25*getHeight()-161
    }

}
function calcProtein(){
    return getWeight()*2
}

function calcFatCal(){
    return modifiedCalorie()*0.25
}

function calcFatMacro(){
    return calcFatCal()/9
}
function calcCarbo(){
    return getCarboCal()/4
}
function getCarboCal(){
    return (modifiedCalorie() - calcFatCal() - getProteinCalorie() )
}

function getProteinCalorie(){
    return calcProtein()*4
}

function modifiedCalorie(){
  const basicMet = calculateBasicMetabolism()
    const aim = getAim()

    if (aim == 'one') {
	  return (basicMet*0.8)
	} else if (aim == 'two') {
	 return basicMet*1
	}else if (aim == 'three') {
	return basicMet*1.2
	}

}

function getWeight(){
	var weight = document.js_wr.weight.value === '' ? 0 : document.js_wr.weight.value ;
    return Number(weight/2.2046)
}

function getAim(){
	var obj_length = document.getElementsByName("buttonGroup").length;

    for (var i=0; i<obj_length; i++) {
    	if (document.getElementsByName("buttonGroup")[i].checked == true) {
			return (document.getElementsByName("buttonGroup")[i].value);
    	}
	}
    return 'one';
}

function getHeight(){
	var feet = document.js_wr.feet.value  === '' ? 0 : document.js_wr.feet.value ;
  var inch = document.js_wr.inch.value === '' ? 0 : document.js_wr.inch.value ;
  var height = feet*30.48 + inch*2.54;
	return Number(height)
}

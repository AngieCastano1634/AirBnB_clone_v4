// Script that is executed only when DOM is loaded with jQuery

function NotOverflow() {
	let leng = 0;
	let maximum = 13;
	H_4_to_add = []
	let i = 0;
	for (i = 0; leng < maximum && H_4[i]; i++){
		leng += H_4[i].length;
		H_4_to_add.push(H_4[i]);
	}
	let = remaining = maximum - leng;    
	if (H_4[i]){
		H_4_to_add.push(H_4[i].slice(0, remaining));
	}
	H_4_to_add.push("...");
  document.getElementById("amenities_h4").innerHTML = H_4_to_add;
}
function CheckedList(){
	HtmlInput = document.getElementsByTagName("INPUT");
    	$(".amenities h4").empty();
	H_4 = []
	for(var item of HtmlInput){
		let item1 = $("<li></li>").text(item.dataset.name);
		if(item.checked){
			H_4.push(item.dataset.name)
		}
	}
	NotOverflow()	
}

const apiStatus = $('DIV#api_status');
$.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
    if (data.status === 'OK') {
      apiStatus.addClass('available');
    } else {
      apiStatus.removeClass('available');
    }
  });
  
  const apiStatus = $('DIV#api_status');
  $.ajax('http://127.0.0.1:5001/api/v1/status/').done(function (data) {
	  if (data.status === 'OK') {
		apiStatus.addClass('available');
	  } else {
		apiStatus.removeClass('available');
	  }
	});
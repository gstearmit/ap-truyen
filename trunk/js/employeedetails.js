localStorage['serviceURL'] =  "http://service.topprinter.org/manastoryrest";  
var serviceURL = localStorage['serviceURL'];
//var scroll = new iScroll('wrapper', { vScrollbar: true, hScrollbar:false, hScroll: false });
var img = "http://service.topprinter.org/images/";
var id = getUrlVars()["id"];

$(window).load(function() {
	setTimeout(getEmployee, 100);
});

//$(document).ajaxError(function(event, request, settings) {
//	$('#busy').hide();
//	alert("Error accessing the server");
//});

function getEmployee() {

	$('#busy').show();
	$.getJSON(serviceURL + '/'+id, function(data) {
		$('#busy').hide();
	 $.ajax({
	        url : serviceURL + '/'+id,
	        dataType : 'json',
	        success : function(data){
	        	var array = data.data;
	        	if (array.length == 0) {
				document.write("<h1 style='width:100%; height:100%; padding-top:250px; text-align:center;background:#5bc2ce; font-family:sans-serif;font-size: 30px; color: #fff; font-weight:normal;'>Data is being updated. <a href='index.html'>Back</a></h1>");
					}else{
	          $('#busy').hide();
			 $('#employeeList li').remove();
	            $.each(array, function(i , employee){
	                 //alert(obj);					
	              //alert(JSON.stringify(employee));					
				$('#employeeDetails ').append('<li class="li-detail">' +
				'<img class="img-detail" src="' +img + employee.img + '" /></li>' ); 
										
	            });
				}
	        },
	        error : function(XMLHttpRequest,textStatus, errorThrown) {   
	            //$.mobile.loading( 'hide',{text:"Fetching blogs.."});  
	            alert("Something wrong happended on the server. Try again..");  
	                  
	        }
	    })
	});
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
   }
    return vars;
}

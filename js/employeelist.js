localStorage['serviceURL'] =  "http://service.topprinter.org/manastoryrest"; 
var serviceURL = localStorage['serviceURL'];
var img = "http://service.topprinter.org/images/";
//var scroll = new iScroll('wrapper', { vScrollbar: true, hScrollbar:false, hScroll: false });

var employees;

$(window).load(function() {
	setTimeout(getEmployeeList, 100);
});

$(document).ajaxError(function(event, request, settings) {
	$('#busy').hide();
	alert("Not connected internet. Try again..");
});

function getEmployeeList()
{
	$('#busy').show();		
	 $.ajax({
	        url : serviceURL,
	        dataType : 'json',
	        success : function(data){
	        	var array = data.data;	        	
	          $('#busy').hide();
			 $('#employeeList li').remove();
	            $.each(array, function(i , employee){
	                 //alert(obj);
	                //alert(JSON.stringify(employee));
					$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
				'<img src="' +img + employee.imgkey + '" class="list-img"/></a>' +
				'<p class="line1">' + employee.descriptionkey + '</p>' +
				'<p class="line2">' + employee.title + '</p></li>' );
	            });
	        },
	       // error : function(XMLHttpRequest,textStatus, errorThrown) {   
	            //$.mobile.loading( 'hide',{text:"Fetching blogs.."});  
	          //  alert("Something wrong happended on the server. Try again..");  
	                 
	       // }
	    })
}

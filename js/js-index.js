// JavaScript Document

$(document).ready(function () {
    // Handler for .ready() called.
	
    $('html, body').animate({
        scrollTop: $('#worksection').offset().top
    }, 'slow');
	var loadbar=document.getElementById("loadbar");
	loadbar.style.width="100%";
	setTimeout(function () { 
    var loadbar=document.getElementById("loadbar");
    loadbar.style.display="none";
	loadbar.style.visibility="0";
      }, 600); 
    
	
});
	$(function() {
  $('a[href*=#intro1]').on('click', function(e) {
    e.preventDefault();
   
	  var ca=document.getElementById("intro1");
	  ca.style.opacity="1";
	  ca.style.marginTop="0";
	   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); 
		});
	});

$(function() {
 $('a[href*=#worksection]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); 
	 var ca=document.getElementById("intro1");
	 ca.style.opacity="0";
	 ca.style.marginTop="-200%";
  });	
});
$(function() {
 $('a[href*=#workrow2]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); 
	 var ca=document.getElementById("intro1");
	 ca.style.opacity="0";
	 ca.style.marginTop="-200%";
  });	
});
$(function() {
 $('a[href*=#coins]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); 
	 var ca=document.getElementById("intro1");
	 ca.style.opacity="0";
	 ca.style.marginTop="-200%";
	
  });	
});
$(function() {
 $('a[href*=#poster]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); 
	 var ca=document.getElementById("intro1");
	 ca.style.opacity="0";
	 ca.style.marginTop="-200%";
	
  });	
});
$(function() {
 $('a[href*=#wholetop]').on('click', function(e) {
    e.preventDefault();
	
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); 
	 var ca=document.getElementById("intro1");
	 ca.style.opacity="0";
	 ca.style.marginTop="-200%";
	 var nv=document.getElementById("header1");
          nv.style.visibility="1";
		  nv.style.opacity="1";
  });	
});
$(function() {
 $('a[href*=#popup0]').on('click', function(e) {
    e.preventDefault();
  
	 var ca=document.getElementById("popup");
	 ca.style.display="block";
	 var ca1=document.getElementById("popcon");
	 ca1.style.display="flex";
  });	
});
$(function() {
 $('a[href*=#popup1]').on('click', function(e) {
    e.preventDefault();
  
	 var ca=document.getElementById("popup");
	 ca.style.display="block";
	 var ca1=document.getElementById("popcon1");
	 ca1.style.display="flex";
	 
  });	
});
$(function() {
 $('a[href*=#popup2]').on('click', function(e) {
    e.preventDefault();
  
	 var ca=document.getElementById("popup");
	 ca.style.display="block";
	 var ca1=document.getElementById("popcon2");
	 ca1.style.display="flex";

  });	
});
$(function() {
 $('a[href*=#closepop]').on('click', function(e) {
    e.preventDefault();
  
	 var ca=document.getElementById("popup");
	 ca.style.display="none";
	 var pic1=document.getElementById("popcon");
	 pic1.style.display="none";
	 var pic2=document.getElementById("popcon1");
	 pic2.style.display="none";
	 var pic3=document.getElementById("popcon2");
	 pic3.style.display="none";

	
  });	
});
$(function() {
 $('a[href*=#aboutcoin]').on('click', function(e) {
    e.preventDefault();
 
	 var ca=document.getElementById("aboutcoin");
	 ca.style.display="block";
	 
	
  });	
});
$(function() {
 $('a[href*=#aboutpost]').on('click', function(e) {
    e.preventDefault();
  
	 var ca=document.getElementById("aboutpost");
	 ca.style.display="block";
	 
	
  });	
});
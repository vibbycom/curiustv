window.onload = function(){ 
	$(document).ready(function () {
		//Beginning of HubSpot JS
		if ($('#overlayShade').length == 0) $('body').prepend('<div id="overlayShade" style="display:none;"></div>');
		$('#bc-main-header-categories').after('<div id="HubSpot_rss">Subscribe</div>');
		$("div#hubSpot_Subscribe, div#HubSpot_rss, i#closeOverlay").click(function () {
			checkIfOpen();					
		});
		$("div#overlayShade").click(function () {
			$("div#HubSpot_Overlay").toggle();
			$("div#overlayShade").toggle();									
		});	
		function checkIfOpen(){
			if($("div#HubSpot_Overlay").css("display") === "none"){
				$("div#HubSpot_Overlay").slideToggle('slow');
				$("div#overlayShade").toggle();
			}else{
				$("div#HubSpot_Overlay").toggle();
				$("div#overlayShade").toggle();
			}
		}
});
}
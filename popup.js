function verifyInputsNotEmpty() {
	var result = true;
	return result
}
function handleSubmitClicked() {
	if ($('#newDate').val() != "") {
		if ($('#fixVersion').val() != ""){
			var date = $('#newDate').val()
			var fixVersion = $('#fixVersion').val();
			var AD = $('#AD').is(':checked');
			var ADMIN = $('#ADMIN').is(':checked');
			var AR = $('#AR').is(':checked');
			var SKY = $('#SKY').is(':checked');
			var CERT = $('#CERT').is(':checked');
			var DI = $('#DI').is(':checked');
			var DR = $('#DR').is(':checked');
			var DS = $('#DS').is(':checked');
			var FAP = $('#FAP').is(':checked');
			var FT = $('#FT').is(':checked');
			var FUI = $('#FUI').is(':checked');
			var IAPI = $('#IAPI').is(':checked');
			var PRES = $('#PRES').is(':checked');
			var SIXTEEN = $('#SIXTEEN').is(':checked');
			var SSC = $('#SSC').is(':checked');
			var SHEET = $('#SHEET').is(':checked');
			var TRA = $('#TRA').is(':checked');
			var XBRLSEC = $('#XBRLSEC').is(':checked');
			var XL = $('#XL').is(':checked');
			var XS = $('#XS').is(':checked');
			var XW = $('#XW').is(':checked');
			var HC = $('#HC').is(':checked');
			var LOG = $('#LOG').is(':checked');
			var BOOKS = $('#BOOKS').is(':checked');
			var BUS = $('#BUS').is(':checked');
			var FUN = $('#FUN').is(':checked');
			var INF = $('#INF').is(':checked');
			var RR = $('#RR').is(':checked');
			var FETT = $('#FETT').is(':checked');
			var description = "Maintenance Release";
			var year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
			var newMonth = date.charAt(5) + date.charAt(6);
			var day = date.charAt(8) + date.charAt(9);
			var month = "";

			if (newMonth == 01){
				month = "JAN"
			}
			else if (newMonth == 02){
				month = "FEB"
			}
			else if (newMonth == 03){
				month = "MAR"
			}
			else if (newMonth == 04){
				month = "APR"
			}
			else if (newMonth == 05){
				month = "MAY"
			}
			else if (newMonth == 06){
				month = "JUN"
			}
			else if (newMonth == 07){
				month = "JUL"
			}
			else if (newMonth == 08){
				month = "AUG"
			}
			else if (newMonth == 09){
				month = "SEP"
			}
			else if (newMonth == 10){
				month = "OCT"
			}
			else if (newMonth == 11){
				month = "NOV"
			}
			else if (newMonth == 12){
				month = "DEC"
			}
			if(!$('#maintenance').is(':checked')) description = $('#description').val();
			chrome.extension.getBackgroundPage().mgr.updateVariables(month, day, year, fixVersion, AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR, FETT, description);
		}
		else alert("Please choose a version");
	}
	else alert("Please enter a date");
}
function handleSubmit2Clicked() {
	if ($('#fixVersion2').val() != "") {
		var fixVersion2 = $('#fixVersion2').val();
		var AD = $('#AD').is(':checked');
		var ADMIN = $('#ADMIN').is(':checked');
		var AR = $('#AR').is(':checked');
		var SKY = $('#SKY').is(':checked');
		var CERT = $('#CERT').is(':checked');
		var DI = $('#DI').is(':checked');
		var DR = $('#DR').is(':checked');
		var DS = $('#DS').is(':checked');
		var FAP = $('#FAP').is(':checked');
		var FT = $('#FT').is(':checked');
		var FUI = $('#FUI').is(':checked');
		var IAPI = $('#IAPI').is(':checked');
		var PRES = $('#PRES').is(':checked');
		var SIXTEEN = $('#SIXTEEN').is(':checked');
		var SSC = $('#SSC').is(':checked');
		var SHEET = $('#SHEET').is(':checked');
		var TRA = $('#TRA').is(':checked');
		var XBRLSEC = $('#XBRLSEC').is(':checked');
		var XL = $('#XL').is(':checked');
		var XS = $('#XS').is(':checked');
		var XW = $('#XW').is(':checked');
		var HC = $('#HC').is(':checked');
		var LOG = $('#LOG').is(':checked');
		var BOOKS = $('#BOOKS').is(':checked');
		var BUS = $('#BUS').is(':checked');
		var FUN = $('#FUN').is(':checked');
		var INF = $('#INF').is(':checked');
		var RR = $('#RR').is(':checked');
		var FETT = $('#FETT').is(':checked');
		chrome.extension.getBackgroundPage().mgr.updateVariables2(fixVersion2, AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR, FETT);	
	}
	else alert("Please choose a version");
}
function handleSubmit3Clicked() {
	if ($('#date3').val() != "") {
		if ($('#fixVersion3').val() != ""){
			var fixVersion3 = $('#fixVersion3').val();
			var date = $('#date3').val();
			var AD = $('#AD').is(':checked');
			var ADMIN = $('#ADMIN').is(':checked');
			var AR = $('#AR').is(':checked');
			var SKY = $('#SKY').is(':checked');
			var CERT = $('#CERT').is(':checked');
			var DI = $('#DI').is(':checked');
			var DR = $('#DR').is(':checked');
			var DS = $('#DS').is(':checked');
			var FAP = $('#FAP').is(':checked');
			var FT = $('#FT').is(':checked');
			var FUI = $('#FUI').is(':checked');
			var IAPI = $('#IAPI').is(':checked');
			var PRES = $('#PRES').is(':checked');
			var SIXTEEN = $('#SIXTEEN').is(':checked');
			var SSC = $('#SSC').is(':checked');
			var SHEET = $('#SHEET').is(':checked');
			var TRA = $('#TRA').is(':checked');
			var XBRLSEC = $('#XBRLSEC').is(':checked');
			var XL = $('#XL').is(':checked');
			var XS = $('#XS').is(':checked');
			var XW = $('#XW').is(':checked');
			var HC = $('#HC').is(':checked');
			var LOG = $('#LOG').is(':checked');
			var BOOKS = $('#BOOKS').is(':checked');
			var BUS = $('#BUS').is(':checked');
			var FUN = $('#FUN').is(':checked');
			var INF = $('#INF').is(':checked');
			var RR = $('#RR').is(':checked');
			var FETT = $('#FETT').is(':checked');
			var year = date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
			var newMonth = date.charAt(5) + date.charAt(6);
			var day = date.charAt(8) + date.charAt(9);
			var month = "";
			if (newMonth == 01){
				month = "JAN"
			}
			else if (newMonth == 02){
				month = "FEB"
			}
			else if (newMonth == 03){
				month = "MAR"
			}
			else if (newMonth == 04){
				month = "APR"
			}
			else if (newMonth == 05){
				month = "MAY"
			}
			else if (newMonth == 06){
				month = "JUN"
			}
			else if (newMonth == 07){
				month = "JUL"
			}
			else if (newMonth == 08){
				month = "AUG"
			}
			else if (newMonth == 09){
				month = "SEP"
			}
			else if (newMonth == 10){
				month = "OCT"
			}
			else if (newMonth == 11){
				month = "NOV"
			}
			else if (newMonth == 12){
				month = "DEC"
			}
			chrome.extension.getBackgroundPage().mgr.updateVariables3(fixVersion3, year, month, day, AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR, FETT);
		}
		else alert("Please choose a version");
	}
	else alert("Please enter a date");
}
function deselect(){
	var maitenanceS = $('#maintenance').is(':checked');
	$('input[type="checkbox"]').attr('checked', false);
	$('#maintenance').attr('checked', maitenanceS);
}
function select(){
	var maitenanceS = $('#maintenance').is(':checked');
	$('input[type="checkbox"]').attr('checked', true);
	$('#maintenance').attr('checked', maitenanceS);
}
function maintenanceSelect(){
	if($('#maintenance').is(':checked')) {
		console.log("checked");
		$('#description').attr('disabled',true);
		$('#description').attr('class', 'hidden');
		$('#dLabel').attr('class', 'hidden');
	}
	else {
		console.log("not checked");
		$('#description').attr('disabled',false);
		$('#description').attr('class', 'shown');
		$('#dLabel').attr('class', 'shown');
	}
}
function handleHideProjClicked(){
	$('#tAD').attr('class', 'hidden');
	$('#tADMIN').attr('class', 'hidden');
	$('#tAR').attr('class', 'hidden');
	$('#tSKY').attr('class', 'hidden');
	$('#tCERT').attr('class', 'hidden');
	$('#tDI').attr('class', 'hidden');
	$('#tDR').attr('class', 'hidden');
	$('#tDS').attr('class', 'hidden');
	$('#tFAP').attr('class', 'hidden');
	$('#tFT').attr('class', 'hidden');
	$('#tFUI').attr('class', 'hidden');
	$('#tIAPI').attr('class', 'hidden');
	$('#tPRES').attr('class', 'hidden');
	$('#tSIXTEEN').attr('class', 'hidden');
	$('#tSSC').attr('class', 'hidden');
	$('#tSHEET').attr('class', 'hidden');
	$('#tTRA').attr('class', 'hidden');
	$('#tXBRLSEC').attr('class', 'hidden');
	$('#tXL').attr('class', 'hidden');
	$('#tXS').attr('class', 'hidden');
	$('#tXW').attr('class', 'hidden');
	$('#tHC').attr('class', 'hidden');
	$('#tLOG').attr('class', 'hidden');
	$('#tBOOKS').attr('class', 'hidden');
	$('#tBUS').attr('class', 'hidden');
	$('#tFUN').attr('class', 'hidden');
	$('#tINF').attr('class', 'hidden');
	$('#tRR').attr('class', 'hidden');
	$('#tFETT').attr('class', 'hidden');
	$('#select').attr('class', 'hidden');
	$('#deselect').attr('class', 'hidden');
}
function handleShowProjClicked(){
	$('#tAD').attr('class', 'shown');
	$('#tADMIN').attr('class', 'shown');
	$('#tAR').attr('class', 'shown');
	$('#tSKY').attr('class', 'shown');
	$('#tCERT').attr('class', 'shown');
	$('#tDI').attr('class', 'shown');
	$('#tDR').attr('class', 'shown');
	$('#tDS').attr('class', 'shown');
	$('#tFAP').attr('class', 'shown');
	$('#tFT').attr('class', 'shown');
	$('#tFUI').attr('class', 'shown');
	$('#tIAPI').attr('class', 'shown');
	$('#tPRES').attr('class', 'shown');
	$('#tSIXTEEN').attr('class', 'shown');
	$('#tSSC').attr('class', 'shown');
	$('#tSHEET').attr('class', 'shown');
	$('#tTRA').attr('class', 'shown');
	$('#tXBRLSEC').attr('class', 'shown');
	$('#tXL').attr('class', 'shown');
	$('#tXS').attr('class', 'shown');
	$('#tXW').attr('class', 'shown');
	$('#tHC').attr('class', 'shown');
	$('#tLOG').attr('class', 'shown');
	$('#tBOOKS').attr('class', 'shown');
	$('#tBUS').attr('class', 'shown');
	$('#tFUN').attr('class', 'shown');
	$('#tINF').attr('class', 'shown');
	$('#tRR').attr('class', 'shown');
	$('#tFETT').attr('class', 'shown');
	$('#select').attr('class', 'shown');
	$('#deselect').attr('class', 'shown');
}
$(document).ready(function() {
	$('#submit').click(handleSubmitClicked);
	$('#deselect').click(deselect);
	$('#select').click(select);
	$('#maintenance').click(maintenanceSelect);
	$('#submit2').click(handleSubmit2Clicked);
	$('#submit3').click(handleSubmit3Clicked);
	$('#hideProj').click(handleHideProjClicked);
	$('#showProj').click(handleShowProjClicked);
});
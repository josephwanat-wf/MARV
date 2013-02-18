var MessageHandler = function () {
	var self = this;
	this.fixVersion = null;
	this.date = null;
	self.description;
	self.count = 0;
	self.none=function(){};


	self.sendErrorNotification = function(params) {
		params['error'] = true;
		chrome.extension.sendMessage(params);
	};
	self.writeEverything = function(response) {
		self.fixVersion = response.fixVersion;
		self.date = (response.day + "/" + response.month + "/" + response.year);
		setTimeout(self.butSeriouslyWriteEverything, 500);
		self.description = response.description;
	}
	self.butSeriouslyWriteEverything = function(){
		$('input[type="text"][name="name"][value=""]').val("Version " + self.fixVersion);
		$('input[type="text"][name="description"]').val(self.description);
		$("#project-config-version-release-date-field").val(self.date);
		$('input[class="aui-button"][value="Add"]').trigger('click');
		setTimeout(self.verifyWritten, 500);

	}
	self.verifyWritten = function() {
		//verify that it has been written (If not found then send alert)
		var found = 0;
		$('.project-config-version-name').each(function(){
			if (this.textContent == ("Version " + self.fixVersion)) {
				found = 1;
				chrome.extension.sendMessage({});
			}
					
		});
		if (found == 0){
			if (self.count>0) {
				var alertMsg = "Version may not have been written to ";
				alertMsg = alertMsg + window.location;
				window.alert(alertMsg);
				chrome.extension.sendMessage({});
			}
			else {
				self.count++;
				setTimeout(self.butSeriouslyWriteEverything, 500);
			}
				
				
		}
	}
	self.releaseEverything = function(response){
		self.fixVersion = response.fixVersion;
		setTimeout(self.butSeriouslyReleaseEverything, 500);
	}
	self.butSeriouslyReleaseEverything = function(){
		$('.project-config-version-name').each(function(){
			if (this.textContent == ("Version " + self.fixVersion)) {
				var dataID = $(this).parent();
				dataID = $(dataID).get([0]);
				dataID = $(dataID).attr('id');
				dataID = dataID.substring(0,dataID.length - 3);
				dataID = dataID + "operations-trigger_drop";
				var cell = this.nextSibling.nextSibling.nextSibling;
				//var throbber = $(cell).find(".project-config-icon project-config-icon-manage");
				var throbber = cell.firstChild.firstChild;
				throbber.click();
				var btnRelease = $(".aui-list-section.aui-first.aui-last");
				for (var i = 0; i<btnRelease.length;i++){
					var btnI = $(btnRelease).get([i]);
					btnI = $(btnI).parent().parent();
					if ($(btnI).attr('id') == dataID){
						btnRelease = btnRelease.get([i]).firstChild.firstChild;
						btnRelease.click();
					}
				}
				setTimeout(self.clickSubmit, 500);
			}
		});
		setTimeout(self.verifyReleased, 1000);
		//chrome.extension.sendMessage({});
	}
	self.verifyReleased = function() {
		//verify that it has been written (If not found then send alert)
		var found = 0;
		$('.project-config-version-name').each(function(){
			if (this.textContent == ("Version " + self.fixVersion)) {
				if ($(this).parent().attr('class').indexOf("released") > 0) {
					found = 1;
					chrome.extension.sendMessage({});
				}				
			}
		});
		if (found == 0){
			if (self.count>0) {
				var alertMsg = "Version may not have been released on ";
				alertMsg = alertMsg + window.location;
				window.alert(alertMsg);
				chrome.extension.sendMessage({});
			}
			else {
				self.count++;
				setTimeout(self.butSeriouslyReleaseEverything, 500);
			}	
		}
	}
	
	self.clickSubmit = function(){
		var sub = $(document).find("#project-config-version-release-form-submit");
		sub.click();
	}
	self.changeEverything = function(response){
		self.fixVersion = response.fixVersion;
		self.date = response.date;
		setTimeout(self.butSeriouslyChangeEverything, 500);
	}
	self.butSeriouslyChangeEverything = function(){
		$('.project-config-version-name').each(function(){
			if (this.textContent == ("Version " + self.fixVersion)) {
				$(this).find(".aui-restfultable-editable").click();
			}
		});
		$('input[class ="text short-field"][name = "userReleaseDate"]').each(function(){
			if ($(this).val() != "") $(this).val(self.date);
		});
		$('input[class="aui-button"][value="Update"]').trigger('click');
		setTimeout(self.verifyChanged, 500);
	}
	self.verifyChanged = function() {
		//verify that it has been written (If not found then send alert)
		var found = 0;
		$('.project-config-version-release-date').each(function(){
			
			var formattedDate = self.date.substring(0,7);
			formattedDate = formattedDate + self.date.substring(9,11);
			formattedDate = formattedDate.toLowerCase();

			var lowerCase = ($(this).text()).toLowerCase();
			if (lowerCase.indexOf(formattedDate) >= 0){
				found = 1;
				chrome.extension.sendMessage({});	
			}	
		});
		if (found == 0){
			if (self.count>0) {
				var alertMsg = "Date may not have been changed on ";
				alertMsg = alertMsg + window.location;
				window.alert(alertMsg);
				chrome.extension.sendMessage({});
			}
			else {
				self.count++;
				setTimeout(self.butSeriouslyChangeEverything, 500);
			}	
		}
	}
};

var msg_handler = new MessageHandler();

chrome.extension.sendMessage({}, function(response) {
	//try {
		msg_handler[response.action](response);
	//}
	/*catch(err) {
		msg_handler.sendErrorNotification({
			'error_type': 'Javascript Error', 'message': err.message});
	}*/
	
});
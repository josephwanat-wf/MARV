var MessageHandler = function () {
	var self = this;
	this.fixVersion = null;
	this.date = null;
	self.description;
	self.none=function(){};


	self.sendErrorNotification = function(params) {
		params['error'] = true;
		chrome.extension.sendMessage(params);
	};
	self.writeEverything = function(response) {
		console.log('writing everything');
		self.fixVersion = response.fixVersion;
		self.date = (response.day + "/" + response.month + "/" + response.year);
		setTimeout(self.butSeriouslyWriteEverything, 500);
		self.description = response.description;
	}
	self.butSeriouslyWriteEverything = function(){
		console.log('writing everything for realz');
		$('input[type="text"][name="name"][value=""]').val("Version " + fixVersion);
		$('input[type="text"][name="description"]').val(self.description);
		$("#project-config-version-release-date-field").val(self.date);
		$('input[class="aui-button"][value="Add"]').trigger('click');
		chrome.extension.sendMessage({});
	}
	self.releaseEverything = function(response){
		self.fixVersion = response.fixVersion;
		setTimeout(self.butSeriouslyReleaseEverything, 500);
	}
	self.butSeriouslyReleaseEverything = function(){
		//id should be something like "version-15963-row"
		$('.project-config-version-name').each(function(){
			if (this.text = ("Version " + self.fixVersion)) {
				this.parent.find('[a."aui-list-item-link project-config-operations-release"]').trigger('click');
			}
		});
		chrome.extension.sendMessage({});
	}
	self.changeEverything = function(response){
		self.fixVersion = response.fixVersion;
		self.date = response.date;
		setTimeout(self.butSeriouslyChangeEverything, 500);
	}
	self.butSeriouslyChangeEverything = function(){
		console.log("seriouslyChanging");
		$('.project-config-version-name').each(function(){
			if (this.textContent == ("Version " + self.fixVersion)) {
				$(this).find(".aui-restfultable-editable").click();
			}
		});
		$('input[class ="text short-field"][name = "userReleaseDate"]').each(function(){
			if ($(this).val() != "") $(this).val(self.date);
		});
		$('input[class="aui-button"][value="Update"]').trigger('click');
		chrome.extension.sendMessage({});
		
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
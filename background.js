var VersionChanger = function () {
	var self = this;
	this.month = null;
	this.day = null;
	this.year = null;
	this.fixVersion = null;
	this.next_page_action = 'none';
	this.next_message_handler = 'none';
	this.next_URL = "";
	this.purpose = 0;
	self.current = 0;
	self.length = 0;
	self.checked = new Array();
	self.description = "Maintenance Release";
	self.date = null;
	this.messageListener = function(request, sender, sendResponse) {
		if (request.error) {
			this.handleErrorMessage(request)
		} else {
			sendResponse(this[this.next_message_handler](request));
		}
	};	
	this.handleErrorMessage = function(request) {
		this.showNotification(request.error_type, request.message)
	};	
	this.showNotification  = function (title, body) {
		var notification = webkitNotifications.createNotification(
				'/images/icon_048.png',  // icon url - can be relative
				title,  // notification title
				body  // notification body text
		);
		notification.show();
	};	
	this.updateVariables = function(month, day, year, fixVersion, AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR, description) {
		console.log(fixVersion);
		this.month = month;
		this.day = day;
		this.year = year;
		this.fixVersion = fixVersion;
		this.purpose = 1;
		self.description = description;
		self.updateProjects(AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR);
		self.nextProject();

	};	
	self.updateVariables2 = function(fixVersion, AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR){
		this.fixVersion = fixVersion;
		self.purpose = 2;
		self.updateProjects(AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR);
		self.nextProject();
	};
	self.updateVariables3 = function(fixVersion, year, month, day, AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR){
		this.fixVersion = fixVersion;
		self.purpose = 3;
		self.date = day + '/' + month + '/' + year;
		self.updateProjects(AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR);
		self.nextProject();
	};
	//Used for testing
	/*
	self.nextProject = function(){
		if (self.next_URL == 'none' && self.QAL == true){
			self.next_URL='https://jira.webfilings.com/plugins/servlet/project-config/QAL/versions';
			self.query();
		}
		else if (self.next_URL == 'https://jira.webfilings.com/plugins/servlet/project-config/QAL/versions'){
			this.next_message_handler = 'none';
			self.next_URL = 'none';
		}
		else {
			this.next_message_handler = 'none';
			self.next_URL = 'none';
		}
	}
	*/
	self.nextProject = function(){

		if (self.current < self.length){
			self.next_URL = "https://jira.webfilings.com/plugins/servlet/project-config/" + self.checked[self.current] + "/versions";
			self.current++;
			self.query();
		}
		else {
			self.next_URL = "";
			self.current = 0;
			self.length = 0;
			self.checked = [];
			self.next_message_handler = 'none';
		}
	};
	
	self.query = function(){	
		chrome.tabs.query({'url': self.next_URL}, this.navigateToJira);
		if (this.purpose == 1) this.next_message_handler = 'writeEverything';
		else if (this.purpose == 2) this.next_message_handler = 'releaseEverything';
		else if (this.purpose == 3) this.next_message_handler = 'changeEverything';
	}
	this.navigateToJira = function(tabs) {
		console.log('navigating to jira');
		var url = self.next_URL;
		if (tabs.length) {
			chrome.tabs.update(
					tabs[0].id,
					{'url': url}
			)
		} 
		else chrome.tabs.create({'url': url})
	};
	this.writeEverything = function(){
		console.log('writingEverything');
		this.next_message_handler = 'nextProject';
		return {'action' : 'writeEverything', 'fixVersion': this.fixVersion, 'day': this.day, 'month': this.month, 'year': this.year, 'description':self.description}
	}
	this.releaseEverything = function(){
		console.log('changingEverything');
		this.next_message_handler = 'nextProject';
		return {'action' : 'releaseEverything', 'fixVersion': this.fixVersion}
	}
	this.changeEverything = function(){
		console.log('changingEverything');
		this.next_message_handler = 'nextProject';
		return {'action' : 'changeEverything', 'fixVersion': this.fixVersion, 'date': self.date}
	}
	this.none = function(request, sender, sendResponse) {
		return {'action': 'none'}
	};
	self.updateProjects = function(AD, ADMIN, AR, SKY, CERT, DI, DR, DS, FAP, FT, FUI, IAPI, PRES, SIXTEEN, SSC, SHEET, TRA, XBRLSEC, XL, XS, XW, HC, LOG, BOOKS, BUS, FUN, INF, RR){
		if (AD == true) {
			self.checked[self.length] = "AD";
			self.length++;
		}
		if (ADMIN == true) {
			self.checked[self.length] = "ADMIN";
			self.length++;
		}
		if (AR == true) {
			self.checked[self.length] = "AR";
			self.length++;
		}
		if (SKY == true) {
			self.checked[self.length] = "SKY";
			self.length++;
		}if (CERT == true) {
			self.checked[self.length] = "CERT";
			self.length++;
		}
		if (DI == true) {
			self.checked[self.length] = "DI";
			self.length++;
		}
		if (DR == true) {
			self.checked[self.length] = "DR";
			self.length++;
		}
		if (DS == true) {
			self.checked[self.length] = "DS";
			self.length++;
		}
		if (FAP == true) {
			self.checked[self.length] = "FAP";
			self.length++;
		}
		if (FT == true) {
			self.checked[self.length] = "FT";
			self.length++;
		}
		if (FUI == true) {
			self.checked[self.length] = "FUI";
			self.length++;
		}
		if (IAPI == true) {
			self.checked[self.length] = "IAPI";
			self.length++;
		}
		if (PRES == true) {
			self.checked[self.length] = "PRES";
			self.length++;
		}if (SIXTEEN == true) {
			self.checked[self.length] = "SIXTEEN";
			self.length++;
		}
		if (SSC == true) {
			self.checked[self.length] = "SSC";
			self.length++;
		}
		if (SHEET == true) {
			self.checked[self.length] = "SHEET";
			self.length++;
		}
		if (TRA == true) {
			self.checked[self.length] = "TRA";
			self.length++;
		}
		if (XBRLSEC == true) {
			self.checked[self.length] = "XBRLSEC";
			self.length++;
		}
		if (XL == true) {
			self.checked[self.length] = "XL";
			self.length++;
		}
		if (XS == true) {
			self.checked[self.length] = "XS";
			self.length++;
		}
		if (XW == true) {
			self.checked[self.length] = "XW";
			self.length++;
		}
		if (HC == true) {
			self.checked[self.length] = "HC";
			self.length++;
		}
		if (LOG == true) {
			self.checked[self.length] = "LOG";
			self.length++;
		}
		if (BOOKS == true) {
			self.checked[self.length] = "BOOKS";
			self.length++;
		}
		if (BUS == true) {
			self.checked[self.length] = "BUS";
			self.length++;
		}
		if (FUN == true) {
			self.checked[self.length] = "FUN";
			self.length++;
		}
		if (INF == true) {
			self.checked[self.length] = "INF";
			self.length++;
		}
		if (RR == true) {
			self.checked[self.length] = "RR";
			self.length++;
		}
	};
};
var mgr = new VersionChanger();

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	mgr.messageListener(request, sender, sendResponse)
});
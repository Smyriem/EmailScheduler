InboxSDK.load('1', 'EmailScheduler').then(function(sdk){

	// the SDK has been loaded !
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence !
		composeView.addButton({
			title: "Send later(Ctrl+Alt+L)",				
			iconUrl : chrome.extension.getURL('/icons/calendar-timeout.png'),			
			onClick: function(event) {
				event.composeView.insertTextIntoBodyAtCursor('Hello');
			},
		});

	});

});

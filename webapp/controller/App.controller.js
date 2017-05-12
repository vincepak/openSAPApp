sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function(Controller, MessageToast) {

		return Controller.extend("opensap.myapp.controller.App", {
			onInit:function(oEvent){
			this._oViewModel = new sap.ui.model.json.JSONModel({
                "NoOfPicking":1,
                "PickingTotal": 5,
                "PickingIndicatorStatus": "Success"
            });

            this.getView().setModel(this._oViewModel, "vm" );
			},
			
			onButtonSayHello: function() {
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("This message should appear in the message box.", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "My message box title"
				});

				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				MessageToast.show(sMsg, {
					at: "center center", // default
					duration: 3000
				});

			},
			
			onImageLoadError: function(oEvent) {
				var oControl = oEvent.getSource();
				oControl.setSrc("http://qa-test-fsnz-images.s3.amazonaws.com/FAN/5001976.png");
			}
		});
	});
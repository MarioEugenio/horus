Ext.define('MSHorus.view.ListaAgendamento', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.TitleBar', 'Ext.Map'],
	xtype: 'agendamento',
	alias: 'widget.agendamento', 

	config : {
		items : [{
			            xtype: 'fieldset',
			            title: 'Dados do Paciente',
			            defaults:
					    {
				            labelAlign:     'top',
				            readOnly: true
					    },
			            items: [
			                {
			                    xtype: 'textfield',
			                    name : 'firstName',
			                    label: 'Nome'
			                },
			                {
			                    xtype: 'textfield',
			                    name : 'lastName',
			                    label: 'CNS'
			                },
			                {
			                    xtype: 'textfield',
			                    name : 'lastName',
			                    label: 'Data de Nascimento'
			                },
			                {
							            xtype: 'textfield',
					                    name : 'lastName',
					                    labelWrap: true,
					                    label: 'Estabelecimento de Entrega',
							            flex: 1
							        },
							        {
								        xtype: 'button', 
								        iconCls: 'locate',
								        text: 'Mapa do Estabelecimento',
								        ui: 'action-small',
								        cls:'smallIcon',
								        flex: 2,
								        listeners: {
								        	tap: function() 
											{
												if(!this.overlay)
												{

													this.overlay = Ext.Viewport.add({
																	xtype: 'panel',
																	modal: true,
																	hideOnMaskTap: true,
																	showAnimaiton:
																	{
																		type: 'popIn',
																		duration: 250,
																		easing: 'ease-out'
																	},
																	hideAnimation:
																	{
																		type: 'popOut',
																		duration: 250,
																		easing: 'ease-out'
																	},
																	centered: true,
																	width: Ext.os.deviceType == 'Phone' ? 260 : 300,
																	height: Ext.os.deviceType == 'Phone' ? 220 : 300,
																	styleHtmlContent:true,
																	items: [{
																		xtype: 'map',
																	    id :'geomap',
																	    width: '100%',
																	    height: '100%',
																	    layout: 'fit',
																	    useCurrentLocation: true,
																	    flex: 3,
																	    mapOptions: {
																	        zoom: 15,
																	        mapTypeId: google.maps.MapTypeId.ROADMAP,
																	        mapTypeControl : true,
																	        navigationControl : true,
																	        streetViewControl : true,
																	        backgroundColor: 'transparent',
																	        disableDoubleClickZoom: false,
																	        draggable: true,
																	        keyboardShortcuts: false,
																	        scrollwheel: true

																	        // Center your map to see your first marker ;)
																	        ,center: new google.maps.LatLng (12.82787,80.219722)
																	    }
																	    ,listeners: {
																	        maprender: function() {
																	            // Get a ref to the google map object (should be provided
																	            // as an argument to the listener but apparently there is
																	            // a bug...)
																	            var gMap = this.getMap();

																	            new google.maps.Marker({
																	                map: gMap,
																	                animation: google.maps.Animation.DROP,
																	                position: new google.maps.LatLng (12.82787,80.219722)
																	            });

																	            var geo = Ext.create('Ext.util.Geolocation', {
																	                autoUpdate: true,
																	                listeners: {
																	                    locationupdate: function (geo) {
																	                        
																	                    },

																	                    locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
																	                        if (bTimeout) {
																	                            Ext.Msg.alert('Timeout occurred.');
																	                        } else {
																	                            Ext.Msg.alert('Error occurred.');
																	                        }
																	                    }
																	                }
																	            });

																	            geo.updateLocation();
																	        }
																	    }
																	}]
																});
												}
									}
						        }
			                }
						    
			            ]
			        },
			        {
			            xtype: 'fieldset',
			            title: 'Agendamentos',
			            defaults:
					    {
				            labelAlign:     'top',
				            readOnly: true
					    },
			            items: [{
			                    xtype: 'textfield',
			                    name : 'lastName',
			                    label: 'Data de Nascimento'
			                }]
			        }]
 	}
});

 


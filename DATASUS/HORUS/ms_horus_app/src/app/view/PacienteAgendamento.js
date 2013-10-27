Ext.define('MSHorus.view.PacienteAgendamento', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.TitleBar', 'Ext.Map'],
	alias : "widget.pacienteAgendaView",

	config : {
		layout : {
			type : 'fit'
		},
		items : [{
				xtype : 'titlebar',
				title : 'Hórus Mobile',
				docked : 'top',
				items : [{
					xtype : 'button',
					itemId : 'voltarButton',
					iconCls: 'arrow_left',
					ui: 'back',
					align : 'left'
				}]
			},
			{
				xtype : 'tabpanel',
				tabBarPosition: 'bottom',
     			items : [{
					xtype : 'agendamento',
					title: 'Agendamentos',
					scrollable: 'vertical',
	  				iconCls: 'calendar'
				}, {
					xtype : 'mapa',
					title: 'Estabelecimentos',
	  				iconCls: 'locate'
				}]
		}],

	listeners : [{
		delegate : '#voltarButton',
		event : 'tap',
		fn : 'onVoltarButtonTap'
	}]
 },

	onVoltarButtonTap : function() {
		Ext.Viewport.animateActiveItem(1, {type:'slide', direction: 'right'});
	}
});

 
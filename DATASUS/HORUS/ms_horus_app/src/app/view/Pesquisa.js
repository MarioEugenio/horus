Ext.define('MSHorus.view.Pesquisa', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.TitleBar', 'Ext.Img', 'Ext.MessageBox'],
	alias : "widget.pesquisaview",

	config : {
		layout : {
			type : 'fit'
		},
		items : [{
				xtype : 'titlebar',
				title : 'Hórus Mobile',
				docked : 'top'
			}, {
				xtype : 'panel',
				style : {
					paddingLeft : '10px',
					paddingRight : '10px'
				},
				items : [
		        {
		            xtype: 'fieldset',
		            title: 'Dados da Pesquisa',
		            id: 'pesquisaform',
		            defaults:
				    {
			            labelAlign:     'top'
				    },
		            items: [
		                {
			                xtype: 'label',
			                flex: 1,
			                html: 'Pesquisar Por',
			                style: 'background-color:#F7F7F7;font-weight:bold;position:relative;top:30%;font-size:14px;padding:10px;border-bottom:1px solid !important;'
			            },
			            {
			                xtype: 'container',
			                flex: 3,
			                items: [
			                    {
			                        xtype: 'radiofield',
			                        label: 'Agendamento',
			                        labelWrap: true,
			                        labelWidth: '70%',
			                        name: 'tpPesquisa',
			                        id : 'tpPesquisa',
			                        value: 1
			                    },
			                    {
			                        xtype: 'radiofield',
			                        label: 'Medicamento',
			                        labelWrap: true,
			                        labelWidth: '70%',
			                        name: 'tpPesquisa',
			                        id : 'tpPesquisa2',
			                        value: 2
			                    }
			                ]
			            },
		                {
		                    xtype: 'textfield',
		                    label: 'Número da Receita *',
		                    name: 'nuReceitaTextField',
	                        id : 'nuReceitaTextField'
		                },
		                {
		                    xtype: 'textfield',
		                    label: 'Número do CNS *',
		                    name: 'nuCNSTextField',
	                        id : 'nuCNSTextField'
		                },
		                {
		                	xtype: 'checkboxfield',
						    name: 'updateinfo',
						    label: 'Lembrar meu CNS',
						    labelWrap: true,
						    labelAlign:     'left',
						    labelWidth: '70%',
						    cls: "x-checkbox"
		                }
		            ]
		        },
		        {
		        	xtype: 'button',
		        	text: 'Pesquisar',
		            itemId : 'pesquisarButton'
		        }
		    ]
		}],

	listeners : [{
		delegate : '#pesquisarButton',
		event : 'tap',
		fn : 'onPesquisarButtonTap'
	}]
 },

	onPesquisarButtonTap : function() {
		var me = this;

		var field = this.query('radiofield');
		var selected = field[0].getGroupValue();

		if (!selected) {
			Ext.Msg.alert('Selecione "Selecionar Por');
			return;
		}

		if (!Ext.getCmp('nuReceitaTextField').getValue()) {
			Ext.Msg.alert('Digite "Nº Receita');
			return;
		}

		if (!Ext.getCmp('nuCNSTextField').getValue()) {
			Ext.Msg.alert('Digite "Nº CNS');
			return;
		}

		switch (selected) {
			case 1: Ext.Viewport.animateActiveItem(2, {type:'slide', direction: 'left'}); break;
			case 2: Ext.Viewport.animateActiveItem(3, {type:'slide', direction: 'left'}); break;
		}
	}
});
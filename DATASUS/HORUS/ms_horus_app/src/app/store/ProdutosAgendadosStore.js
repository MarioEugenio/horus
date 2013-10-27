Ext.define('MSHorus.store.ProdutosAgendadosStore', {
	extend : 'Ext.data.Store',

	config : {
		model : 'BVMobile.model.PublicacaoModel',

		autoLoad : false,
		clearOnPageLoad : true,

		proxy : {
			type : 'ajax',
			url : '',
			method : 'get',
			idProperty : 'co_microblog_post',
			pageParam : 'nextPage',

			extraParams : {
				token : ''
			},

			reader : {
				type : 'json',
				rootProperty : 'arrPublications',
				totalProperty : 'resultMax'
			}
		}
	}

});
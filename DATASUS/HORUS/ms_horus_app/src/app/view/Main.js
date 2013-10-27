Ext.define('MSHorus.view.Main', {
  extend : 'Ext.form.Panel',
  requires : ['Ext.TitleBar', 'Ext.Map'],
  alias : "widget.mainView",

  config : {
    html: '<img class="logo" style="width: 100%; height: auto;" src="resources/img/inicial.png"/>',
    cls: 'inicial',
    masked: {
            xtype: 'loadmask',
            message: ''
          }
  },
  initialize: function() {
      setTimeout(
      function () {
        Ext.Viewport.animateActiveItem(1, {type:'slide', direction: 'left'});
      }
      , 3000);
  }
});

 
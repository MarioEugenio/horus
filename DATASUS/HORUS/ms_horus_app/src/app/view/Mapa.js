Ext.define('MSHorus.view.Mapa', {
extend: 'Ext.Map',
xtype: 'mapa',
alias: 'widget.mapa', 
useCurrentLocation: false,
config: {
  layout: 'fit',
  iconCls: 'locate',
  title: 'Estabelecimentos',
  styleHtmlContent: true,
  items: [
    {
      xtype: 'titlebar',
      docked : 'top',
       ui      : 'forward',
      items: [
        {
          xtype: 'segmentedbutton',
           ui: 'normal',
           items: [
                   {
                       text: 'Lista'
                   },
                   {
                       text   : 'Mapa',
                       pressed: true
                   }
               ]
        }
      ]
    }
  ]
},
mapOptions: {
    center: new google.maps.LatLng(43.44480522551279, -80.52185701586927),
    disableDefaultUI: true
},
constructor: function(config) {
    this.callParent(config);
    if (!(window.google || {}).maps) {
            this.setHtml('<p id="maperror">Internet Connection Required!</p>');
    }
}
});
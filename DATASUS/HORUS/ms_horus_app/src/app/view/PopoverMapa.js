Ext.define('MSHorus.view.PopoverMapa', {
    extend: 'Ext.Panel',
    xtype: 'OverlayMapa'
    alias: 'widget.Overlay',

    config: {
        centered: true,
        height: 200,
        hidden: true,
        html: 'teste',
        id: 'pOverlay',
        ui: 'light',
        width: 200,
        hideOnMaskTap: true,
        modal: true
    }

});
sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'project1',
            componentId: 'zcds1_basList',
            contextPath: '/zcds1_bas'
        },
        CustomPageDefinitions
    );
});
sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/zcds1_basList",
	"project1/test/integration/pages/zcds1_basObjectPage"
], function (JourneyRunner, zcds1_basList, zcds1_basObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onThezcds1_basList: zcds1_basList,
			onThezcds1_basObjectPage: zcds1_basObjectPage
        },
        async: true
    });

    return runner;
});


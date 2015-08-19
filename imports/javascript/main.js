
//All page charts//


//Bio gas Gauge
var biogasGauge = AmCharts.makeChart( "biogas-gauge", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 20,
    "bands": [ {
      "color": "#84b761",
      "endValue": 90,
      "startValue": 0
    }, {
      "color": "#fdd400",
      "endValue": 130,
      "startValue": 90
    }, {
      "color": "#cc4748",
      "endValue": 220,
      "innerRadius": "95%",
      "startValue": 130
    } ],
    "bottomText": "0 km/h",
    "bottomTextYOffset": -20,
    "endValue": 220
  } ],
  "arrows": [ {} ],
  "export": {
    "enabled": true
  }
} );

//Battery Gauge
var batteryGauge = AmCharts.makeChart( "battery-gauge", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 20,
    "bands": [ {
      "color": "#84b761",
      "endValue": 90,
      "startValue": 0
    }, {
      "color": "#fdd400",
      "endValue": 130,
      "startValue": 90
    }, {
      "color": "#cc4748",
      "endValue": 220,
      "innerRadius": "95%",
      "startValue": 130
    } ],
    "bottomText": "0 km/h",
    "bottomTextYOffset": -20,
    "endValue": 220
  } ],
  "arrows": [ {} ],
  "export": {
    "enabled": true
  }
} );

//PV Gauge
var pvGauge = AmCharts.makeChart( "pv-gauge", {
  "theme": "light",
  "type": "gauge",
  "axes": [ {
    "axisColor": "#67b7dc",
    "axisThickness": 3,
    "endValue": 240,
    "gridInside": false,
    "inside": false,
    "radius": "100%",
    "valueInterval": 20,
    "tickColor": "#67b7dc"
  }, {
    "axisColor": "#fdd400",
    "axisThickness": 3,
    "endValue": 160,
    "radius": "80%",
    "valueInterval": 20,
    "tickColor": "#fdd400"
  } ],
  "arrows": [ {
    "color": "#67b7dc",
    "innerRadius": "20%",
    "nailRadius": 0,
    "radius": "85%"
  } ],
  "export": {
    "enabled": true
  }
} );

//Load Gauge
var loadGauge = AmCharts.makeChart( "load-gauge", {
  "theme": "light",
  "type": "gauge",
  "axes": [ {
    "axisColor": "#67b7dc",
    "axisThickness": 3,
    "endValue": 240,
    "gridInside": false,
    "inside": false,
    "radius": "100%",
    "valueInterval": 20,
    "tickColor": "#67b7dc"
  }, {
    "axisColor": "#fdd400",
    "axisThickness": 3,
    "endValue": 160,
    "radius": "80%",
    "valueInterval": 20,
    "tickColor": "#fdd400"
  } ],
  "arrows": [ {
    "color": "#67b7dc",
    "innerRadius": "20%",
    "nailRadius": 0,
    "radius": "85%"
  } ],
  "export": {
    "enabled": true
  }
} );



// Real time 24 hours chart showing PV, Bio-gas and Battery values, as well as trendline
 var realTimeAll = AmCharts.makeChart("historical-data", {
 	"type": "serial",
 	"theme": "light",
 	"legend": {
 		"horizontalGap": 10,
 		"maxColumns": 1,
 		"position": "right",
 		"useGraphSettings": true,
 		"markerSize": 10
 	},
 	"dataProvider": [{
 		}, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
 		"pv": 2.7,
 		"battery": 2.2,
 		"load": 100
                                            }],
 	"valueAxes": [{
 		"stackType": "regular",
 		"axisAlpha": 0.3,
 		"gridAlpha": 0
                                            }],
 	"graphs": [{
 		"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
 		"fillAlphas": 0.8,
 		"labelText": "[[value]]",
 		"lineAlpha": 0.3,
 		"title": "Biogas",
 		"type": "column",
 		"color": "#000000",
 		"valueField": "biogas"
                                            }, {
 		"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
 		"fillAlphas": 0.8,
 		"labelText": "[[value]]",
 		"lineAlpha": 0.3,
 		"title": "PV",
 		"type": "column",
 		"color": "#000000",
 		"valueField": "pv"
                                            }, {
 		"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
 		"fillAlphas": 0.8,
 		"labelText": "[[value]]",
 		"lineAlpha": 0.3,
 		"title": "Battery",
 		"type": "column",
 		"color": "#000000",
 		"valueField": "battery"
                                            }, {
 		"id": "graph2",
 		"balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
 		"bullet": "round",
 		"lineThickness": 3,
 		"bulletSize": 7,
 		"bulletBorderAlpha": 1,
 		"bulletColor": "#FFFFFF",
 		"useLineColorForBulletBorder": true,
 		"bulletBorderThickness": 3,
 		"fillAlphas": 0,
 		"lineAlpha": 1,
 		"title": "Load",
 		"valueField": "load"
                                            }],
 	"categoryField": "time",
 	"categoryAxis": {
 		"gridPosition": "start",
 		"axisAlpha": 0,
 		"gridAlpha": 0,
 		"position": "left"
 	},
 	"export": {
 		"enabled": true
 	}

 });

//Battery Charts 

//real time battery chart last 24 hours values
var realTimeBattery = AmCharts.makeChart("real-time-battery", {
 	"type": "serial",
 	"theme": "light",
 	"legend": {
 		"horizontalGap": 10,
 		"maxColumns": 1,
 		"position": "right",
 		"useGraphSettings": true,
 		"markerSize": 10
 	},
 	"dataProvider": [{
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }, {
 		"time": 2004,
 		"battery": 2.2,
                                            }],
 	"valueAxes": [{
 		"stackType": "regular",
 		"axisAlpha": 0.3,
 		"gridAlpha": 0
                                            }],
 	"graphs": [{
 		"id": "graph2",
 		"balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
 		"bullet": "round",
 		"lineThickness": 3,
 		"bulletSize": 7,
 		"bulletBorderAlpha": 1,
 		"bulletColor": "#FFFFFF",
 		"useLineColorForBulletBorder": true,
 		"bulletBorderThickness": 3,
 		"fillAlphas": 0,
 		"lineAlpha": 1,
 		"title": "Battery",
 		"valueField": "battery"
                                            }],
 	"categoryField": "time",
 	"categoryAxis": {
 		"gridPosition": "start",
 		"axisAlpha": 0,
 		"gridAlpha": 0,
 		"position": "left"
 	},
 	"export": {
 		"enabled": true
 	}

 });

// Charge battery pie chart
var batteryCharge = AmCharts.makeChart( "battery-charge", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "title": "Charge",
    "value": 4852
  }, {
    "title": "Discharge",
    "value": 9899
  } ],
  "titleField": "title",
  "valueField": "value",
  "labelRadius": 5,

  "radius": "42%",
  "innerRadius": "60%",
  "labelText": "[[title]]",
  "export": {
    "enabled": true
  }
} );


//Gas Charts 

// Forecasted gas chart
var chartData = generateChartData();
var gasProduction = AmCharts.makeChart("gas-production", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
        "axisAlpha": 0.2,
        "dashLength": 1,
        "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
        "id": "g1",
        "balloonText": "[[category]]<br/><b><span style='font-size:14px;'>value: [[value]]</span></b>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "value",
        "useLineColorForBulletBorder": true
    }],
    "chartScrollbar": {
        "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
    },
    "chartCursor": {

    },
    "categoryField": "time",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

gasProduction.addListener("rendered", zoomChart);
zoomChart();

// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    gasProduction.zoomToIndexes(chartData.length - 40, chartData.length - 1);
}


// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 5);

    for (var i = 0; i < 1000; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        var visits = Math.round(Math.random() * (40 + i / 5)) + 20 + i;

        chartData.push({
            time: newDate,
            value: visits
        });
    }
    return chartData;
}

//real time gas chart 24hrs
var realTimeGas = AmCharts.makeChart("real-time-gas", {
 	"type": "serial",
 	"theme": "light",
 	"legend": {
 		"horizontalGap": 10,
 		"maxColumns": 1,
 		"position": "right",
 		"useGraphSettings": true,
 		"markerSize": 10
 	},
 	"dataProvider": [{
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }, {
 		"time": 2004,
 		"biogas": 2.6,
                                            }],
 	"valueAxes": [{
 		"stackType": "regular",
 		"axisAlpha": 0.3,
 		"gridAlpha": 0
                                            }],
 	"graphs": [{
 		"id": "graph2",
 		"balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
 		"bullet": "round",
 		"lineThickness": 3,
 		"bulletSize": 7,
 		"bulletBorderAlpha": 1,
 		"bulletColor": "#FFFFFF",
 		"useLineColorForBulletBorder": true,
 		"bulletBorderThickness": 3,
 		"fillAlphas": 0,
 		"lineAlpha": 1,
 		"title": "Biogas",
 		"valueField": "biogas"
                                            }],
 	"categoryField": "time",
 	"categoryAxis": {
 		"gridPosition": "start",
 		"axisAlpha": 0,
 		"gridAlpha": 0,
 		"position": "left"
 	},
 	"export": {
 		"enabled": true
 	}

 });

//PV Charts 


// PV production line chart 
var pvProduction = AmCharts.makeChart("pv-production", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
        "axisAlpha": 0.2,
        "dashLength": 1,
        "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
        "id": "g1",
        "balloonText": "[[category]]<br/><b><span style='font-size:14px;'>value: [[value]]</span></b>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "value",
        "useLineColorForBulletBorder": true
    }],
    "chartScrollbar": {
        "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
    },
    "chartCursor": {

    },
    "categoryField": "time",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

//PV Real time chart
var realTimePv = AmCharts.makeChart("real-time-pv", {
 	"type": "serial",
 	"theme": "light",
 	"legend": {
 		"horizontalGap": 10,
 		"maxColumns": 1,
 		"position": "right",
 		"useGraphSettings": true,
 		"markerSize": 10
 	},
 	"dataProvider": [{
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }, {
 		"time": 2004,
 		"pv": 2.6,
                                            }],
 	"valueAxes": [{
 		"stackType": "regular",
 		"axisAlpha": 0.3,
 		"gridAlpha": 0
                                            }],
 	"graphs": [{
 		"id": "graph2",
 		"balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
 		"bullet": "round",
 		"lineThickness": 3,
 		"bulletSize": 7,
 		"bulletBorderAlpha": 1,
 		"bulletColor": "#FFFFFF",
 		"useLineColorForBulletBorder": true,
 		"bulletBorderThickness": 3,
 		"fillAlphas": 0,
 		"lineAlpha": 1,
 		"title": "PV",
 		"valueField": "pv"}],
 	"categoryField": "time",
 	"categoryAxis": {
 		"gridPosition": "start",
 		"axisAlpha": 0,
 		"gridAlpha": 0,
 		"position": "left"
 	},
 	"export": {
 		"enabled": true
 	}

 });


//LOAD CHARTS

//Load real time chart


//Load production chart
var loadProduction = AmCharts.makeChart("load-production", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
        "axisAlpha": 0.2,
        "dashLength": 1,
        "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
        "id": "g1",
        "balloonText": "[[category]]<br/><b><span style='font-size:14px;'>value: [[value]]</span></b>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "value",
        "useLineColorForBulletBorder": true
    }],
    "chartScrollbar": {
        "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
    },
    "chartCursor": {

    },
    "categoryField": "time",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

var realTimeLoad = AmCharts.makeChart("real-time-load", {
 	"type": "serial",
 	"theme": "light",
 	"legend": {
 		"horizontalGap": 10,
 		"maxColumns": 1,
 		"position": "right",
 		"useGraphSettings": true,
 		"markerSize": 10
 	},
 	"dataProvider": [{
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }, {
 		"time": 2004,
 		"load": 2.6,
                                            }],
 	"valueAxes": [{
 		"stackType": "regular",
 		"axisAlpha": 0.3,
 		"gridAlpha": 0
                                            }],
 	"graphs": [{
 		"id": "graph2",
 		"balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
 		"bullet": "round",
 		"lineThickness": 3,
 		"bulletSize": 7,
 		"bulletBorderAlpha": 1,
 		"bulletColor": "#FFFFFF",
 		"useLineColorForBulletBorder": true,
 		"bulletBorderThickness": 3,
 		"fillAlphas": 0,
 		"lineAlpha": 1,
 		"title": "Load",
 		"valueField": "load"
                                            }],
 	"categoryField": "time",
 	"categoryAxis": {
 		"gridPosition": "start",
 		"axisAlpha": 0,
 		"gridAlpha": 0,
 		"position": "left"
 	},
 	"export": {
 		"enabled": true
 	}

 });

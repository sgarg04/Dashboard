    window.onload = function() {
        /*Line chart Chart 01*/
        var ctx1 = document.getElementById("chart-01").getContext("2d");
        window.myLine = new Chart(ctx1, config);
        /*Pie chart Chart 02*/
        var ctx2 = document.getElementById("chart-02").getContext("2d");
        window.myPie = new Chart(ctx2, config1);
        /*Bar chart Chart 03*/
        var ctx3 = document.getElementById("chart-03").getContext("2d");
            window.myBar = new Chart(ctx3, {
                type: 'bar',
                data: barChartData1,
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Day'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Build'
                            }
                        }]
                    }                    
                }
            });           
 
        /*Line chart Chart 04*/
        var ctx1 = document.getElementById("chart-04").getContext("2d");
        window.myLine = new Chart(ctx1, config2);
        /*Pie chart Chart 05*/
        var ctx2 = document.getElementById("chart-05").getContext("2d");
        window.myPie = new Chart(ctx2, config3);
        /*Bar chart Chart 06*/
        var ctx3 = document.getElementById("chart-06").getContext("2d");
            window.myBar = new Chart(ctx3, {
                type: 'bar',
                data: barChartData2,
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Order'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollar Value'
                            }
                        }]
                    }                      
                }
            });                             
    };

    /*Line chart Chart 01*/
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var datapoints = [0, 20, 20, 60, 60, 120];
    var config = {
        type: 'line',
        data: {
            labels: ["0", "1", "2", "3", "4", "5"],
            datasets: [{
                label: "Cubic interpolation (monotone)",
                data: [-80, -60, -50, -50, -60, -120],
                borderColor: window.chartColors.red,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
                cubicInterpolationMode: 'monotone'
            }, {
                label: "Cubic interpolation (default)",
                data: [90, 80, 20, -60, 60, 120],
                borderColor: window.chartColors.blue,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
            }, {
                label: "Linear interpolation",
                data: [190, 60, -20, 60, 60, 120],
                borderColor: window.chartColors.green,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
                lineTension: 0
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        suggestedMin: -10,
                        suggestedMax: 200,
                    }
                }]
            }
        }
    };

    /*Pie Chart Chart-02*/      
    var config1 = {
        type: 'pie',
        data: {
            datasets: [{
                data: [20, 30, 50],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.green
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Blocked work",
                "WIP",
                "Completed"
            ]
        },
        options: {
            responsive: true
        }
    };

    /*Velocity of the relaese -Bar Chart -Chart-03*/
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var color = Chart.helpers.color;
        var barChartData1 = {
            labels: ["01", "02", "03", "04", "05", "06", "07"],
            datasets: [{
                label: 'Release',
                backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
                borderColor: window.chartColors.orange,
                borderWidth: 1,
                data: [80, 20, 60, 40, 30, 60, 70]
            }]
        };
    /*Line chart Chart 04*/
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var datapoints = [0, 20, 20, 60, 60, 120];
    var config2 = {
        type: 'line',
        data: {
            labels: ["0", "1", "2", "3", "4", "5"],
            datasets: [{
                label: "Cubic interpolation (monotone)",
                data: [-80, -60, -50, -50, -60, -120],
                borderColor: window.chartColors.red,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
                cubicInterpolationMode: 'monotone'
            }, {
                label: "Cubic interpolation (default)",
                data: [90, 80, 20, -60, 60, 120],
                borderColor: window.chartColors.blue,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
            }, {
                label: "Linear interpolation",
                data: [190, 60, -20, 60, 60, 120],
                borderColor: window.chartColors.green,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
                lineTension: 0
            }]
        },
        options: {
            responsive: true,
            title:{
                display:true
            },
            tooltips: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        suggestedMin: -10,
                        suggestedMax: 200,
                    }
                }]
            }
        }
    };

    /*Pie Chart Chart-05*/   
    var config3 = {
        type: 'pie',
        data: {
            datasets: [{
                data: [2, 3, 14],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.green,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Green"
            ]
        },
        options: {
            responsive: true
        }
    };

    /*Bar Chart Chart-06*/
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var color = Chart.helpers.color;
        var barChartData2 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: 'Dataset 2',
                backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: 'Dataset 3',
                backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
                borderColor: window.chartColors.orange,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]

        };

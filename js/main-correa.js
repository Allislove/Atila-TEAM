/**
 * Chart JS
 * Grafica de lineas
 */
window.addEventListener('load', () => {

    var ctx = document.getElementsByClassName('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['21/05', '22/05', '23/05', '24/05', '25/05', '26/05'],
            datasets: [{
                label: 'SALES OVER TIME',
                data: [2, 40, 15, 35, 11, 16],
                backgroundColor: [
                    'rgb(90, 82, 255, 0.1)',
                ],
                borderColor: [
                    'rgb(90, 82, 255, 0.9)',
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        backdropColor: 'rgba(255, 255, 255, 0.75)',
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                bodyFontColor: '#444'
            },
            title: {
                display: true,
                text: 'SALES OVER TIME'
            },
            legend: {
                display: false
            }
        }
    });

    /**Grafica de barras */

    var ctx = document.getElementsByClassName('myChart-bar');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['25/05', '26/05', '27/05', '28/05', '29/05', '30/05', '31/05'],
            datasets: [{
                label: 'VISITORS OVER TIME',
                data: [11, 12, 11, 29, 15, 22, 15],
                backgroundColor: [
                    'rgb(90, 82, 255, 0.1)',
                    'rgb(90, 82, 255, 0.1)',
                    'rgb(90, 82, 255, 0.1)',
                    'rgb(90, 82, 255, 0.1)',
                    'rgb(90, 82, 255, 0.1)',
                    'rgb(90, 82, 255, 0.1)',
                    'rgb(90, 82, 255, 0.1)'
                ],
                borderColor: [
                    'rgb(90, 82, 255, 0.6)',
                    'rgb(90, 82, 255, 0.6)',
                    'rgb(90, 82, 255, 0.6)',
                    'rgb(90, 82, 255, 0.6)',
                    'rgb(90, 82, 255, 0.6)',
                    'rgb(90, 82, 255, 0.6)',
                    'rgb(90, 82, 255, 0.6)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        backdropColor: 'rgba(255, 255, 255, 0.75)'
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                bodyFontColor: '#444'
            },
            title: {
                display: true,
                text: 'VISITORS OVER TIME'
            },
            legend: {
                display: false
            }
        }
    });

    /** Gráfico Doble Linea */
    var ctx = document.getElementsByClassName("myChart-lines");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["25/05", "26/05", "27/05", "28/05", "29/05", "30/05", "31/05"],
            datasets: [{
                    label: 'CUSTOMERS',
                    data: [2, 3.5, 4.5, 0, 2, 1.6, 5],
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(90, 82, 255, 0.9)',
                    borderWidth: 3
                },
                {
                    label: 'CUSTOMERS',
                    data: [5, 7, 9, 4.8, 5, 6.2, 9],
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(90, 82, 255, 0.1)',
                    borderWidth: 3
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                        backdropColor: 'rgba(255, 255, 255, 0.75)'
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                bodyFontColor: '#444'
            },
            title: {
                display: true,
                text: 'CUSTOMERS'
            },
            legend: {
                display: false
            }
        }
    });

    /**Gráfica Lineas average */
    var ctx = document.getElementsByClassName('myChart-line-average');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['25/05', '26/05', '27/05', '28/05', '29/05', '30/05', '31/05'],
            datasets: [{
                label: 'SALES OVER TIME',
                data: [15, 35, 0, 30, 20, 0, 50],
                backgroundColor: 'transparent',
                borderColor: [
                    'rgb(90, 82, 255, 0.9)',
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        backdropColor: 'rgba(255, 255, 255, 0.75)',
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                bodyFontColor: '#444'
            },
            title: {
                display: true,
                text: 'ORDER VALUE'
            },
            legend: {
                display: false
            }
        }
    });

    /**Gráfico line total orders */
    var ctx = document.getElementsByClassName('myChart-line-orders');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['25/05', '26/05', '27/05', '28/05', '29/05', '30/05', '31/05'],
            datasets: [{
                label: 'SALES OVER TIME',
                data: [2, 1, 2, 2, 1, 1, 0],
                backgroundColor: 'transparent',
                borderColor: [
                    'rgb(90, 82, 255, 0.9)',
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        backdropColor: 'rgba(255, 255, 255, 0.75)',
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                // borderColor: '1px solid #444',
                bodyFontColor: '#444'
            },
            title: {
                display: true,
                text: 'ORDERS OVER TIME'
            },
            legend: {
                display: false
            }
        }
    });


    /**Gráfico Pie */

    var ctx = document.getElementsByClassName('myChart-circle');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['25/05', '26/05'],
            datasets: [{
                label: 'SALES OVER TIME',
                data: [2, 1],
                backgroundColor: [
                    'rgb(90, 82, 255, 0.9)',
                    'rgb(90, 82, 255, 0.1)'
                ],
                borderColor: [
                    'rgb(90, 82, 255, 0.9)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        backdropColor: 'rgba(255, 255, 255, 0.75)',
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                bodyFontColor: '#444'
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            },
            cutoutPercentage: 88
        }
    });

    /**Big chartJS Lines*/

    var ctx = document.getElementsByClassName("myChart-big-line");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31"],
            datasets: [{
                    label: 'CUSTOMERS',
                    data: [15, 18, 20, 17, 15, 18, 12, 10],
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(90, 82, 255, 0.9)',
                    borderWidth: 3
                },
                {
                    label: 'CUSTOMERS',
                    data: [154, 178, 203, 165, 153, 184, 123, 104],
                    backgroundColor: 'transparent',
                    borderColor: '#ed0b4c',
                    borderWidth: 3
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 50,
                        backdropColor: 'rgba(255, 255, 255, 0.75)'
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'nearest',
                backgroundColor: 'rgb(255, 255, 255)',
                bodyFontColor: '#444'
            },
            legend: {
                display: false
            }
        }
    });




})

/**
 * Calendario 
 */
let typeCalendar = true;

function calendarPlugin() {

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'list'],
        events: [{
            start: '2020-06-10T10:00:00',
            end: '2020-06-10T16:00:00',
            rendering: 'background'
        }]
    });
    let hideCalendar = document.querySelector('#calendar');
    if (typeCalendar) {
        calendar.render();
        typeCalendar = false;
        hideCalendar.classList.remove('hide-calendar');
        hideCalendar.classList.add('show-calendar');
    } else {
        typeCalendar = true;
        hideCalendar.classList.add('hide-calendar');
        hideCalendar.classList.remove('show-calendar');

    }
}

/**
 * Menu de mensajes
 */
var tipo = true;

function menuBtn() {
    console.log('aqui....')
    var btn_menu = document.querySelector('.email-menu');
    console.log(btn_menu);
    if (tipo) {
        btn_menu.classList.add('show-menu');
        btn_menu.classList.remove('hide-menu')
        tipo = false;
    } else {
        btn_menu.classList.add('hide-menu');
        btn_menu.classList.remove('show-menu');
        tipo = true;
    }
}
async function showDiners(){
    const endpoint = "/api/dining"
    const mealEndpoint = "/api/meals"
    const macroEndpoint = "/api/macros"
    const request = await fetch(endpoint);
    const mealrequest = await fetch(mealEndpoint);
    const macrorequest = await fetch(macroEndpoint);
    const data = await request.json();
    const mealdata = await mealrequest.json();
    const macrodata = await macrorequest.json();
    const dataArray = data.data;
    const mealArray = mealdata.data;
    const macroArray = macrodata.data;
    console.log(data);
    console.table(data);
    const list = document.querySelector('.list');

    dataArray.forEach((hall) => {
    console.log(hall.hall_id);
    const rows = document.createElement('tr');
    const hallID = hall.hall_id;
    const hallName = hall.hall_name;
    const hallAddress = hall.hall_address;

    rows.innerHTML = `
    <td>${hallID}</td>
    <td>${hallName}</td>
    <td>${hallAddress}</td>
    `;
    list.append(rows);
    }); 
    
    function displayMealChart(){
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text: "Evening Sales in a Restaurant"
            },
            axisX: {
                valueFormatString: "DDD"
            },
            axisY: {
                prefix: "$"
            },
            toolTip: {
                shared: true
            },
            legend:{
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                type: "stackedBar",
                name: "Meals",
                showInLegend: "true",
                xValueFormatString: "DD, MMM",
                yValueFormatString: "$#,##0",
                dataPoints: [
                    { x: new Date(2017, 0, 30), y: 56 },
                    { x: new Date(2017, 0, 31), y: 45 },
                    { x: new Date(2017, 1, 1), y: 71 },
                    { x: new Date(2017, 1, 2), y: 41 },
                    { x: new Date(2017, 1, 3), y: 60 },
                    { x: new Date(2017, 1, 4), y: 75 },
                    { x: new Date(2017, 1, 5), y: 98 }
                ]
            },
            {
                type: "stackedBar",
                name: "Snacks",
                showInLegend: "true",
                xValueFormatString: "DD, MMM",
                yValueFormatString: "$#,##0",
                dataPoints: [
                    { x: new Date(2017, 0, 30), y: 86 },
                    { x: new Date(2017, 0, 31), y: 95 },
                    { x: new Date(2017, 1, 1), y: 71 },
                    { x: new Date(2017, 1, 2), y: 58 },
                    { x: new Date(2017, 1, 3), y: 60 },
                    { x: new Date(2017, 1, 4), y: 65 },
                    { x: new Date(2017, 1, 5), y: 89 }
                ]
            },
            {
                type: "stackedBar",
                name: "Drinks",
                showInLegend: "true",
                xValueFormatString: "DD, MMM",
                yValueFormatString: "$#,##0",
                dataPoints: [
                    { x: new Date(2017, 0, 30), y: 48 },
                    { x: new Date(2017, 0, 31), y: 45 },
                    { x: new Date(2017, 1, 1), y: 41 },
                    { x: new Date(2017, 1, 2), y: 55 },
                    { x: new Date(2017, 1, 3), y: 80 },
                    { x: new Date(2017, 1, 4), y: 85 },
                    { x: new Date(2017, 1, 5), y: 83 }
                ]
            },
            {
                type: "stackedBar",
                name: "Dessert",
                showInLegend: "true",
                xValueFormatString: "DD, MMM",
                yValueFormatString: "$#,##0",
                dataPoints: [
                    { x: new Date(2017, 0, 30), y: 61 },
                    { x: new Date(2017, 0, 31), y: 55 },
                    { x: new Date(2017, 1, 1), y: 61 },
                    { x: new Date(2017, 1, 2), y: 75 },
                    { x: new Date(2017, 1, 3), y: 80 },
                    { x: new Date(2017, 1, 4), y: 85 },
                    { x: new Date(2017, 1, 5), y: 105 }
                ]
            },
            {
                type: "stackedBar",
                name: "Takeaway",
                showInLegend: "true",
                xValueFormatString: "DD, MMM",
                yValueFormatString: "$#,##0",
                dataPoints: [
                    { x: new Date(2017, 0, 30), y: 52 },
                    { x: new Date(2017, 0, 31), y: 55 },
                    { x: new Date(2017, 1, 1), y: 20 },
                    { x: new Date(2017, 1, 2), y: 35 },
                    { x: new Date(2017, 1, 3), y: 30 },
                    { x: new Date(2017, 1, 4), y: 45 },
                    { x: new Date(2017, 1, 5), y: 25 }
                ]
            }]
        });
        chart.render();
        
        function toggleDataSeries(e) {
            if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }
    }
    displayMealChart();
}

async function windowsActions(){
    showDiners();
    //displayChart();
}

window.onload = windowsActions();
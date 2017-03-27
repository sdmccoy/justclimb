//Load the visualization api.
google.charts.load('visualization', '1', {packages:['corechart']});
//Set a callback to run when the google API is loaded.
google.charts.setOnLoadCallback(drawChart);

//Callback that creates and populates a data table.
//instantiates the pie chart, passes in the data and draws it.
function drawChart() {
  //Create table data.
  var data = google.visualization.arrayToDataTable([
    ['Climber', 'link', 'Match Percentage'],
    ['Climber 1', 'http://www.thefreedictionary.com/work', 11],
    ['Climber 2', 'http://www.thefreedictionary.com/eat', 2],
    ['Climber 3', 'http://www.thefreedictionary.com/commute', 2],
    ['Climber 4', 'http://www.thefreedictionary.com/television',2],
    ['Climber 5', 'http://www.thefreedictionary.com/sleep', 7]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 2]);
// Sets chart view options.
  var options = {
    title: 'Climber Matches',
    width: 400,
    height: 300
  };
  //Instantiate and draw our chart.
  var chart = new google.visualization.PieChart(
    document.getElementById('chart_div'));
  chart.draw(view, options);
  //Sets the selection handler to the link value.
  var selectHandler = function(e) {
    window.location = data.getValue(chart.getSelection()[0]['row'], 1 );
  };
  //Select event listener.
  google.visualization.events.addListener(chart, 'select', selectHandler);
}

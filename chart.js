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
      ['Climber 1', 'profile.html', 10],
      ['Climber 2', 'profile.html', 3],
      ['Climber 3', 'profile.html', 4],
      ['Climber 4', 'profile.html', 2],
      ['Climber 5', 'profile.html', 5]
  ]);

  var view = new google.visualization.DataView(data);
// View columns 0 and 2, the links column is hidden.
  view.setColumns([0, 2]);
// Sets chart view options.
  var options = {
    title: 'Climber Matches',
    width: 600,
    height: 500,
    is3D: true,
    colors: ['#DB2D0A', '#CF2A09', '#B52508', '#8F1D06', '#4F1003']
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

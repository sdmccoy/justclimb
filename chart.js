//Load the visualization api.
google.charts.load('visualization', '1', {packages:['corechart']});
//Set a callback to run when the google API is loaded.
google.charts.setOnLoadCallback(drawChart);
// var arrayName = ['Zach', 'Tony', 'Scott', 'Matt'];
// var arrayPoints = [2, 4, 7, 8];
//Callback that creates and populates a data table.
//instantiates the pie chart, passes in the data and draws it.
function drawChart() {
  //Create table data.
  var profilesArr = JSON.parse(localStorage.getItem('profilesArr'));
  console.log('made it');
  var data = google.visualization.arrayToDataTable([
    ['Climber', 'Match Percentage'],
    ['climber 1', 10],
  ]);

  for(var i = 0; i < profilesArr.length; i++) {
    if(profilesArr[i].points > 6) {
      data.addRows([
      [profilesArr[i].name, profilesArr[i].points],
      ]);
    }
  };

  var view = new google.visualization.DataView(data);

// View columns 0 and 2, the links column is hidden.
  view.setColumns([0, 1]);
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

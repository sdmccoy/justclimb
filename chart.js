google.charts.load('visualization', '1', {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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

  var options = {
    title: 'Climber Matches'
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('chart_div'));
  chart.draw(view, options);

  var selectHandler = function(e) {
    window.location = data.getValue(chart.getSelection()[0]['row'], 1 );
  };
  google.visualization.events.addListener(chart, 'select', selectHandler);
}

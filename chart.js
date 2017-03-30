//Load the visualization api.
google.charts.load('visualization', '1', {packages:['corechart']});
//Set a callback to run when the google API is loaded.
google.charts.setOnLoadCallback(drawChart);

//instantiates the pie chart, passes in the data and draws it.
function drawChart() {
  //Create table data.
  var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));
  console.log('made it');
  var data = google.visualization.arrayToDataTable([
    ['Climber', 'Match Percentage', 'link'],
    ['climber 1', 0, 'profile.html'],
  ]);

  for(var i = 0; i < storedprofilesArr.length; i++) {
    var topMatches = [storedprofilesArr[i].name, storedprofilesArr[i].points, 'profile.html'];
    if(storedprofilesArr[i].points > 6) {
      data.addRows([
        topMatches,
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
    colors: ['#403ABF', '#21357F', '#426BFF', '#111B40', '#3C60E5', '#10E5D5', '#B0E5BC']
  };
  //Instantiate and draw our chart.
  var chart = new google.visualization.PieChart(
    document.getElementById('chart_div'));
  chart.draw(view, options);
  //Sets the selection handler to the link value.
  var selectHandler = function(e) {
    storedprofilesArr.sort(function(a, b) {
      return parseFloat(b.points) - parseFloat(a.points);
    });
    console.log('yes', storedprofilesArr);
    localStorage.profilesArr = JSON.stringify(storedprofilesArr);
    // populateNewUser();
    window.location = data.getValue(chart.getSelection()[0]['row'], 2 );
  };
  //Select event listener.
  google.visualization.events.addListener(chart, 'select', selectHandler);
}

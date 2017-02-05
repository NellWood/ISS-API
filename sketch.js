function setup() {
  
  var url = 'http://api.open-notify.org/iss-now.json';
  
  //make the ISS move 1000 =  1second
  setInterval(function() {
    loadJSON(url,gotISS);
  }, 100); 
  
  //loadJSON(path, callback);
 loadJSON(url, gotISS); 
 resizeCanvas(1000, 800);
 background(0);

}


function gotISS(json) {
  //console.log(json);
  var latitude = json.iss_position.latitude;
  var longitude = json.iss_position.longitude;
  
  var x = map(latitude, -180, 180, 0, width);
  var y = map(longitude, -180, 180, 0, height);
  
  //console.log(longitude);
  //console.log(latitude);
  
  fill(255);
  ellipse (x, y, 10, 10);
}

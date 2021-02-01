/* safari bounce fix (https://stackoverflow.com/a/7771215) */

document.ontouchmove = function(event){
    event.preventDefault();
}

function geoip(data) {
  document.querySelector('#ip').innerHTML = data.ip;
  document.querySelector('#geo_info').innerHTML = data.city + ', ' + data.country;
}

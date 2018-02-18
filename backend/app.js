let app = require('express');

//console.log(app);

const nmap = require('node-nmap');
nmap.nmapLocation = 'nmap'; //default 
let quickscan = new nmap.QuickScan('192.168.0.200');

quickscan.on('complete', function(data){
  console.log(data);
});
 
quickscan.on('error', function(error){
  console.log(error);
});
 
quickscan.startScan();

//console.log("lanview backend");
//console.log(quickscan);

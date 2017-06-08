var numposts = 100;
var standardstyling = true;

fungtion startpost(json){
For (var i = 0; i < Numposts; i++){
Var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var Posturl;

if (i == json.feed.entry.length) break;

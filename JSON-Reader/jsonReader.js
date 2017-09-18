/*This script requires you to make your Google Shee public:
  File -> Publish to the web -> Publish

  In the URL, your sheet ID is the long alphanumeric string between d/ and /edit
  example spreadsheet url: https://docs.google.com/spreadsheets/d/1wMH6KvRH8wMkacxWgYK_tVeMt2qpEscBbSa2uihpjs0/edit#gid=0
  This spreadsheet ID is used below.
*/

// use your own spreadsheet Id per above instructions
 var spreadsheetID = "1wMH6KvRH8wMkacxWgYK_tVeMt2qpEscBbSa2uihpjs0";

 //this url returns a JSON object holding the data from your Google Sheet
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  // object to hold all entries in your Google Sheet
  var gigs = data.feed.entry;

  $(gigs).each(function(){
    //Your column headers will vary, ex: gsx$firstName or gsx$nativeLanguage
    //Make the appropriate edits
    //NOTE: I want my venue to be a link to google map directions, so notice the <a> element, and edit as needed
    $('#gigCalendar').append('<tr><td>'+this.gsx$date.$t+'</td><td>'
          +this.gsx$time.$t+'</td><td><a href="'
          +this.gsx$directions.$t+'" target="_blank">'
          +this.gsx$venue.$t+'</a></td><td>'
          +this.gsx$city.$t+'</td></tr>');
  });

 });

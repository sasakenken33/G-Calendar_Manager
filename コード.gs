function postSlack(){
  var today = new Date();
  var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
  
  var event_set = [];
  var events_set = [];
  events.forEach(function(v,i,a){
    event_set = [v.getTitle() + "\t開始時間\t:" + v.getStartTime().toLocaleString() + "\n"];
    events_set.push(event_set);
  });
  
  if (events[0] === undefined){
    events_set.push(["本日の予定は登録されていません。"])
  }
  
  var js_payload = {
    "text": "<@UF1GP08DA>さん、おはようございます！\n本日" + today.toDateString() + "の予定をお知らせします。\n\n" + events_set + "\nカレンダーはこちらからご覧ください。https://calendar.google.com/calendar/r/week",
  };
  
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : JSON.stringify(js_payload)
  };
  var url = "exampleurl";
  UrlFetchApp.fetch(url, options);
}

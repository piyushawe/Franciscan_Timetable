$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/VerifySaveView.feature");
formatter.feature({
  "line": 1,
  "name": "Franciscan Time Table",
  "description": "As a user I would like to verify that\r\nThere are no errors on clicking save or view buttons of time table",
  "id": "franciscan-time-table",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5589321396,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "time table home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDef.user_enter(String)"
});
formatter.result({
  "duration": 24628978348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDef.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 165004666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDef.passes_school_name(String)"
});
formatter.result({
  "duration": 55130,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 4438430788,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 692033714,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "To verify view button on distance building wise",
  "description": "",
  "id": "franciscan-time-table;to-verify-view-button-on-distance-building-wise",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "user open distance building wise page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "click view on distance building wise page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_open_distance_building_wise_page()"
});
formatter.result({
  "duration": 1248116943,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_view_on_distance_building_wise_page()"
});
formatter.result({
  "duration": 1027409091,
  "status": "passed"
});
formatter.after({
  "duration": 2844516042,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/PageVerify.feature");
formatter.feature({
  "line": 1,
  "name": "Franciscan TimeTable",
  "description": "    As a user I would like to verify that \r\n    The page is loaded successfully",
  "id": "franciscan-timetable",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3955106584,
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
  "duration": 962685394,
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
  "duration": 163919586,
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
  "duration": 72430,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 2695693993,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 392397027,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 168,
      "value": "#substitution"
    }
  ],
  "line": 170,
  "name": "To verify substitution page",
  "description": "",
  "id": "franciscan-timetable;to-verify-substitution-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 169,
      "name": "@scenario27"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "user open substitution page",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "verify substitution page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_open_substitution_page()"
});
formatter.result({
  "duration": 583046691,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.verify_substitution_page()"
});
formatter.result({
  "duration": 1276199165,
  "status": "passed"
});
formatter.after({
  "duration": 3195745017,
  "status": "passed"
});
});
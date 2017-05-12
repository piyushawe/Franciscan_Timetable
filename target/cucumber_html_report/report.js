$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Reports.feature");
formatter.feature({
  "line": 1,
  "name": "Time Table reports",
  "description": "   As a user I would like to open all time table reports\r\n   So that I can verify that there is no problem in report loading",
  "id": "time-table-reports",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 94,
      "value": "#teachers time table"
    }
  ],
  "line": 96,
  "name": "To open teachers time table page",
  "description": "",
  "id": "time-table-reports;to-open-teachers-time-table-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "user opens teachers time table page",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "select teachers \"\u003cteacher\u003e\" on class time table page",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "click show to open teachers time table report",
  "keyword": "Then "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-teachers-time-table-page;",
  "rows": [
    {
      "cells": [
        "teacher"
      ],
      "line": 102,
      "id": "time-table-reports;to-open-teachers-time-table-page;;1"
    },
    {
      "cells": [
        "ABHINAV"
      ],
      "line": 103,
      "id": "time-table-reports;to-open-teachers-time-table-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3994042191,
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
  "duration": 823950646,
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
  "duration": 153947661,
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
  "duration": 90905,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 2630902314,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 480288527,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "To open teachers time table page",
  "description": "",
  "id": "time-table-reports;to-open-teachers-time-table-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 95,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "user opens teachers time table page",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "select teachers \"ABHINAV\" on class time table page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "click show to open teachers time table report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_teachers_time_table_page()"
});
formatter.result({
  "duration": 1311556749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABHINAV",
      "offset": 17
    }
  ],
  "location": "MyStepDef.select_teachers_on_class_time_table_page(String)"
});
formatter.result({
  "duration": 100623258,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_teachers_time_table_report()"
});
formatter.result({
  "duration": 5886996920,
  "status": "passed"
});
formatter.after({
  "duration": 2709924150,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Reports.feature");
formatter.feature({
  "line": 1,
  "name": "Time Table reports",
  "description": "   As a user I would like to open all time table reports\n   So that I can verify that there is no problem in report loading",
  "id": "time-table-reports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4866920361,
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
  "duration": 929575156,
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
  "duration": 208167041,
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
  "duration": 63047,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 4076140435,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 891845100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#master requirement"
    }
  ],
  "line": 14,
  "name": "To open master requirement report when class list is selected",
  "description": "",
  "id": "time-table-reports;to-open-master-requirement-report-when-class-list-is-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user opens master requirement page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "select \"Class List\" on master requirement page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click show to open master requirement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_master_requirement_page()"
});
formatter.result({
  "duration": 1694059140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Class List",
      "offset": 8
    }
  ],
  "location": "MyStepDef.select_on_master_requirement_page(String)"
});
formatter.result({
  "duration": 181863181,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_master_requirement_report()"
});
formatter.result({
  "duration": 8237202747,
  "status": "passed"
});
formatter.after({
  "duration": 3021612565,
  "status": "passed"
});
formatter.before({
  "duration": 3471256656,
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
  "duration": 1155137933,
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
  "duration": 249222467,
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
  "duration": 75363,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3669050533,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 356843666,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To open master requirement report when subject list is selected",
  "description": "",
  "id": "time-table-reports;to-open-master-requirement-report-when-subject-list-is-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user opens master requirement page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "select \"Subject List\" on master requirement page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click show to open master requirement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_master_requirement_page()"
});
formatter.result({
  "duration": 2999748105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject List",
      "offset": 8
    }
  ],
  "location": "MyStepDef.select_on_master_requirement_page(String)"
});
formatter.result({
  "duration": 145893167,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_master_requirement_report()"
});
formatter.result({
  "duration": 7803485247,
  "status": "passed"
});
formatter.after({
  "duration": 2664523454,
  "status": "passed"
});
formatter.before({
  "duration": 3354965740,
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
  "duration": 1569446293,
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
  "duration": 212698812,
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
  "duration": 70378,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3811184037,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1296326902,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To open master requirement report when teacher, class, subject, no of periods is selected",
  "description": "",
  "id": "time-table-reports;to-open-master-requirement-report-when-teacher,-class,-subject,-no-of-periods-is-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user opens master requirement page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select \"Teacher,Class,Subject,No. Of Periods\" on master requirement page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click show to open master requirement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_master_requirement_page()"
});
formatter.result({
  "duration": 1623241644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher,Class,Subject,No. Of Periods",
      "offset": 8
    }
  ],
  "location": "MyStepDef.select_on_master_requirement_page(String)"
});
formatter.result({
  "duration": 137397636,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_master_requirement_report()"
});
formatter.result({
  "duration": 7358788451,
  "status": "passed"
});
formatter.after({
  "duration": 3018875731,
  "status": "passed"
});
formatter.before({
  "duration": 3345463508,
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
  "duration": 970249074,
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
  "duration": 172471501,
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
  "duration": 51317,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 5122271597,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 624110522,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "To open master requirement report when subject taught by teacher is selected",
  "description": "",
  "id": "time-table-reports;to-open-master-requirement-report-when-subject-taught-by-teacher-is-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user opens master requirement page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "select \"Subject Taught ByTeacher\" on master requirement page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click show to open master requirement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_master_requirement_page()"
});
formatter.result({
  "duration": 3145357413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Subject Taught ByTeacher",
      "offset": 8
    }
  ],
  "location": "MyStepDef.select_on_master_requirement_page(String)"
});
formatter.result({
  "duration": 138156255,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_master_requirement_report()"
});
formatter.result({
  "duration": 7631214323,
  "status": "passed"
});
formatter.after({
  "duration": 2853023301,
  "status": "passed"
});
formatter.before({
  "duration": 3409613547,
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
  "duration": 1544896611,
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
  "duration": 232101206,
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
  "duration": 49558,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3921239736,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1846365815,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To open master requirement report when class teachers detail is selected",
  "description": "",
  "id": "time-table-reports;to-open-master-requirement-report-when-class-teachers-detail-is-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user opens master requirement page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "select \"Class Teachers Detail\" on master requirement page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "click show to open master requirement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_master_requirement_page()"
});
formatter.result({
  "duration": 6466012599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Class Teachers Detail",
      "offset": 8
    }
  ],
  "location": "MyStepDef.select_on_master_requirement_page(String)"
});
formatter.result({
  "duration": 134037957,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_master_requirement_report()"
});
formatter.result({
  "duration": 7749876105,
  "status": "passed"
});
formatter.after({
  "duration": 2830784664,
  "status": "passed"
});
formatter.before({
  "duration": 3556236009,
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
  "duration": 1966675034,
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
  "duration": 177477152,
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
  "duration": 51318,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3724429394,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 3236521252,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#subject details"
    }
  ],
  "line": 45,
  "name": "To open subject details page",
  "description": "",
  "id": "time-table-reports;to-open-subject-details-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user opens subject details page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "click show to open subject details report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_subject_details_page()"
});
formatter.result({
  "duration": 1716478414,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_subject_details_report()"
});
formatter.result({
  "duration": 5597682035,
  "status": "passed"
});
formatter.after({
  "duration": 2785728823,
  "status": "passed"
});
formatter.before({
  "duration": 3561658944,
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
  "duration": 3051999240,
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
  "duration": 206942167,
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
  "duration": 61581,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 7948596335,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1346312739,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 49,
      "value": "#class teacher"
    }
  ],
  "line": 51,
  "name": "To open class teacher page",
  "description": "",
  "id": "time-table-reports;to-open-class-teacher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@scenario7"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user opens class teacher page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "click show to open class teacher report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_class_teacher_page()"
});
formatter.result({
  "duration": 1332684876,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_class_teacher_report()"
});
formatter.result({
  "duration": 5573433513,
  "status": "passed"
});
formatter.after({
  "duration": 2833965174,
  "status": "passed"
});
formatter.before({
  "duration": 3617852432,
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
  "duration": 1485789172,
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
  "duration": 197477175,
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
  "duration": 68326,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 5614731158,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 593638806,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "#parallel allocation details"
    }
  ],
  "line": 57,
  "name": "To open parallel allocation details page",
  "description": "",
  "id": "time-table-reports;to-open-parallel-allocation-details-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "user opens parallel allocation details page",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "click show to open parallel allocation details report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_parallel_allocation_details_page()"
});
formatter.result({
  "duration": 3327300356,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_parallel_allocation_details_report()"
});
formatter.result({
  "duration": 5859756445,
  "status": "passed"
});
formatter.after({
  "duration": 2685228433,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 61,
      "value": "#subject teacher details"
    }
  ],
  "line": 63,
  "name": "To open subject teacher details page",
  "description": "",
  "id": "time-table-reports;to-open-subject-teacher-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user opens subject teacher details page",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "select teacher \"\u003cteacher\u003e\" on subject teacher details page",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "click show to open subject teacher details report",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-subject-teacher-details-page;",
  "rows": [
    {
      "cells": [
        "teacher"
      ],
      "line": 69,
      "id": "time-table-reports;to-open-subject-teacher-details-page;;1"
    },
    {
      "cells": [
        "ABHINAV"
      ],
      "line": 70,
      "id": "time-table-reports;to-open-subject-teacher-details-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3474906940,
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
  "duration": 2857633368,
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
  "duration": 161730026,
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
  "duration": 54837,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 6354418843,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 3825669927,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "To open subject teacher details page",
  "description": "",
  "id": "time-table-reports;to-open-subject-teacher-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "user opens subject teacher details page",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "select teacher \"ABHINAV\" on subject teacher details page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "click show to open subject teacher details report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_subject_teacher_details_page()"
});
formatter.result({
  "duration": 7962559375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABHINAV",
      "offset": 16
    }
  ],
  "location": "MyStepDef.select_teacher_on_subject_teacher_details_page(String)"
});
formatter.result({
  "duration": 66003332,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: ABHINAV\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.SubjectTeacherDetails.selectTeacherSubjectDetail(SubjectTeacherDetails.java:36)\r\n\tat stepDef.MyStepDef.select_teacher_on_subject_teacher_details_page(MyStepDef.java:180)\r\n\tat ✽.And select teacher \"ABHINAV\" on subject teacher details page(feature/Reports.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_subject_teacher_details_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2686048926,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "#teachers wing wise"
    }
  ],
  "line": 74,
  "name": "To open teachers wing wise page",
  "description": "",
  "id": "time-table-reports;to-open-teachers-wing-wise-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "user opens teachers wing wise page",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "select teacher \"\u003cwing\u003e\" on teachers wing wise page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "click show to open teachers wing wise report",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-teachers-wing-wise-page;",
  "rows": [
    {
      "cells": [
        "wing"
      ],
      "line": 80,
      "id": "time-table-reports;to-open-teachers-wing-wise-page;;1"
    },
    {
      "cells": [
        "Middle"
      ],
      "line": 81,
      "id": "time-table-reports;to-open-teachers-wing-wise-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3360501868,
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
  "duration": 2171254251,
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
  "duration": 174344735,
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
  "duration": 52197,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 5111794627,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 444759843,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "To open teachers wing wise page",
  "description": "",
  "id": "time-table-reports;to-open-teachers-wing-wise-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "user opens teachers wing wise page",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "select teacher \"Middle\" on teachers wing wise page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "click show to open teachers wing wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_teachers_wing_wise_page()"
});
formatter.result({
  "duration": 106073758,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Teachers WingWise\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 43 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir4228_5494}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 120da0ea1cc818ef8537cf9fa0d9770b\n*** Element info: {Using\u003dlink text, value\u003dTeachers WingWise}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat pageObjects.TeachersWingWise.openTeachersWingWise(TeachersWingWise.java:31)\r\n\tat stepDef.MyStepDef.user_opens_teachers_wing_wise_page(MyStepDef.java:193)\r\n\tat ✽.When user opens teachers wing wise page(feature/Reports.feature:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Middle",
      "offset": 16
    }
  ],
  "location": "MyStepDef.select_teacher_on_teachers_wing_wise_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_teachers_wing_wise_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2867832345,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 83,
      "value": "#class time table"
    }
  ],
  "line": 85,
  "name": "To open class time table page",
  "description": "",
  "id": "time-table-reports;to-open-class-time-table-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "user opens class time table page",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "select class \"\u003cclass\u003e\" on class time table page",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "click show to open class time table report",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-class-time-table-page;",
  "rows": [
    {
      "cells": [
        "class"
      ],
      "line": 91,
      "id": "time-table-reports;to-open-class-time-table-page;;1"
    },
    {
      "cells": [
        "1-A"
      ],
      "line": 92,
      "id": "time-table-reports;to-open-class-time-table-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3537726831,
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
  "duration": 4115222339,
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
  "duration": 162964870,
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
  "duration": 48971,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 21188255869,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 768763860,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "To open class time table page",
  "description": "",
  "id": "time-table-reports;to-open-class-time-table-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "user opens class time table page",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "select class \"1-A\" on class time table page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "click show to open class time table report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_class_time_table_page()"
});
formatter.result({
  "duration": 6271802146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1-A",
      "offset": 14
    }
  ],
  "location": "MyStepDef.select_class_on_class_time_table_page(String)"
});
formatter.result({
  "duration": 97577347,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_class_time_table_report()"
});
formatter.result({
  "duration": 7275699340,
  "status": "passed"
});
formatter.after({
  "duration": 2686786431,
  "status": "passed"
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
  "duration": 3466710517,
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
  "duration": 3516000781,
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
  "duration": 169723232,
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
  "duration": 71551,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 15355997075,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1947427177,
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
  "duration": 12961075566,
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
  "duration": 54843693,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: ABHINAV\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.TeachersTimeTable.selectTeacher(TeachersTimeTable.java:36)\r\n\tat stepDef.MyStepDef.select_teachers_on_class_time_table_page(MyStepDef.java:237)\r\n\tat ✽.And select teachers \"ABHINAV\" on class time table page(feature/Reports.feature:98)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_teachers_time_table_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2851643302,
  "status": "passed"
});
formatter.before({
  "duration": 3389501798,
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
  "duration": 5232279497,
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
  "duration": 155959305,
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
  "duration": 52490,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 13111639795,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 9676147297,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 105,
      "value": "#consecutive allocation report"
    }
  ],
  "line": 107,
  "name": "To open consecutive allocation report page",
  "description": "",
  "id": "time-table-reports;to-open-consecutive-allocation-report-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 106,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "user opens consecutive allocation report page",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "click show to open consecutive allocation report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_consecutive_allocation_report_page()"
});
formatter.result({
  "duration": 27804345033,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_consecutive_allocation_report()"
});
formatter.result({
  "duration": 5995177919,
  "status": "passed"
});
formatter.after({
  "duration": 2690527034,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 111,
      "value": "#class and resource information"
    }
  ],
  "line": 113,
  "name": "To open class and resource information page",
  "description": "",
  "id": "time-table-reports;to-open-class-and-resource-information-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "user opens class and resource information page",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "select class \"\u003cclass\u003e\" on class and resource information page",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "click show to open class and resource information report",
  "keyword": "Then "
});
formatter.examples({
  "line": 118,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-class-and-resource-information-page;",
  "rows": [
    {
      "cells": [
        "class"
      ],
      "line": 119,
      "id": "time-table-reports;to-open-class-and-resource-information-page;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 120,
      "id": "time-table-reports;to-open-class-and-resource-information-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3482530953,
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
  "duration": 803601078,
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
  "duration": 162165197,
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
  "duration": 51318,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3883571847,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 644034302,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "To open class and resource information page",
  "description": "",
  "id": "time-table-reports;to-open-class-and-resource-information-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "user opens class and resource information page",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "select class \"1\" on class and resource information page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "click show to open class and resource information report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_class_and_resource_information_page()"
});
formatter.result({
  "duration": 1201977569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyStepDef.select_class_on_class_and_resource_information_page(String)"
});
formatter.result({
  "duration": 93213018,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_class_and_resource_information_report()"
});
formatter.result({
  "duration": 5810465593,
  "status": "passed"
});
formatter.after({
  "duration": 2866476098,
  "status": "passed"
});
formatter.before({
  "duration": 3339549978,
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
  "duration": 1184302080,
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
  "duration": 171289147,
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
  "duration": 46039,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3994620758,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 424775362,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 122,
      "value": "#free teachers per week"
    }
  ],
  "line": 124,
  "name": "To open free teachers per week page",
  "description": "",
  "id": "time-table-reports;to-open-free-teachers-per-week-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 123,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "user opens free teachers per week page",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "click show to open free teachers per week report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_free_teachers_per_week_page()"
});
formatter.result({
  "duration": 2961328929,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_free_teachers_per_week_report()"
});
formatter.result({
  "duration": 5844152127,
  "status": "passed"
});
formatter.after({
  "duration": 2873483423,
  "status": "passed"
});
formatter.before({
  "duration": 3347795080,
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
  "duration": 3487864156,
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
  "duration": 174342096,
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
  "duration": 304972,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 4311396638,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 797742677,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 128,
      "value": "#unallocated periods"
    }
  ],
  "line": 130,
  "name": "To open unallocated periods page",
  "description": "",
  "id": "time-table-reports;to-open-unallocated-periods-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 129,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 131,
  "name": "user opens unallocated periods page",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "click show to open unallocated periods report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_unallocated_periods_page()"
});
formatter.result({
  "duration": 1745975685,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_unallocated_periods_report()"
});
formatter.result({
  "duration": 5830303454,
  "status": "passed"
});
formatter.after({
  "duration": 2849491488,
  "status": "passed"
});
formatter.before({
  "duration": 3741607837,
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
  "duration": 782770591,
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
  "duration": 152356527,
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
  "duration": 58942,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3691796480,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 579615946,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 134,
      "value": "#free teachers list day wise"
    }
  ],
  "line": 136,
  "name": "To open free teachers list day wise page",
  "description": "",
  "id": "time-table-reports;to-open-free-teachers-list-day-wise-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 135,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 137,
  "name": "user opens free teachers list day wise page",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "click show to open free teachers list day wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_free_teachers_list_day_wise_page()"
});
formatter.result({
  "duration": 1559795680,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_free_teachers_list_day_wise_report()"
});
formatter.result({
  "duration": 5766931680,
  "status": "passed"
});
formatter.after({
  "duration": 2871308149,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 140,
      "value": "#class and subject taught"
    }
  ],
  "line": 142,
  "name": "To open class and subject taught page",
  "description": "",
  "id": "time-table-reports;to-open-class-and-subject-taught-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 141,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 143,
  "name": "user opens class and subject taught page",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "select class \"\u003cclass\u003e\" on class and subject taught page",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "click show to open class and subject taught report",
  "keyword": "Then "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-class-and-subject-taught-page;",
  "rows": [
    {
      "cells": [
        "class"
      ],
      "line": 148,
      "id": "time-table-reports;to-open-class-and-subject-taught-page;;1"
    },
    {
      "cells": [
        "1-A"
      ],
      "line": 149,
      "id": "time-table-reports;to-open-class-and-subject-taught-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3349786197,
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
  "duration": 1452077711,
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
  "duration": 168289862,
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
  "duration": 62754,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 4348875385,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 947833026,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "To open class and subject taught page",
  "description": "",
  "id": "time-table-reports;to-open-class-and-subject-taught-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 141,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 143,
  "name": "user opens class and subject taught page",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "select class \"1-A\" on class and subject taught page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "click show to open class and subject taught report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_class_and_subject_taught_page()"
});
formatter.result({
  "duration": 2694958222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1-A",
      "offset": 14
    }
  ],
  "location": "MyStepDef.select_class_on_class_and_subject_taught_page(String)"
});
formatter.result({
  "duration": 93912402,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_class_and_subject_taught_report()"
});
formatter.result({
  "duration": 5827387450,
  "status": "passed"
});
formatter.after({
  "duration": 2847420316,
  "status": "passed"
});
formatter.before({
  "duration": 3351438032,
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
  "duration": 2526928466,
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
  "duration": 164959213,
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
  "duration": 76536,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3181333585,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 577309300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 151,
      "value": "#teachers work load"
    }
  ],
  "line": 153,
  "name": "To open teachers work load page",
  "description": "",
  "id": "time-table-reports;to-open-teachers-work-load-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 152,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 154,
  "name": "user opens teachers work load page",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "click show to open teachers work load report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_teachers_work_load_page()"
});
formatter.result({
  "duration": 2473232818,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_teachers_work_load_report()"
});
formatter.result({
  "duration": 5724525284,
  "status": "passed"
});
formatter.after({
  "duration": 2695296623,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 157,
      "value": "#resource timetable"
    }
  ],
  "line": 159,
  "name": "To open resource timetable page",
  "description": "",
  "id": "time-table-reports;to-open-resource-timetable-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 158,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 160,
  "name": "user opens resource timetable page",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "select resource \"\u003cresource\u003e\" on resource timetable page",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "click show to open resource timetable report",
  "keyword": "Then "
});
formatter.examples({
  "line": 164,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-resource-timetable-page;",
  "rows": [
    {
      "cells": [
        "resource"
      ],
      "line": 165,
      "id": "time-table-reports;to-open-resource-timetable-page;;1"
    },
    {
      "cells": [
        "Physics Lab"
      ],
      "line": 166,
      "id": "time-table-reports;to-open-resource-timetable-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3429313290,
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
  "duration": 1918367425,
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
  "duration": 163648418,
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
  "duration": 45746,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 4827919391,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 941129207,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "To open resource timetable page",
  "description": "",
  "id": "time-table-reports;to-open-resource-timetable-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 158,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 160,
  "name": "user opens resource timetable page",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "select resource \"Physics Lab\" on resource timetable page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "click show to open resource timetable report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_resource_timetable_page()"
});
formatter.result({
  "duration": 1238750189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Physics Lab",
      "offset": 17
    }
  ],
  "location": "MyStepDef.select_resource_on_resource_timetable_page(String)"
});
formatter.result({
  "duration": 70791690,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Physics Lab\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.ResourceTimeTable.selectResource(ResourceTimeTable.java:36)\r\n\tat stepDef.MyStepDef.select_resource_on_resource_timetable_page(MyStepDef.java:359)\r\n\tat ✽.And select resource \"Physics Lab\" on resource timetable page(feature/Reports.feature:161)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_resource_timetable_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2860143525,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 168,
      "value": "#particular class time table"
    }
  ],
  "line": 170,
  "name": "To open particular class time table page",
  "description": "",
  "id": "time-table-reports;to-open-particular-class-time-table-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 169,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "user opens particular class time table page",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "select class \"\u003cclass\u003e\" on particular class time table page",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "click show to open particular class time table report",
  "keyword": "Then "
});
formatter.examples({
  "line": 175,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-particular-class-time-table-page;",
  "rows": [
    {
      "cells": [
        "class"
      ],
      "line": 176,
      "id": "time-table-reports;to-open-particular-class-time-table-page;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 177,
      "id": "time-table-reports;to-open-particular-class-time-table-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3444308250,
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
  "duration": 1551428297,
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
  "duration": 184351052,
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
  "duration": 37828,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 4211640792,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1807258986,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "To open particular class time table page",
  "description": "",
  "id": "time-table-reports;to-open-particular-class-time-table-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 169,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 171,
  "name": "user opens particular class time table page",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "select class \"1\" on particular class time table page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "click show to open particular class time table report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_particular_class_time_table_page()"
});
formatter.result({
  "duration": 1546090989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyStepDef.select_class_on_particular_class_time_table_page(String)"
});
formatter.result({
  "duration": 99193700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_particular_class_time_table_report()"
});
formatter.result({
  "duration": 5889503558,
  "status": "passed"
});
formatter.after({
  "duration": 2869089769,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 179,
      "value": "#subject in class with teacher allocated"
    }
  ],
  "line": 181,
  "name": "To open subject in class with teacher allocated page",
  "description": "",
  "id": "time-table-reports;to-open-subject-in-class-with-teacher-allocated-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 180,
      "name": "@scenario22"
    }
  ]
});
formatter.step({
  "line": 182,
  "name": "user opens subject in class with teacher allocated page",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "select class \"\u003cclass\u003e\" on subject in class with teacher allocated page",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "click show to open subject in class with teacher allocated report",
  "keyword": "Then "
});
formatter.examples({
  "line": 186,
  "name": "",
  "description": "",
  "id": "time-table-reports;to-open-subject-in-class-with-teacher-allocated-page;",
  "rows": [
    {
      "cells": [
        "class"
      ],
      "line": 187,
      "id": "time-table-reports;to-open-subject-in-class-with-teacher-allocated-page;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 188,
      "id": "time-table-reports;to-open-subject-in-class-with-teacher-allocated-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3508206394,
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
  "duration": 971419699,
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
  "duration": 158854489,
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
  "duration": 38708,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3254679712,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1415475173,
  "status": "passed"
});
formatter.scenario({
  "line": 188,
  "name": "To open subject in class with teacher allocated page",
  "description": "",
  "id": "time-table-reports;to-open-subject-in-class-with-teacher-allocated-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 180,
      "name": "@scenario22"
    }
  ]
});
formatter.step({
  "line": 182,
  "name": "user opens subject in class with teacher allocated page",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "select class \"1\" on subject in class with teacher allocated page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "click show to open subject in class with teacher allocated report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_subject_in_class_with_teacher_allocated_page()"
});
formatter.result({
  "duration": 2179965315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyStepDef.select_class_on_subject_in_class_with_teacher_allocated_page(String)"
});
formatter.result({
  "duration": 93675462,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_subject_in_class_with_teacher_allocated_report()"
});
formatter.result({
  "duration": 6423377768,
  "status": "passed"
});
formatter.after({
  "duration": 2847835840,
  "status": "passed"
});
formatter.before({
  "duration": 3517564057,
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
  "duration": 1221576437,
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
  "duration": 168501290,
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
  "duration": 52197,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 6915712113,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 932122847,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 190,
      "value": "#substitution date wise"
    }
  ],
  "line": 192,
  "name": "To open substitution date wise page",
  "description": "",
  "id": "time-table-reports;to-open-substitution-date-wise-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 191,
      "name": "@scenario23"
    }
  ]
});
formatter.step({
  "line": 193,
  "name": "user opens substitution date wise page",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on substitution date wise page",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "select to date as month \"May\" year \"2017\" and day \"15\" on substitution date wise page",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "click show to open substitution date wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_substitution_date_wise_page()"
});
formatter.result({
  "duration": 2451902939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDef.select_from_date_as_month_year_and_day_on_substitution_date_wise_page(String,String,String)"
});
formatter.result({
  "duration": 4550993418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "15",
      "offset": 51
    }
  ],
  "location": "MyStepDef.select_to_date_as_month_year_and_day_on_substitution_date_wise_page(String,String,String)"
});
formatter.result({
  "duration": 4766408242,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_substitution_date_wise_report()"
});
formatter.result({
  "duration": 6072898345,
  "status": "passed"
});
formatter.after({
  "duration": 2851372932,
  "status": "passed"
});
formatter.before({
  "duration": 3506434915,
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
  "duration": 1501202001,
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
  "duration": 204866008,
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
  "duration": 39588,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 3349819040,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});
formatter.result({
  "duration": 1510617434,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 198,
      "value": "#subject summary"
    }
  ],
  "line": 200,
  "name": "To open subject summary page",
  "description": "",
  "id": "time-table-reports;to-open-subject-summary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 199,
      "name": "@scenario24"
    }
  ]
});
formatter.step({
  "line": 201,
  "name": "user opens subject summary page",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "click show to open subject summary report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_opens_subject_summary_page()"
});
formatter.result({
  "duration": 2030540921,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_show_to_open_subject_summary_report()"
});
formatter.result({
  "duration": 5731907080,
  "status": "passed"
});
formatter.after({
  "duration": 2818450296,
  "status": "passed"
});
formatter.before({
  "duration": 3667884894,
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
  "duration": 10354586871,
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
  "duration": 176568100,
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
  "duration": 38708,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.click_signin()"
});
formatter.result({
  "duration": 14615277762,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.time_table_home_page_is_opened()"
});

Feature: Time Table reports
     As a user I would like to open all time table reports
     So that I can verify that there is no problem in report loading

  Background: 
    Given user enter " http://192.168.10.101:8069/Modules.aspx"
    When user enter username "admin" and password "admin@123"
    And passes school name "rosary"
    And click signin
    Then time table home page is opened

  #master requirement
  @scenario1
  Scenario: To open master requirement report when class list is selected
    When user opens master requirement page
    And select "Class List" on master requirement page
    Then click show to open master requirement report

  @scenario2
  Scenario: To open master requirement report when subject list is selected
    When user opens master requirement page
    And select "Subject List" on master requirement page
    Then click show to open master requirement report

  @scenario3
  Scenario: To open master requirement report when teacher, class, subject, no of periods is selected
    When user opens master requirement page
    And select "Teacher,Class,Subject,No. Of Periods" on master requirement page
    Then click show to open master requirement report

  @scenario4
  Scenario: To open master requirement report when subject taught by teacher is selected
    When user opens master requirement page
    And select "Subject Taught ByTeacher" on master requirement page
    Then click show to open master requirement report

  @scenario5
  Scenario: To open master requirement report when class teachers detail is selected
    When user opens master requirement page
    And select "Class Teachers Detail" on master requirement page
    Then click show to open master requirement report

  #subject details
  @scenario6
  Scenario: To open subject details page
    When user opens subject details page
    Then click show to open subject details report

  #class teacher
  @scenario7
  Scenario: To open class teacher page
    When user opens class teacher page
    Then click show to open class teacher report

  #parallel allocation details
  @scenario8
  Scenario: To open parallel allocation details page
    When user opens parallel allocation details page
    Then click show to open parallel allocation details report

  #subject teacher details
  @scenario9
  Scenario Outline: To open subject teacher details page
    When user opens subject teacher details page
    And select teacher "<teacher>" on subject teacher details page
    Then click show to open subject teacher details report

    Examples: 
      | teacher |
      | ABHINAV |

  #teachers wing wise
  @scenario10
  Scenario Outline: To open teachers wing wise page
    When user opens teachers wing wise page
    And select teacher "<wing>" on teachers wing wise page
    Then click show to open teachers wing wise report

    Examples: 
      | wing   |
      | Middle |

  #class time table
  @scenario11
  Scenario Outline: To open class time table page
    When user opens class time table page
    And select class "<class>" on class time table page
    Then click show to open class time table report

    Examples: 
      | class |
      | 1-A   |

  #teachers time table
  @scenario12
  Scenario Outline: To open teachers time table page
    When user opens teachers time table page
    And select teachers "<teacher>" on class time table page
    Then click show to open teachers time table report

    Examples: 
      | teacher |
      | ABHINAV |

  #consecutive allocation report
  @scenario13
  Scenario: To open consecutive allocation report page
    When user opens consecutive allocation report page
    Then click show to open consecutive allocation report

  #class and resource information
  @scenario14
  Scenario Outline: To open class and resource information page
    When user opens class and resource information page
    And select class "<class>" on class and resource information page
    Then click show to open class and resource information report

    Examples: 
      | class |
      |     1 |

  #free teachers per week
  @scenario15
  Scenario: To open free teachers per week page
    When user opens free teachers per week page
    Then click show to open free teachers per week report

  #unallocated periods
  @scenario16
  Scenario: To open unallocated periods page
    When user opens unallocated periods page
    Then click show to open unallocated periods report

  #free teachers list day wise
  @scenario17
  Scenario: To open free teachers list day wise page
    When user opens free teachers list day wise page
    Then click show to open free teachers list day wise report

  #class and subject taught
  @scenario18
  Scenario Outline: To open class and subject taught page
    When user opens class and subject taught page
    And select class "<class>" on class and subject taught page
    Then click show to open class and subject taught report

    Examples: 
      | class |
      | 1-A   |

  #teachers work load
  @scenario19
  Scenario: To open teachers work load page
    When user opens teachers work load page
    Then click show to open teachers work load report

  #resource timetable
  @scenario20
  Scenario Outline: To open resource timetable page
    When user opens resource timetable page
    And select resource "<resource>" on resource timetable page
    Then click show to open resource timetable report

    Examples: 
      | resource    |
      | Physics Lab |

  #particular class time table
  @scenario21
  Scenario Outline: To open particular class time table page
    When user opens particular class time table page
    And select class "<class>" on particular class time table page
    Then click show to open particular class time table report

    Examples: 
      | class |
      |     1 |

  #subject in class with teacher allocated
  @scenario22
  Scenario Outline: To open subject in class with teacher allocated page
    When user opens subject in class with teacher allocated page
    And select class "<class>" on subject in class with teacher allocated page
    Then click show to open subject in class with teacher allocated report

    Examples: 
      | class |
      |     1 |

  #substitution date wise
  @scenario23
  Scenario: To open substitution date wise page
    When user opens substitution date wise page
    And select from date as month "May" year "2017" and day "1" on substitution date wise page
    And select to date as month "May" year "2017" and day "15" on substitution date wise page
    Then click show to open substitution date wise report

  #subject summary
  @scenario24
  Scenario: To open subject summary page
    When user opens subject summary page
    Then click show to open subject summary report

  #assignment status
  @scenario25
  Scenario: To open assignment status page
    When user opens assignment status page
    Then click show to open assignment status report

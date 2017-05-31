Feature: Franciscan TimeTable
      As a user I would like to verify that 
      The page is loaded successfully

  Background: 
    Given user enter "http://qaerp.franciscanecare.net"
    When user enter username "admin" and password "Admin#franciscan"
    And passes school name "qaerp"
    And click signin
    Then time table home page is opened

  #change academic
  @scenario1
  Scenario: To verify change academic page
    When user open change academic page
    Then verify change academic page

  #define subject
  @scenario2
  Scenario: To verify define subject page
    When user open define subject page
    Then verify define subject page

  #define resources
  @scenario3
  Scenario: To verify define resources page
    When user open define resources page
    Then verify define resources page

  #class setting
  @scenario4
  Scenario: To verify class setting page
    When user open class setting page
    Then verify class setting page

  #define class teacher
  @scenario5
  Scenario: To verify define class teacher page
    When user open define class teacher page
    Then verify define class teacher page

  #assign subject to class
  @scenario6
  Scenario: To verify assign subject to class page
    When user open assign subject to class page
    Then verify assign subject to class page

  #relate resource to subject
  @scenario7
  Scenario: To verify relate resource to subject page
    When user open relate resource to subject page
    Then verify relate resource to subject page

  #period allotment
  @scenario8
  Scenario: To verify period allotment page
    When user open period allotment page
    Then verify period allotment page

  #class teacher subject
  @scenario9
  Scenario: To verify class teacher subject page
    When user open class teacher subject page
    Then verify class teacher subject page

  #time table global setting
  @scenario10
  Scenario: To verify time table global setting page
    When user open time table global setting page
    Then verify time table global setting page

  #teacher setting
  @scenario11
  Scenario: To verify teacher setting page
    When user open teacher setting page
    Then verify teacher setting page

  #import export subjects
  @scenario12
  Scenario: To verify import export subjects page
    When user open import export subjects page
    Then verify import export subjects page

  #fixed allocation
  @scenario13
  Scenario: To verify fixed allocation page
    When user open fixed allocation page
    Then verify fixed allocation page

  #parallel allocation
  @scenario14
  Scenario: To verify parallel allocation page
    When user open parallel allocation page
    Then verify parallel allocation page

  #consecutive allocation
  @scenario15
  Scenario: To verify consecutive allocation page
    When user open consecutive allocation page
    Then verify consecutive allocation page

  #preference allocation
  @scenario16
  Scenario: To verify preference allocation page
    When user open preference allocation page
    Then verify preference allocation page

  #define building
  @scenario17
  Scenario: To verify define building page
    When user open define building page
    Then verify define building page

  #distance building to floor
  @scenario18
  Scenario: To verify distance building to floor page
    When user open distance building to floor page
    Then verify distance building to floor page

  #distance building wise
  @scenario19
  Scenario: To verify distance building wise floor page
    When user open distance building wise floor page
    Then verify distance building wise floor page

  #create predefined time table
  @scenario20
  Scenario: To verify create predefined time table page
    When user open create predefined time table page
    Then verify create predefined time table page

  #view and modify time table
  @scenario21
  Scenario: To verify view and modify time table page
    When user open view and modify time table page
    Then verify view and modify time table page

  #replace teacher
  @scenario22
  Scenario: To verify replace teacher page
    When user open replace teacher page
    Then verify replace teacher page

  #assign one teacher time table to another
  @scenario23
  Scenario: To verify assign one teacher time table to another page
    When user open assign one teacher time table to another page
    Then verify assign one teacher time table to another page

  #auto generate time table
  @scenario24
  Scenario: To verify auto generate time table page
    When user open auto generate time table page
    Then verify auto generate time table page

  #modify time table
  @scenario25
  Scenario: To verify modify time table page
    When user open modify time table page
    Then verify modify time table page

  #mark attendance
  @scenario26
  Scenario: To verify mark attendance page
    When user open mark attendance page
    Then verify mark attendance page
    
  #substitution
  @scenario27
  Scenario: To verify substitution page
    When user open substitution page
    Then verify substitution page
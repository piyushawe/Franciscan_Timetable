Feature: Franciscan Time Table
  As a user I would like to verify that
  There are no errors on clicking save or view buttons of time table

  Background:
    Given user enter "http://qaerp.franciscanecare.net"
    When user enter username "admin" and password "Admin#franciscan"
    And passes school name "qaerp"
    And click signin
    Then time table home page is opened

   #define subject
   @scenario1
   Scenario: To verify save button on define subject
    When user open define subject page
    And enter subject name "java" on define subject page
    And enter abbreviation as "jva" on define subject page
    And select subject type on define subject page
    Then click save on define subject page

   @scenario2
   Scenario: To verify view button on define subject
    When user open define subject page
    Then click view on define subject page

   #define resources
   @scenario3
   Scenario: To verify save button on define resources
    When user open define resources page
    And enter resource name "playground" on define resources page
    Then click save on define resources page

   @scenario4
   Scenario: To verify view button on define resources
    When user open define resources page
    Then click view on define resources page

   #define building
  @scenario5
  Scenario: To verify save button on define building
    When user open define building page
    And enter building name "b01" on define building page
    And enter floor no "5" on define building name
    Then click save on define building page

  @scenario6
  Scenario: To verify view button on define building
    When user open define building page
    Then click view on define building page

   #distance building to floor
   @scenario7
   Scenario: To verify save button on distance building to floor
    When user open distance building to floor page
    And select building on distance building to floor page
    And select floor on distance building to floor page
    And enter distance "1" on distance building to floor page
    Then click save on distance building to floor page

   @scenario8
   Scenario: To verify view button on distance building to floor
    When user open distance building to floor page
    Then click view on distance building to floor page

   #distance building wise
   @scenario9
   Scenario: To verify save button on distance building wise
    When user open distance building wise page
    And select building from on distance building wise page
    And select building to on distance building wise page
    And enter distance "5" on distance building wise page
    Then click save on distance building wise page

   @scenario10
   Scenario: To verify view button on distance building wise
    When user open distance building wise page
    Then click view on distance building wise page
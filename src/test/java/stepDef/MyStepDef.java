package stepDef;

import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AssignmentStatus;
import pageObjects.ClassAndResourceInformation;
import pageObjects.ClassAndSubjectTaught;
import pageObjects.ClassTeacher;
import pageObjects.ClassTimeTable;
import pageObjects.ConsecutiveAllocationReport;
import pageObjects.FreeTeachersListDayWise;
import pageObjects.FreeTeachersPerWeek;
import pageObjects.MasterRequirement;
import pageObjects.ParallelAllocationDetails;
import pageObjects.ParticularClassTimeTable;
import pageObjects.ResourceTimeTable;
import pageObjects.SubjectDetails;
import pageObjects.SubjectInClassWithTeacherAllocated;
import pageObjects.SubjectSummary;
import pageObjects.SubjectTeacherDetails;
import pageObjects.SubstitutionDateWise;
import pageObjects.TeachersTimeTable;
import pageObjects.TeachersWingWise;
import pageObjects.TeachersWorkLoad;
import pageObjects.UnallocatedPeriods;

public class MyStepDef {
	WebDriver dr;
	Collection<String>scenario;
	String schoolname;
   
  @Before
  public void launchBrowser(Scenario s)
  {
	  System.setProperty("webdriver.chrome.driver", "D:\\selenium\\chrome\\chromedriver.exe");
	  dr= new ChromeDriver();
	  dr.manage().window().maximize();
	  scenario= s.getSourceTagNames();
  }
  
  @After
  public void closeBrowser() throws InterruptedException
  {
	  Thread.sleep(2000);
	  dr.quit();
  }
  
  @Given("^user enter \"([^\"]*)\"$")
  public void user_enter(String arg1) throws Throwable {
	 dr.get(arg1);
  }

  @When("^user enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
  public void user_enter_username_and_password(String arg1, String arg2) throws Throwable {
	  dr.findElement(By.id("txtUserName")).sendKeys(arg1);
	  dr.findElement(By.id("txtPassword")).sendKeys(arg2);
  }
  
  @When("^passes school name \"([^\"]*)\"$")
  public void passes_school_name(String arg1) throws Throwable {
      schoolname=arg1;
  }

  @When("^click signin$")
  public void click_signin() throws Throwable {
	  dr.findElement(By.id("btnLogin")).click();
	  Thread.sleep(2000);
  }

  @Then("^time table home page is opened$")
  public void time_table_home_page_is_opened() throws Throwable {
     dr.findElement(By.xpath("//img[@src='images/big/Time-Table-Manager.png']")).click();
  }
  
//master requirement
  @When("^user opens master requirement page$")
  public void user_opens_master_requirement_page() throws Throwable {
	  MasterRequirement mr= new MasterRequirement(dr);
	  mr.openMasterRequirement();
  }

  @When("^select \"([^\"]*)\" on master requirement page$")
  public void select_on_master_requirement_page(String arg1) throws Throwable {
	  MasterRequirement mr= new MasterRequirement(dr);
	  mr.selectListType(arg1);
  }

  @Then("^click show to open master requirement report$")
  public void click_show_to_open_master_requirement_report() throws Throwable {
	  MasterRequirement mr= new MasterRequirement(dr);
	  mr.clickShow(schoolname, scenario);
  }

//subject details
  @When("^user opens subject details page$")
  public void user_opens_subject_details_page() throws Throwable {
	  SubjectDetails s= new SubjectDetails(dr);
	  s.openSubjectDetails();
  }
  
  @Then("^click show to open subject details report$")
  public void click_show_to_open_subject_details_report() throws Throwable {
	  SubjectDetails s= new SubjectDetails(dr);
	  s.clickShow(schoolname, scenario);
  }

//class teacher
  @When("^user opens class teacher page$")
  public void user_opens_class_teacher_page() throws Throwable {
	  ClassTeacher c= new ClassTeacher(dr);
	  c.openClassTeacher();
  }

  @Then("^click show to open class teacher report$")
  public void click_show_to_open_class_teacher_report() throws Throwable {
	  ClassTeacher c= new ClassTeacher(dr);
	  c.clickShow(schoolname, scenario);
  }
  
//parallel allocation details
  @When("^user opens parallel allocation details page$")
  public void user_opens_parallel_allocation_details_page() throws Throwable {
	  ParallelAllocationDetails d= new ParallelAllocationDetails(dr);
	  d.openParallelAllocationDetails();
  }

  @Then("^click show to open parallel allocation details report$")
  public void click_show_to_open_parallel_allocation_details_report() throws Throwable {
	  ParallelAllocationDetails d= new ParallelAllocationDetails(dr);
	  d.clickShow(schoolname, scenario);
  }
  
//subject teacher details
  @When("^user opens subject teacher details page$")
  public void user_opens_subject_teacher_details_page() throws Throwable {
	  SubjectTeacherDetails s= new SubjectTeacherDetails(dr);
	  s.openSubjectTeacherDetails();
  }

  @When("^select teacher \"([^\"]*)\" on subject teacher details page$")
  public void select_teacher_on_subject_teacher_details_page(String arg1) throws Throwable {
	  SubjectTeacherDetails s= new SubjectTeacherDetails(dr);
	  s.selectTeacherSubjectDetail(arg1);
  }

  @Then("^click show to open subject teacher details report$")
  public void click_show_to_open_subject_teacher_details_report() throws Throwable {
	  SubjectTeacherDetails s= new SubjectTeacherDetails(dr);
	  s.clickShow(schoolname, scenario);
  }

//teachers wing wise
  @When("^user opens teachers wing wise page$")
  public void user_opens_teachers_wing_wise_page() throws Throwable {
	  TeachersWingWise t= new TeachersWingWise(dr);
	  t.openTeachersWingWise();
  }

  @When("^select teacher \"([^\"]*)\" on teachers wing wise page$")
  public void select_teacher_on_teachers_wing_wise_page(String arg1) throws Throwable {
	  TeachersWingWise t= new TeachersWingWise(dr);
	  t.selectWing(arg1);
  }

  @Then("^click show to open teachers wing wise report$")
  public void click_show_to_open_teachers_wing_wise_report() throws Throwable {
	  TeachersWingWise t= new TeachersWingWise(dr);
	  t.clickShow(schoolname, scenario);
  }
  
//class time table
  @When("^user opens class time table page$")
  public void user_opens_class_time_table_page() throws Throwable {
	  ClassTimeTable tt= new ClassTimeTable(dr);
	  tt.openClassTimeTable();
  }

  @When("^select class \"([^\"]*)\" on class time table page$")
  public void select_class_on_class_time_table_page(String arg1) throws Throwable {
	  ClassTimeTable tt= new ClassTimeTable(dr);
	  tt.selectClass(arg1);
  }

  @Then("^click show to open class time table report$")
  public void click_show_to_open_class_time_table_report() throws Throwable {
	  ClassTimeTable tt= new ClassTimeTable(dr);
	  tt.clickShow(schoolname, scenario);
  }

//teachers time table
  @When("^user opens teachers time table page$")
  public void user_opens_teachers_time_table_page() throws Throwable {
	  TeachersTimeTable tt= new TeachersTimeTable(dr);
	  tt.openTeachersTimeTable();
  }

  @When("^select teachers \"([^\"]*)\" on class time table page$")
  public void select_teachers_on_class_time_table_page(String arg1) throws Throwable {
	  TeachersTimeTable tt= new TeachersTimeTable(dr);
	  tt.selectTeacher(arg1);
  }

  @Then("^click show to open teachers time table report$")
  public void click_show_to_open_teachers_time_table_report() throws Throwable {
	  TeachersTimeTable tt= new TeachersTimeTable(dr);
	  tt.clickShow(schoolname, scenario);
  }
  
//consecutive allocation report
  @When("^user opens consecutive allocation report page$")
  public void user_opens_consecutive_allocation_report_page() throws Throwable {
	  ConsecutiveAllocationReport c= new ConsecutiveAllocationReport(dr);
	  c.openConsecutiveAllocationReport();
  }

  @Then("^click show to open consecutive allocation report$")
  public void click_show_to_open_consecutive_allocation_report() throws Throwable {
	  ConsecutiveAllocationReport c= new ConsecutiveAllocationReport(dr);
	  c.clickShow(schoolname, scenario);
  }

  //class and resource information
  @When("^user opens class and resource information page$")
  public void user_opens_class_and_resource_information_page() throws Throwable {
	  ClassAndResourceInformation c= new ClassAndResourceInformation(dr);
	  c.openClassAndResourceInformation();
  }

  @When("^select class \"([^\"]*)\" on class and resource information page$")
  public void select_class_on_class_and_resource_information_page(String arg1) throws Throwable {
	  ClassAndResourceInformation c= new ClassAndResourceInformation(dr);
	  c.selectClass(arg1);
  }

  @Then("^click show to open class and resource information report$")
  public void click_show_to_open_class_and_resource_information_report() throws Throwable {
	  ClassAndResourceInformation c= new ClassAndResourceInformation(dr);
	  c.clickShow(schoolname, scenario);
  }
  
//free teachers per week
  @When("^user opens free teachers per week page$")
  public void user_opens_free_teachers_per_week_page() throws Throwable {
	  FreeTeachersPerWeek f= new FreeTeachersPerWeek(dr);
	  f.openFreeTeachersPerWeek();
  }

  @Then("^click show to open free teachers per week report$")
  public void click_show_to_open_free_teachers_per_week_report() throws Throwable {
	  FreeTeachersPerWeek f= new FreeTeachersPerWeek(dr);
	  f.clickShow(schoolname, scenario);
  }
  
//unallocated periods
  @When("^user opens unallocated periods page$")
  public void user_opens_unallocated_periods_page() throws Throwable {
	  UnallocatedPeriods up= new UnallocatedPeriods(dr);
	  up.openUnallocatedPeriods();
  }

  @Then("^click show to open unallocated periods report$")
  public void click_show_to_open_unallocated_periods_report() throws Throwable {
	  UnallocatedPeriods up= new UnallocatedPeriods(dr);
	  up.clickShow(schoolname, scenario);
  }
  
//free teachers list day wise
  @When("^user opens free teachers list day wise page$")
  public void user_opens_free_teachers_list_day_wise_page() throws Throwable {
	  FreeTeachersListDayWise f= new FreeTeachersListDayWise(dr);
	  f.openFreeTeachersListDayWise();
  }

  @Then("^click show to open free teachers list day wise report$")
  public void click_show_to_open_free_teachers_list_day_wise_report() throws Throwable {
	  FreeTeachersListDayWise f= new FreeTeachersListDayWise(dr);
	  f.clickShow(schoolname, scenario);
  }
  
//class and subject taught
  @When("^user opens class and subject taught page$")
  public void user_opens_class_and_subject_taught_page() throws Throwable {
	  ClassAndSubjectTaught c= new ClassAndSubjectTaught(dr);
	  c.openClassAndSubjectTaught();
  }

  @When("^select class \"([^\"]*)\" on class and subject taught page$")
  public void select_class_on_class_and_subject_taught_page(String arg1) throws Throwable {
	  ClassAndSubjectTaught c= new ClassAndSubjectTaught(dr);
	  c.selectClass(arg1);
  }

  @Then("^click show to open class and subject taught report$")
  public void click_show_to_open_class_and_subject_taught_report() throws Throwable {
	  ClassAndSubjectTaught c= new ClassAndSubjectTaught(dr);
	  c.clickShow(schoolname, scenario);
  }

//teachers work load
  @When("^user opens teachers work load page$")
  public void user_opens_teachers_work_load_page() throws Throwable {
	  TeachersWorkLoad t= new TeachersWorkLoad(dr);
	  t.openTeachersWorkLoad();
  }

  @Then("^click show to open teachers work load report$")
  public void click_show_to_open_teachers_work_load_report() throws Throwable {
	  TeachersWorkLoad t= new TeachersWorkLoad(dr);
	  t.clickShow(schoolname, scenario);
  }

//resource timetable
  @When("^user opens resource timetable page$")
  public void user_opens_resource_timetable_page() throws Throwable {
	  ResourceTimeTable rtt= new ResourceTimeTable(dr);
	  rtt.openResourceTimeTable();
  }

  @When("^select resource \"([^\"]*)\" on resource timetable page$")
  public void select_resource_on_resource_timetable_page(String arg1) throws Throwable {
	  ResourceTimeTable rtt= new ResourceTimeTable(dr);
	  rtt.selectResource(arg1);
  }

  @Then("^click show to open resource timetable report$")
  public void click_show_to_open_resource_timetable_report() throws Throwable {
	  ResourceTimeTable rtt= new ResourceTimeTable(dr);
	  rtt.clickShow(schoolname, scenario);
  }
  
//particular class time table
  @When("^user opens particular class time table page$")
  public void user_opens_particular_class_time_table_page() throws Throwable {
	  ParticularClassTimeTable tt= new ParticularClassTimeTable(dr);
	  tt.openParticularClassTimeTable();
  }

  @When("^select class \"([^\"]*)\" on particular class time table page$")
  public void select_class_on_particular_class_time_table_page(String arg1) throws Throwable {
	  ParticularClassTimeTable tt= new ParticularClassTimeTable(dr);
	  tt.selectClass(arg1);
  }

  @Then("^click show to open particular class time table report$")
  public void click_show_to_open_particular_class_time_table_report() throws Throwable {
	  ParticularClassTimeTable tt= new ParticularClassTimeTable(dr);
	  tt.clickShow(schoolname, scenario);
  }
  
//subject in class with teacher allocated
  @When("^user opens subject in class with teacher allocated page$")
  public void user_opens_subject_in_class_with_teacher_allocated_page() throws Throwable {
	  SubjectInClassWithTeacherAllocated s= new SubjectInClassWithTeacherAllocated(dr);
	  s.openSubjectInClassWithTeacherAllocated();
  }

  @When("^select class \"([^\"]*)\" on subject in class with teacher allocated page$")
  public void select_class_on_subject_in_class_with_teacher_allocated_page(String arg1) throws Throwable {
	  SubjectInClassWithTeacherAllocated s= new SubjectInClassWithTeacherAllocated(dr);
	  s.selectClass(arg1);
  }

  @Then("^click show to open subject in class with teacher allocated report$")
  public void click_show_to_open_subject_in_class_with_teacher_allocated_report() throws Throwable {
	  SubjectInClassWithTeacherAllocated s= new SubjectInClassWithTeacherAllocated(dr);
	  s.clickShow(schoolname, scenario);
  }

//substitution date wise
  @When("^user opens substitution date wise page$")
  public void user_opens_substitution_date_wise_page() throws Throwable {
	  SubstitutionDateWise sd= new SubstitutionDateWise(dr);
	  sd.openSubstitutionDateWise();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on substitution date wise page$")
  public void select_from_date_as_month_year_and_day_on_substitution_date_wise_page(String arg1, String arg2, String arg3) throws Throwable {
	  SubstitutionDateWise sd= new SubstitutionDateWise(dr);
	  sd.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on substitution date wise page$")
  public void select_to_date_as_month_year_and_day_on_substitution_date_wise_page(String arg1, String arg2, String arg3) throws Throwable {
	  SubstitutionDateWise sd= new SubstitutionDateWise(dr);
	  sd.selectToDate(arg1, arg2, arg3);
  }

  @Then("^click show to open substitution date wise report$")
  public void click_show_to_open_substitution_date_wise_report() throws Throwable {
	  SubstitutionDateWise sd= new SubstitutionDateWise(dr);
	  sd.clickShow(schoolname, scenario);
  }

//subject summary
  @When("^user opens subject summary page$")
  public void user_opens_subject_summary_page() throws Throwable {
	  SubjectSummary s= new SubjectSummary(dr);
	  s.openSubjectSummary();
  }

  @Then("^click show to open subject summary report$")
  public void click_show_to_open_subject_summary_report() throws Throwable {
	  SubjectSummary s= new SubjectSummary(dr);
	  s.clickShow(schoolname, scenario);
  }
  
//assignment status
  @When("^user opens assignment status page$")
  public void user_opens_assignment_status_page() throws Throwable {
	  AssignmentStatus a= new AssignmentStatus(dr);
	  a.openAssignmentStatus();
  }

  @Then("^click show to open assignment status report$")
  public void click_show_to_open_assignment_status_report() throws Throwable {
	  AssignmentStatus a= new AssignmentStatus(dr);
	  a.clickShow(schoolname, scenario);
  }
}

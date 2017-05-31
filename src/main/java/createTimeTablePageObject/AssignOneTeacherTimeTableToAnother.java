package createTimeTablePageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class AssignOneTeacherTimeTableToAnother {
  WebDriver dr;
  String pg="AssignOneTeacherTimeTableToAnother";
  Utility u= new Utility();
									  
  public AssignOneTeacherTimeTableToAnother(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openAssignOneTeacherTimeTableToAnother()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Create-Timetable.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Assign one Teacher Timetable To Another")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/TimeTable/TT_Assign_Table_NewTeacher.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }
}

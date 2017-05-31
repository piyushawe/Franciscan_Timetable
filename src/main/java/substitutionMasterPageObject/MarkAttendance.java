package substitutionMasterPageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class MarkAttendance {
  WebDriver dr;
  String pg= "MarkAttendance";
  Utility u= new Utility();
										  
  public MarkAttendance(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openMarkAttendance()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Substitution-Master.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Mark Attendance")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/TimeTable/TT_Marks_Attendance.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  //dr.findElement(By.xpath("//div[@class='content']")).click();
	  dr.findElement(By.id("example")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
   }
}

package pageObjects;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class TeachersTimeTable {
  WebDriver dr;
  Utility u= new Utility();
				
  @FindBy(id="ContentPlaceHolder1_ddlteacherid")WebElement teacher;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
						  
  public TeachersTimeTable(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openTeachersTimeTable()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Teachers Timetable")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/TimeTable/TT_TeachersTimetableRpt.aspx']")));
  }
  public void selectTeacher(String tch)
  {
	  new Select(teacher).selectByVisibleText(tch);
  }
  public void clickShow(String str, Collection<String>sc) throws InterruptedException, IOException
  {
	  String r="TeachersTimeTable";
	  show.click();
      u.verifyShow(dr, str, r, sc);
	  Thread.sleep(5000);
	  u.captureScreenshot(dr, str, r,sc);
  }
}

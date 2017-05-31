package relationMasterPageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class AssignSubjectToClass {
  WebDriver dr;
  String pg="AssignSubjectToClass";
  Utility u= new Utility();
			  
  public AssignSubjectToClass(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openAssignSubjectToClass()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Relation-Master.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Assign Subject To Class")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/TimeTable/RelateSubject_Class.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.name("ctl00$ContentPlaceHolder1$SingleButton2$ctl00")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }
}

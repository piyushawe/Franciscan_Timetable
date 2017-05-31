package relationMasterPageObject;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class TimeTableGlobalSetting {
  WebDriver dr;
  String pg="TimeTableGlobalSetting";
  Utility u= new Utility();
				  
  public TimeTableGlobalSetting(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openTimeTableGlobalSetting()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Relation-Master.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Timetable Global Setting")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/TimeTable/TT_GlobalSetting.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }
  public void verifyDay()
  {
	  List<WebElement>day= dr.findElements(By.name("ctl00$ContentPlaceHolder1$Day"));
	  boolean flag= true;
	  int i=0;
	  for(WebElement d:day)
	  {
		  if(day.get(i).isSelected())
			  flag=true;
		  i++;
	  }
	  if(flag)
		  System.out.println("Day Type is selected");
	  else
		  System.out.println("Day Type is not selected");
  }
}

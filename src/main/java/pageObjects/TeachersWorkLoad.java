package pageObjects;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TeachersWorkLoad {
  WebDriver dr;
  Utility u= new Utility();
	  
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
	  
  public TeachersWorkLoad(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openTeachersWorkLoad()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Teachers Work Load")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/TimeTable/TT_TeachersWorkloadRpt.aspx']")));
  }
  public void clickShow(String str, Collection<String>sc) throws InterruptedException, IOException
  {
	  String r="TeachersWorkLoad";
	  show.click();
	  Thread.sleep(5000);
	  u.captureScreenshot(dr, str, r,sc);
  }
}

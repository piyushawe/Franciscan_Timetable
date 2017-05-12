package pageObjects;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SubstitutionDateWise {
  WebDriver dr;
  Utility u= new Utility();
  
  @FindBy(id="ContentPlaceHolder1_txtfromDate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txttoDate_TextBox")WebElement todate;
  @FindBy(name="ctl00$ContentPlaceHolder1$BTNSingleButton1$ctl00")WebElement show;
  
  public SubstitutionDateWise(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openSubstitutionDateWise()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Substitution Date Wise")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/TimeTable/TT_SubstitutionRpt.aspx']")));
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void clickShow(String str, Collection<String>sc) throws InterruptedException, IOException
  {
	  String r="SubstitutionDateWise";
	  show.click();
	  Thread.sleep(5000);
	  u.captureScreenshot(dr, str, r,sc);
  }
}

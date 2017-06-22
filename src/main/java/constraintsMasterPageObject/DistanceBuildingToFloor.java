package constraintsMasterPageObject;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import org.openqa.selenium.support.ui.Select;
import pageObjects.Utility;

public class DistanceBuildingToFloor {
  WebDriver dr;
  String pg="DistanceBuildingToFloor";
  Utility u= new Utility();

  @FindBy(id="ContentPlaceHolder1_TT_DDL_Buildid")WebElement building;
  @FindBy(id="ContentPlaceHolder1_TT_DDL_Floorid")WebElement floor;
  @FindBy(id="ContentPlaceHolder1_TxtDistance_TextBox")WebElement distance;
  @FindBy(id="ContentPlaceHolder1_BtnBuildControl_btnSave")WebElement save;
  @FindBy(id="ContentPlaceHolder1_BtnBuildControl_btnView")WebElement view;

  public DistanceBuildingToFloor(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDistanceBuildingToFloor()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Constraints-Master.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Distance Building to Floor")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/TimeTable/DistanceBuildingtoFloormst.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }
  public void selectBuilding()
  {
      new Select(building).selectByIndex(1);
  }
  public void selectFloor()
  {
      new Select(floor).selectByIndex(1);
  }
  public void enterDistance(String dist)
  {
      distance.sendKeys(dist);
  }
  public void clickSave(String school, Collection<String> sc)throws IOException
  {
      save.click();
      u.verifySave(dr, school, pg, sc);
  }
  public void clickView(String school, Collection<String> sc)throws IOException
  {
      view.click();
      WebElement table= dr.findElement(By.id("example"));
      List<WebElement> cells= table.findElements(By.tagName("td"));
      if (cells.size()>1) {
          for (WebElement cell : cells) {
              cell.findElement(By.xpath("//input[starts-with(@id,'ContentPlaceHolder1_rpt_BuildingtoFloorDistance')]")).click();
              break;
          }
          dr.findElement(By.id("ContentPlaceHolder1_BtnBuildControl_btnModify")).click();
          dr.findElement(By.id("popup_ok")).click();
      }else
          System.out.println("No record Found");
      u.verifyView(dr,school, pg, sc);
  }
}

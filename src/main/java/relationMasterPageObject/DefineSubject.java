package relationMasterPageObject;

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

public class DefineSubject {
  WebDriver dr;
  String pg="DefineSubject";
  Utility u= new Utility();

  @FindBy(id="ContentPlaceHolder1_txtSubName_TextBox")WebElement subjectname;
  @FindBy(id="ContentPlaceHolder1_txtSubCode_TextBox")WebElement abbreviation;
  @FindBy(id="ContentPlaceHolder1_TT_DDL_Subtype")WebElement subjecttype;
  @FindBy(id="ContentPlaceHolder1_txtColor")WebElement setcolor;
  @FindBy(id="ContentPlaceHolder1_BtnControls1_btnSave")WebElement save;
  @FindBy(id="ContentPlaceHolder1_BtnControls1_btnView")WebElement view;

  public DefineSubject(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDefineSubject()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Relation-Master.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Define Subject")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/TimeTable/TT_SubjectMain.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }
  public void enterSubjectName(String sname)
  {
      subjectname.sendKeys(sname);
  }
  public void enterAbbreviation(String abbr)
  {
      abbreviation.sendKeys(abbr);
  }
  public void selectSubjectType()
  {
      new Select(subjecttype).selectByIndex(1);
  }
  public void setColor()
  {
      setcolor.click();
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
              cell.findElement(By.xpath("//input[starts-with(@id,'ContentPlaceHolder1_rpt_SubjectMain')]")).click();
              break;
          }
          dr.findElement(By.id("ContentPlaceHolder1_BtnControls1_btnModify")).click();
          dr.findElement(By.id("popup_ok")).click();
      }else
          System.out.println("No record Found");
      u.verifyView(dr,school, pg, sc);
  }
}

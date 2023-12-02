# PROJECT TITLE: Body Mass Index Calculator

#### Video Demo:  <URL https://youtu.be/TU3Lw2IGxYA>

#### Description:
This is a Chrome Extension, named `Body Mass Index Calculator`.

<p style="text-align: justify;">
BMI is a famous indicator that allow a way to look at our overall health.
It is an important measurement health, a convenient rule of thumb used to broadly 
categorize a person as based on tissue mass and height.
</p>


##### Major adult BMI classifications are:

- Below 16: Severely Underweight.
- Between 16.0-16.9: Moderately low weight.
- Between 17.0-18.5: Slightly lower than normal weight.
- Between 18.6-24.9: Normal weight.
- Between 25.0-29.9: Overweight.
- Between 30.0-34.9: Grade I obesity
- Between 35-39.9: Grade II obesity
- Over 40: Grade III Obesity.

<p style="text-align: justify;">
This program allow you to know what is your category. Sometimes we are in doubt about this and go to internet
and several websites to reach a correct way to do this. So, the main goal of this program is to simplify that and get a fast way to calculate this. Through an extension that allow easy access to small BMI calculator that gives you exactly your indicator and your classification. All of this without having to go to websites, just embedded in the browser.
</p>



#### Project Files:

##### bmi.html:
<p style="text-align: justify;">
This file contains the main structure of the application. The structure tags of the application, the title, the form, input fields and buttons.
Also contains the links for the font source used in the project, the link to the CSS file that provides the aesthetics of the application and the link to the javascript file that provides logic and functionality to the application.
</p>


##### bmi.css:
<p style="text-align: justify;">
This file contains all the parameters that give aesthetics to the application. All the css rules are written in cascade, respecting the hierarchy of the different tags in the html. I use class selectors, id selectors and tag selectors to be able to apply a personalized aesthetics to each section and structure. Also I set a specified size for the frame of the application, because it is a Chrome extension and it will be displayed on a popup, this specified size allow to fit all the elements on the popup frame.
</p>


##### bmi.js:
<p style="text-align: justify;">
This file contains all the logic and functionality of the program. It is the one that gives the application, the desired performance.
First I select all the elements I needed, accessing to the DOM of the document via "document.querySelector". Later I designed the different functions that allow the performance of the application.
</p>

<p style="text-align: justify;">
Afterwards I started with the functionality after the user clicked the "Calculate" button. Here, I started validating the input values to make sure that the information provided by the user were a good one. I used .value method to access the information of the input fields.
</p>

<p style="text-align: justify;">
Later I convert the input height to inches using parseInt() and set the steps to the equation that will provide the bmi value. Here, I used Number() and Math.pow(), both functions built-in in javascript.
</p>

<p style="text-align: justify;">
The next step was to evaluate correspondence between bmi value and categories. According to this, the application will set a different string of information on the page as the final information for the user.
</p>

<p style="text-align: justify;">
Then, I designed the function for cleaning fields. After the user clicked on the button "clear", the information in the input fields will be set to an empty string. This way, it is easier to retype new values for the user.
</p>


##### manifest.json:
<p style="text-align: justify;">
It is a file require for every web browser extension. This JSON object describes the extension's capabilities and configuration. Inside this file there is the required information about this extension.
</p>





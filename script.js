document.getElementById("submitBMI").addEventListener("click", processBMI);
document.getElementById("clearAll").addEventListener("click",clearAll);

function processBMI() {
    //get the height value
    var height = parseInt(document.getElementById("height").value);

    //get the weight value
    var weight = parseInt(document.getElementById("weight").value);

    var BMI = (weight * 703) / Math.pow(height, 2);

    document.getElementById("metricBMI").value = BMI;


    //if statements to determine BMI

    if (BMI >= 25 && BMI <= 29.9) {

        labelBMI = "<article class='message is-info'><div class='message-header'>Your BMI is: Overweight</div></article>";
        theFormHTML = "<div class='card'><div class='card-content'>People falling in this BMI range are considered overweight and would benefit from finding healthy ways to lower their weight, such as diet and exercise. Individuals who fall in this range are at increased risk for a variety of ilnesses. If your BMI is 27-29.99 your risk of health problems becomes higher. In a recent study an increased rate of blood pressure, diabetes and heart disease was recorded at 27.3 for women and 27.8 for men. </div></div>";
        document.getElementById("overweight").style.backgroundColor="#3e8ed0";
        document.getElementById("overweight").style.fontWeight="bolder";
        document.getElementById("overweight").style.color="white";

    } else if (BMI < 18.5) {
        labelBMI = "<article class='message is-info'><div class='message-header'>Your BMI is: Underweight</div></article>";
        theFormHTML = "<div class='card'><div class='card-content'>A lean BMI can indicate that your weight maybe too low. You should consult your physician to determine if you should gain weight, as low body mass can decrease your body's immune system, which could lead to ilness such as disappearance of periods (women), bone loss, malnutrition and other conditions. The lower your BMI the greater these risks become.</div></div>";
        document.getElementById("underweight").style.backgroundColor="#3e8ed0";
        document.getElementById("underweight").style.fontWeight="bolder";
        document.getElementById("underweight").style.color="white";


    } else if (BMI >= 30) {
        labelBMI = "<article class='message is-info'><div class='message-header'>Your BMI is: Obese</div></article>";
        theFormHTML = "<div class='card'><div class='card-content'>Individuals with a BMI of 30-34.99 are in a physically unhealthy condition, which puts them at risk for serious ilnesses such as heart disease, diabetes, high blood pressure, gall bladder disease, and some cancers. This holds especially true if you have a larger than recommended Waist Size. These people would benefit greatly by modifying their lifestyle. Ideally, see your doctor and consider reducing your weight by 5-10 percent. Such a weight reduction will result in considerable health improvements.</div></div>";
        document.getElementById("obese").style.backgroundColor="#3e8ed0";
        document.getElementById("obese").style.fontWeight="bolder";
        document.getElementById("obese").style.color="white";

    } else if (BMI >= 18.5 && BMI <= 24.9) {
        labelBMI = "<article class='message is-info'><div class='message-header'><p>Your BMI is: Normal<p></div></article>";
        theFormHTML = "<div class='card'><div class='card-content'>People whose BMI is within 18.5 to 24.9 possess the ideal amount of body weight, associated with living longest, the lowest incidence of serious ilness, as well as being perceived as more physically attractive than people with BMI in higher or lower ranges. However, it may be a good idea to check your Waist Circumference and keep it within the recommended limits.</div></div>";
        document.getElementById("normal").style.backgroundColor="#3e8ed0";
        document.getElementById("normal").style.fontWeight="bolder";
        document.getElementById("normal").style.color="white";
    }

    document.getElementById("labelBMI").innerHTML += "<br /><p>" + labelBMI + "</p>";
    document.getElementById("BMIMessage").innerHTML +=
        "<p>" + theFormHTML + "</p>";
}

function clearAll(){
    document.getElementById("labelBMI").innerHTML = "";
    document.getElementById("BMIMessage").innerHTML = "";
    document.getElementById("underweight").style = normal;
    document.getElementById("normal").style = normal;
    document.getElementById("overweight").style = normal;
    document.getElementById("obese").style = normal;


}
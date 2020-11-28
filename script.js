/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var search = $("#searchbar");

search.on("click", search_school);

function search_school() {
  let input = search.val();
  input = input.toLowerCase();
  let x = document.getElementsByClassName("schools");

  for (var i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

var submitUTD = $(".submit-btn-UTD");
var submitMSU = $(".submit-btn-MSU");
var submitSMU = $(".submit-btn-SMU");
var submitTCU = $(".submit-btn-TCU");
var submitTWU = $(".submit-btn-TWU");
var submitUNT = $(".submit-btn-UNT");
var submitUT = $(".submit-btn-UT");
var submitUTA = $(".submit-btn-UTA");
var submitbrookhaven = $(".submit-btn-brookhaven");
var submitcedarvalley = $(".submit-btn-cedarvalley");
var submiteastfield = $(".submit-btn-eastfield");
var submitelcentro = $(".submit-btn-elcentro");
var submitfrisco = $(".submit-btn-frisco");
var submitmckinney = $(".submit-btn-mckinney");
var submitmountainview = $(".submit-btn-mountainview");
var submitnortheast = $(".submit-btn-northeast");
var submitnorthwest = $(".submit-btn-northwest");
var submitplano = $(".submit-btn-plano");
var submitrichland = $(".submit-btn-richland");
var submitrockwall = $(".submit-btn-rockwall");
var submitsouth = $(".submit-btn-south");
var submitsoutheast = $(".submit-btn-southeast");
var submittrinityriver = $(".submit-btn-trinityriver");

var overallRating = $(".ratings");
var confirmation = $("#confirmation");
var returnButton = $("#go-back");
var reviewForm = $(".review-form");

var reviews = $(".rating");

var currentRating = $(".current-rating");
var averageRating = 0;
var numReviews = 0;
var totalRating = 0;

var femaleRating = $(".female-rating");
var totalFemaleRating = 0;
var averageFemaleRating = 0;
var numFemaleReviews = 0;

var lgbtRating = $(".lgbt-rating");
var totalLGBTRating = 0;
var averageLGBTRating = 0;
var numLGBTReviews = 0;

var blackRating = $(".black-rating");
var totalBlackRating = 0;
var averageBlackRating = 0;
var numBlackReviews = 0;

var hispanicRating = $(".hispanic-rating");
var totalHispanicRating = 0;
var averageHispanicRating = 0;
var numHispanicReviews = 0;

var asianRating = $(".asian-rating");
var totalAsianRating = 0;
var averageAsianRating = 0;
var numAsianReviews = 0;

var nativeRating = $(".native-rating");
var totalNativeRating = 0;
var averageNativeRating = 0;
var numNativeReviews = 0;

var religiousRating = $(".religious-rating");
var totalReligiousRating = 0;
var averageReligiousRating = 0;
var numReligiousReviews = 0;

var disabilityRating = $(".disability-rating");
var totalDisabilitiesRating = 0;
var averageDisabilitiesRating = 0;
var numDisabilitiesReviews = 0;

submitUTD.on("click", calculateAverage);
submitUTD.on("click", displayReviewUTD);
submitUTD.on("click", confirmationPage);

submitMSU.on("click", calculateAverage);
submitMSU.on("click", displayReviewMSU);
submitMSU.on("click", confirmationPage);

submitSMU.on("click", calculateAverage);
submitSMU.on("click", displayReviewSMU);
submitSMU.on("click", confirmationPage);

submitTCU.on("click", calculateAverage);
submitTCU.on("click", displayReviewTCU);
submitTCU.on("click", confirmationPage);

submitTWU.on("click", calculateAverage);
submitTWU.on("click", displayReviewTWU);
submitTWU.on("click", confirmationPage);

submitUNT.on("click", calculateAverage);
submitUNT.on("click", displayReviewUNT);
submitUNT.on("click", confirmationPage);

submitUT.on("click", calculateAverage);
submitUT.on("click", displayReviewUT);
submitUT.on("click", confirmationPage);

submitUTA.on("click", calculateAverage);
submitUTA.on("click", displayReviewUTA);
submitUTA.on("click", confirmationPage);

submitbrookhaven.on("click", calculateAverage);
submitbrookhaven.on("click", displayReviewbrookhaven);
submitbrookhaven.on("click", confirmationPage);

submitcedarvalley.on("click", calculateAverage);
submitcedarvalley.on("click", displayReviewcedarvalley);
submitcedarvalley.on("click", confirmationPage);

submiteastfield.on("click", calculateAverage);
submiteastfield.on("click", displayRevieweastfield);
submiteastfield.on("click", confirmationPage);

submitelcentro.on("click", calculateAverage);
submitelcentro.on("click", displayReviewelcentro);
submitelcentro.on("click", confirmationPage);

submitfrisco.on("click", calculateAverage);
submitfrisco.on("click", displayReviewfrisco);
submitfrisco.on("click", confirmationPage);

submitmckinney.on("click", calculateAverage);
submitmckinney.on("click", displayReviewmckinney);
submitmckinney.on("click", confirmationPage);

submitmountainview.on("click", calculateAverage);
submitmountainview.on("click", displayReviewmountainview);
submitmountainview.on("click", confirmationPage);

submitnortheast.on("click", calculateAverage);
submitnortheast.on("click", displayReviewnortheast);
submitnorthwest.on("click", confirmationPage);

submitnorthwest.on("click", calculateAverage);
submitnorthwest.on("click", displayReviewnorthwest);
submitnorthwest.on("click", confirmationPage);

submitplano.on("click", calculateAverage);
submitplano.on("click", displayReviewplano);
submitplano.on("click", confirmationPage);

submitrichland.on("click", calculateAverage);
submitrichland.on("click", displayReviewrichland);
submitrichland.on("click", confirmationPage);

submitrockwall.on("click", calculateAverage);
submitrockwall.on("click", displayReviewrockwall);
submitrockwall.on("click", confirmationPage);

submitrockwall.on("click", calculateAverage);
submitrockwall.on("click", displayReviewrockwall);
submitrockwall.on("click", confirmationPage);

submitsouth.on("click", calculateAverage);
submitsouth.on("click", displayReviewsouth);
submitsouth.on("click", confirmationPage);

submitsouth.on("click", calculateAverage);
submitsouth.on("click", displayReviewsouth);
submitsouth.on("click", confirmationPage);

submitsoutheast.on("click", calculateAverage);
submitsoutheast.on("click", displayReviewsoutheast);
submitsoutheast.on("click", confirmationPage);

submittrinityriver.on("click", calculateAverage);
submittrinityriver.on("click", displayReviewtrinityriver);
submittrinityriver.on("click", confirmationPage);

var userRating = 0;

function calculateAverage() {
  numReviews++;
  event.preventDefault();
  var userRating1 = $("#rating1");
  var userRating2 = $("#rating2");
  var userRating3 = $("#rating3");
  var userRating4 = $("#rating4");
  var userRating5 = $("#rating5");
  var female = $(".female");
  var lgbt = $(".lgbt");
  var disabilities = $(".disabilities");
  var black = $(".black");
  var hispanic = $(".hispanic");
  var asian = $(".asian");
  var native = $(".native");
  var religious = $(".religious");

  if (userRating1.is(":checked")) {
    userRating = 1;
  }
  if (userRating2.is(":checked")) {
    userRating = 2;
  }
  if (userRating3.is(":checked")) {
    userRating = 3;
  }
  if (userRating4.is(":checked")) {
    userRating = 4;
  }
  if (userRating5.is(":checked")) {
    userRating = 5;
  }

  totalRating += userRating;
  averageRating = totalRating / numReviews;

  if (female.is(":checked")) {
    numFemaleReviews++;
    totalFemaleRating += userRating;
    averageFemaleRating = totalFemaleRating / numFemaleReviews;
    femaleRating.text(`${averageFemaleRating}/5`);
  }
  if (lgbt.is(":checked")) {
    numLGBTReviews++;
    totalLGBTRating += userRating;
    averageLGBTRating = totalLGBTRating / numLGBTReviews;
    lgbtRating.text(`${averageLGBTRating}/5`);
  }
  if (black.is(":checked")) {
    numBlackReviews++;
    totalBlackRating += userRating;
    averageBlackRating = totalBlackRating / numBlackReviews;
    blackRating.text(`${averageBlackRating}/5`);
  }
  if (hispanic.is(":checked")) {
    numHispanicReviews++;
    totalHispanicRating += userRating;
    averageHispanicRating = totalHispanicRating / numHispanicReviews;
    hispanicRating.text(`${averageHispanicRating}/5`);
  }
  if (disabilities.is(":checked")) {
    numDisabilitiesReviews++;
    totalDisabilitiesRating += userRating;
    averageDisabilitiesRating =
      totalDisabilitiesRating / numDisabilitiesReviews;
    disabilityRating.text(`${averageDisabilitiesRating}/5`);
  }
  if (asian.is(":checked")) {
    numAsianReviews++;
    totalAsianRating += userRating;
    averageAsianRating = totalAsianRating / numAsianReviews;
    asianRating.text(`${averageAsianRating}/5`);
  }
  if (native.is(":checked")) {
    numNativeReviews++;
    totalNativeRating += userRating;
    averageNativeRating = totalNativeRating / numNativeReviews;
    nativeRating.text(`${averageNativeRating}/5`);
  }
  if (religious.is(":checked")) {
    numReligiousReviews++;
    totalReligiousRating += userRating;
    averageReligiousRating = totalReligiousRating / numReligiousReviews;
    religiousRating.text(`${averageReligiousRating}/5`);
  }

  currentRating.text(`${averageRating}/5`);

  // Reset form
  userRating1.prop("checked", false);
  userRating2.prop("checked", false);
  userRating3.prop("checked", false);
  userRating4.prop("checked", false);
  userRating5.prop("checked", false);

  female.prop("checked", false);
  lgbt.prop("checked", false);
  black.prop("checked", false);
  hispanic.prop("checked", false);
  asian.prop("checked", false);
  native.prop("checked", false);
  disabilities.prop("checked", false);
}

function confirmationPage() {
  returnButton.toggleClass("unhide");
  confirmation.toggleClass("unhide");
  reviewForm.toggleClass("hidden");
}

returnButton.on("click", confirmationPage);

var review = "";
var resources = "";
var suggestions = "";

//!L
function displayReviewUTD() {
  review = $(".reviewUTD").val();
  resources = $(".resourcesUTD").val();
  suggestions = $(".suggestionsUTD").val();
  //rating= $('.current-rating')

  reviews.append(`
    <div class ="cardContainer">
    <p class = "rating"> Rating: ${userRating} </p>
    <p class="review">Review:${review} </p>
    <p class="resources">Resources for Other Students:${resources} </p>   
    <p class="suggestions">Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewDCCCD() {
  var review = $(".reviewDCCCD").val();
  var resources = $(".resourcesDCCCD").val();
  var suggestions = $(".suggestionsDCCCD").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewMSU() {
  var review = $(".reviewMSU").val();
  var resources = $(".resourcesMSU").val();
  var suggestions = $(".suggestionsMSU").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewSMU() {
  var review = $(".reviewSMU").val();
  var resources = $(".resourcesSMU").val();
  var suggestions = $(".suggestionsSMU").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewTCCD() {
  var review = $(".reviewTCCD").val();
  var resources = $(".resourcesTCCD").val();
  var suggestions = $(".suggestionsTCCD").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewTCU() {
  var review = $(".reviewTCU").val();
  var resources = $(".resourcesTCU").val();
  var suggestions = $(".suggestionsTCU").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewTWU() {
  var review = $(".reviewTWU").val();
  var resources = $(".resourcesTWU").val();
  var suggestions = $(".suggestionsTWU").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewUNT() {
  var review = $(".reviewUNT").val();
  var resources = $(".resourcesUNT").val();
  var suggestions = $(".suggestionsUNT").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewUT() {
  var review = $(".reviewUT").val();
  var resources = $(".resourcesUT").val();
  var suggestions = $(".suggestionsUT").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewUTA() {
  var review = $(".reviewUTA").val();
  var resources = $(".resourcesUTA").val();
  var suggestions = $(".suggestionsUTA").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewbrookhaven() {
  var review = $(".reviewbrookhaven").val();
  var resources = $(".resourcesbrookhaven").val();
  var suggestions = $(".suggestionsbrookhaven").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewcedarvalley() {
  var review = $(".reviewcedarvalley").val();
  var resources = $(".resourcescedarvalley").val();
  var suggestions = $(".suggestionscedarvalley").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewcollin() {
  var review = $(".reviewcollin").val();
  var resources = $(".resourcescollin").val();
  var suggestions = $(".suggestionscollin").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayRevieweastfield() {
  var review = $(".revieweastfield").val();
  var resources = $(".resourceseastfield").val();
  var suggestions = $(".suggestionseastfield").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewelcentro() {
  var review = $(".reviewelcentro").val();
  var resources = $(".resourceselcentro").val();
  var suggestions = $(".suggestionselcentro").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewfrisco() {
  var review = $(".reviewfrisco").val();
  var resources = $(".resourcesrfrisco").val();
  var suggestions = $(".suggestionsfrisco").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewmckinney() {
  var review = $(".reviewmckinney").val();
  var resources = $(".resourcesmckinney").val();
  var suggestions = $(".suggestionsmckinney").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewmountainview() {
  var review = $(".reviewmountainview").val();
  var resources = $(".resourcesmountainview").val();
  var suggestions = $(".suggestionsmountainview").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewnortheast() {
  var review = $(".reviewnortheast").val();
  var resources = $(".resourcesnortheast").val();
  var suggestions = $(".suggestionsnortheast").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewnorthwest() {
  var review = $(".reviewnorthwest").val();
  var resources = $(".resourcesnorthwest").val();
  var suggestions = $(".suggestionsnorthwest").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewplano() {
  var review = $(".reviewplano").val();
  var resources = $(".resourcesplano").val();
  var suggestions = $(".suggestionsplano").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewrichland() {
  var review = $(".reviewrichland").val();
  var resources = $(".resourcesrichland").val();
  var suggestions = $(".suggestionsrichland").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewrockwall() {
  var review = $(".reviewrockwall").val();
  var resources = $(".resourcesrockwall").val();
  var suggestions = $(".suggestionsrockwall").val();
  //var rating= $('.current-rating')

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewsouth() {
  var review = $(".reviewsouth").val();
  var resources = $(".resourcessouth").val();
  var suggestions = $(".suggestionssouth").val();

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewsoutheast() {
  var review = $(".reviewsoutheast").val();
  var resources = $(".resourcesoutheast").val();
  var suggestions = $(".suggestionssoutheast").val();

  reviews.append(`
  <br>
    <div class ="cardContainer">
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}
function displayReviewtrinityriver() {
  var review = $(".reviewtrinityriver").val();
  var resources = $(".resourcestrinityriver").val();
  var suggestions = $(".suggestionstrinityriver").val();

  reviews.append(`
  <br>
    <p> Rating: ${userRating} </p>
    <p>Review:${review} </p>
    <p>Resources for Other Students:${resources} </p>   
    <p>Suggestions for Improvement:${suggestions}</p>
     `);
}

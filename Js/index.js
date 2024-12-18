
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}


setInterval(nextSlide, 3000);

showSlides();


var currentScreenWidth = window.innerWidth;
function detectScreenResize() {
   currentScreenWidth = window.innerWidth;
}

function make_get_request()  {
let apiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client'
axios.get(apiUrl)
.then(function (response) 
{
    credentials = response.data;
    document.getElementById('city').value = credentials['city']
})
.catch(function (error) 
{
    
});
}
var selectedServiceHeaderMenuName='';

function highlightServiceHeaderOnHover(serviceHeader) {
   serviceHeader.style.borderBottom = "2px solid #004CD2";
   serviceHeader.style.color = "#004CD2";
   serviceHeader.style.cursor = "pointer";
}

function removeHighlightedServiceHeaderOnMouseOut(serviceHeader)  {
  serviceHeaderMenu =selectedServiceHeaderMenuName+'-header';
   
   if(serviceHeaderMenu!=serviceHeader.id)
   {
     serviceHeader.style.borderBottom = "2px solid white";
     serviceHeader.style.color = "black";
   }
}

var allServicesScrollableContainers = ['company-registration','trademark-registration','roc-registration','gst-registration','iso-registration'];
for (var i = 1; i < allServicesScrollableContainers.length; i++) 
{
  singleServiceScrollableContainer = document.getElementById(allServicesScrollableContainers[i]);
  singleServiceScrollableContainer.style.display= "none";
}

defaultSelectedServiceHeader = 'company-registration-header';
defaultSelectedServiceHeaderElement = document.getElementById(defaultSelectedServiceHeader);
defaultSelectedServiceHeaderElement.style.borderBottom = "2px solid #004CD2";
defaultSelectedServiceHeaderElement.style.color = "#004CD2";
var indexOfLastSelectedHeader =0;
var usableIndexOfLastSelectedHeader= 0;
function showHiddenDiv(id)  { 
  selectedServiceHeaderMenuName = id;
  for (var i = 0; i < allServicesScrollableContainers.length; i++)    { 
    singleServiceScrollableContainer = document.getElementById(allServicesScrollableContainers[i]);
    if (allServicesScrollableContainers[i]==id) 
    {
        selectedServiceHeader = id+'-header';
        singleServiceScrollableContainer.style.display= "flex";
        selectedHeaderElement = document.getElementById(selectedServiceHeader);
        selectedHeaderElement.style.borderBottom = "2px solid #004CD2";
        selectedHeaderElement.style.color = "#004CD2";
        usableIndexOfLastSelectedHeader = indexOfLastSelectedHeader;
        removeStylesOfOtherServiceHeaders(i);
        const serviceheadersScrollBox = document.getElementsByTagName('startupwala-service-header-container')[0];
        const halfOfCurrentScreenWidth = currentScreenWidth/2.2;
        if (usableIndexOfLastSelectedHeader<i) 
        {
            serviceheadersScrollBox.scrollLeft += halfOfCurrentScreenWidth;
        }

        if (usableIndexOfLastSelectedHeader>i) 
        {
            serviceheadersScrollBox.scrollLeft -= halfOfCurrentScreenWidth;
        }
    }
  }
};

function removeStylesOfOtherServiceHeaders(userSelectedServiceHeaderId) {
   indexOfLastSelectedHeader = userSelectedServiceHeaderId;
   for (var i = 0; i < allServicesScrollableContainers.length; i++) 
   {
      if (userSelectedServiceHeaderId!=i) 
      {
         element = document.getElementById(allServicesScrollableContainers[i]);
         nonselectedServiceHeader = allServicesScrollableContainers[i]+'-header';
         nonselectedServiceHeader = document.getElementById(nonselectedServiceHeader);
         element.style.display= "none";
         nonselectedServiceHeader.style.borderBottom = "2px solid white";
         nonselectedServiceHeader.style.color = "black";
      }
   }
}
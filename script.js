var typed = new Typed("#typing", {

    strings: [

        "GIS Analyst",

        "Remote Sensing Specialist",

        "Research Scholar",

        "ArcGIS Pro Expert",

        "QGIS Expert"

    ],

    typeSpeed:60,

    backSpeed:40,

    backDelay:1500,

    loop:true

});
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }

});



function populate(value) {
    let sel2 = document.getElementById("cityName");
    let sel3 = document.getElementById("code");

    // Clear previous options
    sel2.innerHTML = "<option value='' disabled selected>--Select City--</option>";
    sel3.innerHTML = "<option value='' disabled selected>--Select Code--</option>";

    // Define options for cities and codes based on the selected country
    let cities = [];
    let codes = [];

    if (value === "India") {
        cities = ["Punjab", "Haryana", "Chandigarh"];
        codes = ["+91"];
    } else if (value === "America") {
        cities = [ "New York", "Chicago", "Los Angeles"];
        codes = ["+1"];
    }

    // Populate city options
    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement("option");
        option.text = cities[i];
        option.value = cities[i];
        sel2.add(option);
    }

    // Populate code options
    for (let i = 0; i < codes.length; i++) {
        let option = document.createElement("option");
        option.text = codes[i];
        option.value = codes[i];
        sel3.add(option);
    }
}



function showState() {
    let country = document.getElementById('country1');
    let countryCode = document.getElementById('country-code');
    let city = document.getElementById("city");
    if (country.value == "") {
        countryCode.classList.remove("non-select");
        city.classList.remove("non-select");
    } else {
        countryCode.classList.add("non-select");
        city.classList.add("non-select");
    }
    
}


//preview Image

let certificate = document.getElementById('certificate');
certificate.addEventListener("change", (e) => {

    var previewImage = document.getElementById("preview-image");
    previewImage.src = URL.createObjectURL(e.target.files[0]);
    previewImage.style.display = "block";
   
});







//form validation starts from the here
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}

function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.querySelectorAll('.formerror')[0].innerHTML = error;

}



function validateForm(){
    
    clearErrors();
    let returnVal = true; 
    
    let name = document.forms['myForm']["fName"].value;
    
    let namePattern = (/^[A-Za-z]+$/);

    if(namePattern.test(name)){
        returnVal = true;
    }else if(name.length==0 ){
        seterror("fname" ,"*Please enter the name");
        returnVal = false;
        }
    
    else{
        seterror("fname" ,"*Please enter the correct name");
        returnVal = false;
    }

    

    //last name validation
    let lname = document.forms['myForm']["lname"].value;
    let lnamePattern = (/^[A-Za-z]+$/);

    
    if(lnamePattern.test(lname)){
        returnVal = true;
    }else{
        seterror("lName" ,"*Please enter the correct name");
        returnVal = false;
    }
    if(lname.length==0){
        seterror("lName" ,"*Please enter the Last Name");
       
        returnVal = false;
        }
    
        console.log(lnamePattern.test(lname));
    
   

    // email validation

    let email = document.forms['myForm']["fEmail"].value;
    let emailPattern = (/^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/);

    if(emailPattern.test(email)){
        returnVal = true;
    }else{
        seterror("email", "*Please enter correct the email");
        returnVal = false;
    }
    if (email.length==0){
        seterror("email", "*Please enter the email");
        returnVal = false;
    }
    


    let phone = document.forms['myForm']["fNumber"].value;
    
    if (phone.length != 10){
        seterror("number", "*Phone number should be of 10 digits!");
        returnVal = false;
    }
    if(isNaN(phone)){
        seterror("number", "*Please enter  Number ");
        returnVal = false;
    }
    if (phone.length == 0){
        seterror("number", "*Please enter the Mobile number");
        returnVal = false;
    }



    let address = document.forms['myForm']["fAddress"].value;
    if (address==""){
        seterror("addresss", "*Please enter the Address");
        returnVal = false;
    }

    let DOB = document.forms['myForm']["fDate"].value;
    if (DOB==""){
        seterror("date", "*Please enter the Date of Birth");
        returnVal = false;
    }


    // let selectcountry = document.forms['myForm']["country"];
    let selectcountry = document.forms['myForm']["country1"];

    if(selectcountry.value==""){
        seterror("countrys" , "*Please Select  the country");
        returnVal= false;
    }

    let selectCode = document.forms['myForm']["code"];
    if (selectCode.value==""){
        seterror("country-code", "*Please select the Country Code");
        returnVal = false;
    }

    let selectCity = document.forms['myForm']["cityName"];
    if (selectCity.value==""){
        seterror("city", "*Please select the city Code");
        returnVal = false;
    }   

    let checkbox = document.forms['myForm']["gender"];
    let radioCheck = false;
    for(let i=0; i<checkbox.length; i++){
        if(checkbox[i].checked){
            radioCheck =   true;
            break;
        }
    }
    if(!radioCheck){
        seterror("checked", "*please check ");
        returnVal =   false;
    }



    let file = document.forms['myForm']["fCertificate"];
    if (file.value==""){
        seterror("certificates", "*Please choose the file");
        returnVal = false;
    }
    // data();
    // file.value.innerHTML="";
    if(returnVal==true){
        sumbit();
        document.getElementById("registrationForm").reset();
        let previewImage = document.getElementById("preview-image");
        previewImage.style.display = "none";
    }
    
    return returnVal;





}


// table js starts from the here 


let row = null;
let msg = document.getElementById("msg");

function sumbit() {
    let dataEntered = retriveData();
    // console.log(dataEntered);
    // let readData = readingDataFromLocalStorage(dataEntered);
    if (dataEntered == false) {
        // msg.innerHTML = "Please enter data";
    } else {
        if (row == null) {
            insertData(dataEntered );
            msg.innerHTML = "Data Inserted!";
            console.log(row);
            // 
        } else {
            update();
            msg.innerHTML = "Data updated!";
            console.log(row);
        }
    }
    


}


//create 
function retriveData() {
    let tname = document.getElementById("firstName").value;
    let tlname = document.getElementById("lastName").value;
    let temail = document.forms['myForm']["fEmail"].value;
    let tnumber = document.getElementById("mobileNumber").value;
    let tcheckbox = document.forms['myForm']["gender"].value;
    let tDOB = document.forms['myForm']["fDate"].value;
    let taddress = document.forms['myForm']["fAddress"].value;
    let tselectcountry = document.forms['myForm']["country1"].value;
    let tselectcity = document.forms['myForm']["cityName"].value;
    let tselectcode = document.forms['myForm']["code"].value;

    let photo = document.forms['myForm']["fCertificate"].value;
   
    

    let arr = [tname, tlname, temail, tnumber, tcheckbox, tDOB, taddress, tselectcountry, tselectcity, tselectcode, photo];
    if (arr.includes("")) {
        return false;
    } else {
        return arr;
        
    }  
}


//read
//Data in Local
// function readingDataFromLocalStorage(dataEntered) {
//     //storing the data in local storage.
    
//     let name = localStorage.setItem("First-Name", dataEntered[0]);
//     let Lname = localStorage.setItem("Last-Name", dataEntered[1]);
//     let email = localStorage.setItem("Email", dataEntered[2]);
//     let number = localStorage.setItem("Mobile-number", dataEntered[3]);
//     let gender = localStorage.setItem("gender", dataEntered[4]);
//     let dob = localStorage.setItem("dob", dataEntered[5]);
//     let address = localStorage.setItem("address", dataEntered[6]);
    
//     let country = localStorage.setItem("country", dataEntered[7]);
//     let city = localStorage.setItem("city", dataEntered[8]);
//     let code = localStorage.setItem("code", dataEntered[9]);
//     let photo = localStorage.setItem("Image", dataEntered[10]);

//     //getting values from local to table
    
//     let name1 = localStorage.getItem("First-Name", dataEntered[0]);
//     let Lname1 = localStorage.getItem("Last-Name", dataEntered[1]);
//     let email1 = localStorage.getItem("Email", dataEntered[2]);
//     let number1 = localStorage.getItem("Mobile-number", dataEntered[3]);
//     let gender1 = localStorage.getItem("gender", dataEntered[4]);
//     let dob1 = localStorage.getItem("dob", dataEntered[5]);
//     let address1 = localStorage.getItem("address", dataEntered[6]);
//     let country1 = localStorage.getItem("country", dataEntered[7]);
//     let city1 = localStorage.getItem("city", dataEntered[8]);
//     let code1 = localStorage.getItem("code", dataEntered[9]);
//     let photo1 = localStorage.getItem("Image", dataEntered[10]);
    
    
    
//     let arr = [name1, Lname1, email1, number1, gender1, dob1, address1, country1, city1, code1, photo1];


//     return arr;
// }


function insertData(readData) {

    let table = document.querySelector("table");
    table.style.display = "block";

    let row = table.insertRow();
    

    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    row.insertCell(4).innerHTML = readData[4];
    row.insertCell(5).innerHTML = readData[5];
    row.insertCell(6).innerHTML = readData[6];
    row.insertCell(7).innerHTML = readData[7];
    row.insertCell(8).innerHTML = readData[8];
    row.insertCell(9).innerHTML = readData[9];
    // row.insertCell(10).innerHTML = readData[10];
    let image = document.createElement("img");
    image.id="photo";

    const file = document.getElementById("certificate").files [0];
    const url = URL.createObjectURL(file);

    image.src = url;

    //Set image width and height if needed
    image.width = 100;
    image.height = 100;

    let cell10 = row.insertCell(10);
    cell10.appendChild(image);

    row.insertCell(11).innerHTML = `<button onclick=edit(this)>Edit</button> 
    <button onclick=remove(this)>Delete</button>`;

}



function edit(td) {
    row = td.parentElement.parentElement;
    clearErrors();
    document.getElementById("firstName").value = row.cells[0].innerHTML;
    document.getElementById("lastName").value = row.cells[1].innerHTML;
    document.forms['myForm']["fEmail"].value = row.cells[2].innerHTML;
    document.getElementById("mobileNumber").value = row.cells[3].innerHTML;

    document.forms['myForm']["gender"].value = row.cells[4].innerHTML;

    document.getElementById("dob").value = row.cells[5].innerHTML;
    document.getElementById("address").value = row.cells[6].innerHTML;

    document.getElementById("country1").value = row.cells[7].innerHTML;

    let selectedCountry = row.cells[7].innerHTML;
    populate(selectedCountry);

    
    // Set city and code fields
    document.getElementById("cityName").value = row.cells[8].innerHTML;
    document.getElementById("code").value = row.cells[9].innerHTML;
    // Get the image source from the table cell
    let imageSrc = row.cells[10].querySelector("img").src;
    
    
fetch(imageSrc)
.then(response => response.blob())
.then(blob => {
    const filename = "yourimage"; // You can set your desired filename
    const convertedFile = new File([blob], filename);

    // Create a new FileList object with the converted file
    const fileList = new DataTransfer();
    fileList.items.add(convertedFile);
    
    // Set the new FileList object as the value of the certificate input element
    const certificateInput = document.getElementById("certificate");
    certificateInput.files = fileList.files;

    // Update the preview image
    const previewImage = document.getElementById("preview-image");
    previewImage.src = URL.createObjectURL(convertedFile);
    previewImage.style.display = "block";

    // console.log("File converted from URL and set as value:", convertedFile);
})
.catch(error => {
    console.error("Error converting URL to file:", error);
});

}

//update form

function update() {


    row.cells[0].innerHTML = document.getElementById("firstName").value;
    row.cells[1].innerHTML = document.getElementById("lastName").value;
    row.cells[2].innerHTML = document.forms['myForm']["fEmail"].value;
    row.cells[3].innerHTML = document.getElementById("mobileNumber").value;
    document.forms['myForm']["gender"] = row.cells[4].innerHTML;
    row.cells[5].innerHTML = document.getElementById("dob").value;
    row.cells[6].innerHTML = document.getElementById("address").value;
    row.cells[7].innerHTML = document.getElementById("country1").value;
    row.cells[8].innerHTML = document.getElementById("cityName").value;
    row.cells[9].innerHTML = document.getElementById("code").value;
    // row.cells[10].innerHTML = document.getElementById("certificate").value;



    const file = document.getElementById("certificate").files[0];
    // Check if a new file is uploaded
    if (file) {
        // Create a new image element
        let image = document.createElement("img");
        // Set image properties
        image.id = "photo";
        image.width = 100;
        image.height = 100;
        // Create a URL for the new file
        const url = URL.createObjectURL(file);
        // Set the image source to the new URL
        image.src = url;
        // Update the table cell containing the image
        let cell = row.cells[10];
        // Clear the cell content
        cell.innerHTML = '';
        // Append the new image to the cell
        cell.appendChild(image);
    }

    row = null;
}


// function remove(td) {
//     let ans = confirm("Are you sure to delete this Record?");
//     if (ans == true) {
//         row = td.parentElement.parentElement;
//         let table = document.querySelector("table").deleteRow(row.rowIndex);
//     }
    

// }


function remove(td) {
    let ans = confirm("Are you sure to delete this Record?");
    if (ans == true) {
        let table = document.querySelector("table");
        let tbody = table.querySelector("tbody");
        let rows = tbody.querySelectorAll("tr");
        td.parentElement.parentElement.remove(); // Remove the row
        
        
    }
}
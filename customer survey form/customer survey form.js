function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;

    const genders = document.querySelectorAll("input[name='gender']:checked");
    const selectedGenders = [];
    genders.forEach(gender => {
        selectedGenders.push(gender.value);
    });

    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    if(firstName && lastName && dob && country && selectedGenders && profession && email && mobile)
   { const popupContent = `
        First Name: ${firstName}<br>
        Last Name: ${lastName}<br>
        Date of Birth: ${dob}<br>
        Country: ${country}<br>
        Gender: ${selectedGenders.join(", ")}<br>
        Profession: ${profession}<br>
        Email: ${email}<br>
        Mobile Number: ${mobile}
    `;

    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "flex";
   }
   else
   {
    alert("Please Fill All The Details")
   }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}

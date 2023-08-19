//name
let namee = document.getElementById("name");

let fname = document.getElementById("fname");

const handleSubmit = (e) => {


    e.preventDefault();

    const nameReturn = namefunction();
    const fnameReturn = fnamefunction();
    const contractReturn = handlecontract();
    const emailReturn = handleEmail();
    const ageReturn = handleage();

    // nameReturn && fnameReturn && contractReturn && emailReturn &&

    if (nameReturn && fnameReturn && contractReturn && emailReturn && ageReturn) {
        alert("Form submited")
    }

}

const namefunction = () => {

    if (namee.value) {

        if (namee.value.length > 3) {
            namee.style.border = "";
        document.getElementById("command").innerText = "";
            return true;

        } else {
            //alert("length is low")
            return false;
        }

    } else {
        namee.style.border = '5px solid red';
        document.getElementById("command").innerText = "\n --Plz Enter Valid Name";

        return false;
    }

}


//fathers name

const fnamefunction = () => {

    if (fname.value) {

        if (fname.value.length > 3) {
            fname.style.border = "";
        document.getElementById("fcommand").innerText = "";
            return true;

        } else {
            //alert("Flength is low")
            return false;
        }

    } else {
        fname.style.border = '5px solid red';
        document.getElementById("fcommand").innerText = "\n --Plz Enter Valid Fname";
        return false;
    }
}

//contract validation
const phn=document.getElementById("phn");

function handlecontract() {

    let num = document.myform.contract.value;

    if (num) {

        if (isNaN(num)) {

            phn.innerHTML = "\n Enter Numeric value only";

            alert("CONTRACT : plz enter numeric number only");


            return false;

        }
        else {
            phn.style.border = "";
        document.getElementById("pcommand").innerText = "";
            return true;
        }
    } else {
        phn.style.border = '5px solid red';
        document.getElementById("pcommand").innerText = "\n -Plz Enter Valid Number";
        return false;
    }
}

//Email validation

function handleEmail() {

    // let x = document.myform.email.value;
    // let atposition = x.indexOf("@");
    // let dotposition = x.lastIndexOf(".");

    // if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {

    //     alert("Please enter a valid e-mail address :");
    //     mail.style.border = '5px solid red';
    //     document.getElementById("ecommand").innerText = "\n -Plz Enter Valid Email";
    //     return false;
    // }
    return true;
}


const ag = document.getElementById("ag");
//Age validation.
function handleage() {

    // let x = document.myform.age.value;



    if (Number(ag.value) > 18 && Number(ag.value) < 100) {
        ag.style.border ="";
        document.getElementById("acommand").innerText = "";
        return true;
    } else {

        alert("AGE :\n plz insert Age 18+");
        ag.style.border = '5px solid red';
        document.getElementById("acommand").innerText = "\n -Plz Enter Valid age";
        return false;

    }

}

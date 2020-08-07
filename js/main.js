

let form = document.getElementById("myform");

//let botonera = document.getElementById("send").submit();
console.log(form);

const evento = (event) => {
    event.preventDefault();



    let input = document.querySelectorAll(".form-control");
    let alerta = document.querySelector(".alert")

    let error = false;

    input.forEach(element => {

        if (element.value === "") {

            //event.preventDefault();
            element.classList.add("alert-danger")
            error=true;
        } else {
            element.classList.remove("alert-danger")
        }
    });
    if (error){
        alerta.classList.remove("d-none");
    }else {
        alerta.classList.add("d-none");
    }
}

form.addEventListener("submit", evento);

















const maimForm = document.getElementById("mainForm");
const includeParent = document.getElementById("includeParent");
const formParentName = document.getElementsByClassName("form-check-parent-name");

function changeIncludeParent(e) {
    if (!e.currentTarget.checked) { }
    Array.prototype.forEach.call(formParentName, (element) => {
        if (!e.currentTarget.checked) {
            element.setAttribute("disabled", true)
        } else {
            element.removeAttribute("disabled");
        }

    })
}

function submitMainForm() {
    console.log(maimForm)
}
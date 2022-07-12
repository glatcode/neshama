const includeParent = document.getElementById("includeParent");
const formParentName = document.getElementsByClassName("form-check-parent-name");

function ChangeIncludeParent(e) {
    if (!e.currentTarget.checked) { }
    Array.prototype.forEach.call(formParentName, (element) => {
        if (!e.currentTarget.checked) {
            element.setAttribute("disabled", true)
        } else {
            element.removeAttribute("disabled");
        }

    })
}
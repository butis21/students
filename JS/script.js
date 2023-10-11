function saveData() {
    var checkboxes = document.getElementsByName("presence");
    var data = [];
    for (var i = 0; i < checkboxes.length; i++) {
        data.push({
            name: checkboxes[i].parentNode.previousElementSibling.textContent,
            presence: checkboxes[i].checked,
            reason: checkboxes[i].parentNode.nextElementSibling.querySelector('input[name="reason"]').value
        });
    }
    localStorage.setItem("studentData", JSON.stringify(data));
}

function clearData() {
    var checkboxes = document.getElementsByName("presence");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        checkboxes[i].parentNode.nextElementSibling.querySelector('input[name="reason"]').value = '';
    }
    localStorage.removeItem("studentData");
}

window.onload = function () {
    var savedData = localStorage.getItem("studentData");
    if (savedData) {
        var data = JSON.parse(savedData);
        var checkboxes = document.getElementsByName("presence");
        for (var i = 0; i < checkboxes.length; i++) {
            var studentName = checkboxes[i].parentNode.previousElementSibling.textContent;
            for (var j = 0; j < data.length; j++) {
                if (data[j].name === studentName) {
                    checkboxes[i].checked = data[j].presence;
                    checkboxes[i].parentNode.nextElementSibling.querySelector('input[name="reason"]').value = data[j].reason;
                    break;
                }
            }
        }
    }
};
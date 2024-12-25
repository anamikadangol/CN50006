const dateofBirth = "20/08/2000";

const getStudentName = () => "Anamika Dangol";

const getCampusName = () => "UEL dockland campus";

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;
exports.Studentgrade = (marks) => {
    return marks > 40 && marks < 70 ? "C grade" : "A grade";
};
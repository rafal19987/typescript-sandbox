var Proficiency;
(function (Proficiency) {
    Proficiency["Junior"] = "junior";
    Proficiency["Regular"] = "regular";
    Proficiency["Expert"] = "expert";
})(Proficiency || (Proficiency = {}));
var candidate = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    email: 'john.doe@com',
    mainLanguage: 'C#',
    proficiency: Proficiency.Expert,
    hobbies: ['sport', 'netflix', 'books']
};
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isValid = function (_a) {
        var email = _a.email;
        return email != null;
    };
    return EmailValidator;
}());
var ProficiencyValidator = /** @class */ (function () {
    function ProficiencyValidator() {
    }
    ProficiencyValidator.prototype.isValid = function (_a) {
        var proficiency = _a.proficiency;
        return (proficiency !== Proficiency.Junior && proficiency !== Proficiency.Regular);
    };
    return ProficiencyValidator;
}());
function getName(candidate) {
    return "".concat(candidate.firstName, " ").concat(candidate.lastName);
}
function processCandidate(candidate) {
    var fullName = getName(candidate);
    console.log('Hello' + fullName + '!');
    var validators = [new EmailValidator(), new ProficiencyValidator()];
    var isValid = validators.every(function (validator) { return validator.isValid(candidate); });
    if (!isValid) {
        return;
    }
}

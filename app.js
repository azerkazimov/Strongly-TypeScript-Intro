var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name, surname, bday, enroll, course, attendance) {
        this.ID = id;
        this.Name = name;
        this.Surname = surname;
        this.BirthDay = bday;
        this.EnrollDate = enroll;
        this.Course = course;
        this.Attendance = attendance;
    }
    return Student;
}());
var student = new Student(1, 'John', 'Doe', new Date(1991, 5, 5), new Date(2008, 11, 21), ['html', 'css'], ['good',]);
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, name, surname, subject, email, course) {
        var _this = _super.call(this, id, name, surname, new Date, new Date, course, []) || this;
        _this.Subject = subject;
        _this.Email = email;
        return _this;
    }
    return Teacher;
}(Student));
var teacher = new Teacher(2, "Mark", "Ross", 'TypeScript', 'mark@mail.com', ['html', 'css']);
var Lesson = /** @class */ (function (_super) {
    __extends(Lesson, _super);
    function Lesson(id, title, description, start, end, classroom) {
        var _this = _super.call(this, id, '', '', new Date, new Date, [], []) || this;
        _this.Title = title;
        _this.Description = description;
        _this.startTime = start;
        _this.endTime = end;
        _this.Class = classroom;
        return _this;
    }
    return Lesson;
}(Student));
var lesson = new Lesson(3, 'Phyton', 'Into to Phyton', new Date(2023, 5, 11), new Date(2024, 5, 30), 'Class A');

class Student {
    private ID: number
    public Name: string
    public Surname: string
    private BirthDay: Date
    private EnrollDate: Date
    public Course: string[]
    public Attendance: any[]

    constructor(id: number, name: string, surname: string, bday: Date, enroll: Date, course: string[], attendance: string[]) {
        this.ID = id;
        this.Name = name;
        this.Surname = surname;
        this.BirthDay = bday;
        this.EnrollDate = enroll;
        this.Course = course;
        this.Attendance = attendance;
    }
}

let student = new Student(1, 'John', 'Doe', new Date(1991, 5, 5), new Date(2008, 11, 21,), ['html', 'css'], ['good',]);

class Teacher extends Student {
    public Subject: string;
    public Email: string;
    constructor(id: number, name: string, surname: string, subject: string, email: string, course: string[]) {
        super(id, name, surname, new Date, new Date, course, [])
        this.Subject = subject;
        this.Email = email;
    }
}

let teacher = new Teacher(2, "Mark", "Ross", 'TypeScript', 'mark@mail.com', ['html', 'css']);

class Lesson extends Student {
    public Title: string;
    public Description: string;
    public Class: string;
    private startTime: Date;
    private endTime: Date;
    constructor(id: number, title: string, description: string, start: Date, end: Date, classroom: string) {
        super(id, '', '', new Date, new Date, [], [])
        this.Title = title;
        this.Description = description;
        this.startTime = start;
        this.endTime = end;
        this.Class = classroom;
    }
}

let lesson = new Lesson(3, 'Phyton', 'Into to Phyton', new Date(2023, 5, 11), new Date(2024, 5, 30), 'Class A')



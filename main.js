// Objetos literales
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

// Prototipos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student("Juanita Alejandra", 15, [
  "Curso de Introducción a la Producción de Videojuegos",
  "Curso de Creación de Personajes",
]);

//juanita.aprobarCurso("React");

// Prototipos con la sintaxis de clases
//sintasix mas amigable
//“RORO” del Inglés “Receive an object, return an object” (Recibe un objeto, devuelve un objeto).
//no importa el orden o si estan completos o incompletos
class Student2 {
  constructor({ name, cursosAprobados = [], age, email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

//creando una nueva intancia
const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});

miguelito.aprobarCurso("Curso avanzado de React");

////////////////////////////////////////////////////////////////////////////
function videoPlay(id) {
  const urlSecreta = "http://platzivideosecreto.com";
  console.log("se esta reproduciendo");
}

function videoStop(id) {
  const urlSecreta = "http://platzivideosecreto.com";
  console.log("Pausamos la url" + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  //metodos

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = false;
    this.lang = "spanish";
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombre) {
    //validaciones
    if (nuevoNombre === "Curso Malito de Programación Básica") {
      console.error("Web... No");
    } else {
      this._name = nuevoNombre;
    }
  }
}

//llama al geeter
cursoProgBasica.name;

//para actualizarlo
cursoProgBasica.name = "Curso gratis de programación";

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const cursoDefinitivoHTML = new Course({
  name: "Curso definitivo de html y css",
  lang: "english",
  isFree: true,
});
////////////////herencia/////
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class FreeStudent extends Student {
  constructor(props) {
    //permite llamar al contructor de la clase madre
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approveCourse.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos gratis"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    //permite llamar al contructor de la clase madre
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approveCourse.push(newCourse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", solo puedes tomar cursos en español"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    //permite llamar al contructor de la clase madre
    super(props);
  }
  approveCourse(newCourse) {
    this.approveCourse.push(newCourse);
  }
}

const juan2 = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new ExpertStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});

//
//miguelito.approveCourse(cursoDefinitivoHTML);

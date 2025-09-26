import axios from "axios";
import { defineStore } from "pinia";

export const useCourseStore = defineStore("autenticacion", {
  state: () => ({
    courseList: [],
    idEditStudent: String,
    isUpdated: false,
    estudianteActualizado: {
      name: null,
      lastName: null,
      dni: 0,
      numSemester: 0,
    }
  }),
  actions: {
    getIdEditarEstudiante() {
      return this.idEditStudent;
    },
    setIdEstudiante(id) {
      this.idEditStudent = id;
    },
    async fetchCourses() {
      try {
        const response = await axios.get('http://34.176.250.35:8080/system/api/v1/courses',
          { headers: {  'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        );
        const data = response.data;
        if (data) {
          this.courseList = data;
          console.log(this.courseList);
        }

      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    },
    async addCourse(nameCourse, courseShift) {
      try {
        const response = await axios.post('http://34.176.250.35:8080/system/api/v1/courses',
          {name: nameCourse, Shift: courseShift},
          { headers: {  'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        );
        const data = response.data;
        if (data) {
          console.log("Curso agregado:", data);
          this.courseList.push(data);
        }
      } catch (error) {
        console.error("Error al agregar el curso:", error);
      }
    },
    async updateStudent() {
      try {
        const response = await axios.patch(`http://34.176.250.35:8080/system/api/v1/students/${this.idEditStudent}`,
          this.estudianteActualizado,
          { headers: {  'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        );
        const data = response.data;
        if (data) {
          this.isUpdated = true;
          this.courseList.forEach(curso => {
            const index = curso.students.findIndex(est => est.id === this.idEditStudent);
            if (index !== -1) {
              curso.students[index].name = this.estudianteActualizado.name;
              curso.students[index].lastName = this.estudianteActualizado.lastName;
              curso.students[index].dni = this.estudianteActualizado.dni;
              curso.students[index].numSemester = this.estudianteActualizado.numSemester;
            }
          });
        }
      } catch (error) {
        console.error("Error al actualizar el estudiante:", error);
      }
    },
  },
});


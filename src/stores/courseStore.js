import axios from "axios";
import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", {
  state: () => ({
    courseList: [],
    idEditStudent: String,
    isUpdated: false,
    estudianteActualizado: {
      name: null,
      lastName: null,
      dni: 0,
      numSemester: 0,
    },

    cursoActualizado: {
      id: null,
      name: null,
      shift: null,
    },
    idCursoAEditar: null,

  }),
  actions: {
    getIdEditarEstudiante() {
      return this.idEditStudent;
    },

    setIdEstudiante(id) {
      this.idEditStudent = id;
    },

    setCursoAEditar(curso) {
      this.cursoActualizado.id = curso.id;
      this.cursoActualizado.name = curso.name;
      this.cursoActualizado.shift = curso.shift;
      this.idCursoAEditar = curso.id;
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

    async deleteStudent(id) {
      const token = sessionStorage.getItem('token')
      console.log(token)
      try {
        const response = await axios.delete(`http://34.176.250.35:8080/system/api/v1/studnet/${id}`,
        { headers: {  'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        )
        const data = response.data;
        if(data) {
          console.log("data: " + data)
        }
      } catch(error) {
        console.log("Error eliminando estudiante", error);
      }
    },

    async updateCourse() {
      try {
        const response = await axios.patch(
        `http://34.176.250.35:8080/system/api/v1/courses`,
        this.cursoActualizado,
        {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        const data = response.data;
        if (data) {
          this.isUpdated = true;
          const index = this.courseList.findIndex(curso => curso.id === this.cursoActualizado.id);
          if (index !== -1) {
            this.courseList[index].name = this.cursoActualizado.name;
          }
          return true;
        }
      } catch (error) {
        console.error("Error al actualizar el curso:", error);
        this.isUpdated = false;
        return false;
      }
    },

    async deleteCourse(id) {
      const token = sessionStorage.getItem('token');
      try {
        const response = await axios.delete(
          `http://34.176.250.35:8080/system/api/v1/courses/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (response.status === 200 || response.status === 204) {
          this.courseList = this.courseList.filter(curso => curso.id !== id);
          console.log(`Curso con ID ${id} eliminado exitosamente.`);
          return true;
        }

      } catch (error) {
        console.error("Error al eliminar el curso:", error);
        throw error;
      }
    },
  }
});


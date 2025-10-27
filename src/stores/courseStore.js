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
      average: 0,
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
        // 'http://34.176.250.35:8080/system/api/v1/courses https://ubelgrano.diegodev.net/api/login
        const response = await axios.get('https://ubelgrano.diegodev.net/api/v1/courses',
          { headers: {  'Authorization': `Bearer ${sessionStorage.getItem('token')}` } }
        );
        const data = response.data;
        if (data) {
          this.courseList = data;
        }

      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    },

    async updateStudent() {
      try {
        // http://34.176.250.35:8080/system/api/v1/students/${this.idEditStudent}
        const response = await axios.patch(`https://ubelgrano.diegodev.net/api/v1/students/${this.idEditStudent}`,
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
              curso.students[index].average = this.estudianteActualizado.average;
            }
          });
        }
      } catch (error) {
        console.error("Error al actualizar el estudiante:", error);
      }
    },

    async updateCourse() {
      try {
        //  `http://34.176.250.35:8080/system/api/v1/courses`,
        const response = await axios.patch(
        `https://ubelgrano.diegodev.net/api/v1/courses`,
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
        const url = `https://ubelgrano.diegodev.net/api/v1/courses/${id}`;
        const response = await axios.delete(url,
          { headers: { 'Authorization': `Bearer ${token}` } }
        );

        if (response.status === 200 || response.status === 204) {
          this.courseList = this.courseList.filter(course => course.id !== id);
          return true;
        } else {
          console.error("Respuesta inesperada al eliminar el curso:", response);
          return false;
        }
      } catch (error) {
        console.error("Error al eliminar el curso:", error);
        return false;
      }
    },

    async addCourse(name, shift) {
      const token = sessionStorage.getItem('token');

      try {
        const { data } = await axios.post(
          'https://ubelgrano.diegodev.net/api/v1/courses',
          { name, shift },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (data && data.id) {
          this.courseList.push(data);
          return data;
        }
        throw new Error('El servidor no devolvió el curso creado');
      } catch (error) {
        console.error('Error al crear el curso:', error.response?.data || error.message);
        throw error;
      }
    },

    async deleteStudent(studentDni, courseId) {
      const token = sessionStorage.getItem('token')
      console.log(token)
      try {
        const response = await axios.delete(`https://ubelgrano.diegodev.net/api/v1/courses/${courseId}/students/${studentDni}`,
        {
          headers: {  'Authorization': `Bearer ${sessionStorage.getItem('token')}` },
        }
        )
        if (response.status === 200 || response.status === 204) {
          const curso = this.courseList.find(c => c.id === courseId);
          if (curso) {
            curso.students = curso.students.filter(s => s.dni !== studentDni);
          }
          return true;
        }
      } catch(error) {
        console.error("Error eliminando estudiante:", error.response?.data || error.message);
        throw error;
      }
    },

  }
});


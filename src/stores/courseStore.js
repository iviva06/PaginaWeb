import axios from "axios";
import { defineStore } from "pinia";

export const useCourseStore = defineStore("autenticacion", {
  state: () => ({
    courseList: [],
  }),
  actions: {
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
        const response = await axios.post('http://http://34.176.250.35:8080/system/api/v1/courses',
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
    }
  },
});


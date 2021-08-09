import {createDomain} from "effector";



const studentDomain = createDomain()

const changeStudent = studentDomain.createEvent()
const $selectedStudent = studentDomain.createStore('')
$selectedStudent.on(changeStudent,(_,newValue)=>newValue)

$selectedStudent.watch(student=>{
    console.log(student)
})



export const studentService = {
    selectedGroup: $selectedStudent,
    changeStudent,

}
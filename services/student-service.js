import {createDomain} from "effector";



const studentDomain = createDomain()

const changeStudent = studentDomain.createEvent()
const changeSearch = studentDomain.createEvent()

const $selectedStudent = studentDomain.createStore('')
const $search = studentDomain.createStore('')



$selectedStudent.on(changeStudent,(_,newValue)=>newValue)
$search.on(changeSearch,(_,newValue)=>newValue)

$selectedStudent.watch(student=>{
    console.log(student)
})





export const studentService = {
    selectedGroup: $selectedStudent,
    search:$search,
    changeStudent,
    changeSearch
}
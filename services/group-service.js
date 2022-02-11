import {createDomain, createEffect} from "effector";



const groupDomain = createDomain()

const changeGroup = groupDomain.createEvent()
const $selectedGroup = groupDomain.createStore('')
$selectedGroup.on(changeGroup,(_,newValue)=>newValue)

$selectedGroup.watch(group=>{
    console.log(group)
})



export const groupService = {
    selectedGroup: $selectedGroup,
    changeGroup,

}
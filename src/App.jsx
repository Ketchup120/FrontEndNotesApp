import { useState,useEffect } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import Notes from './components/notes'
import Popup from './components/popup'

function App() {
  let inigrp=[]
  let ininotes=[]
  if(localStorage.getItem("object")!=null)
  {
    let a = JSON.parse(localStorage.getItem("object"))
    inigrp = a["group"]
    ininotes=a["notes"]
  }
  const [group,SetGroup] = useState(inigrp)
  const [notes,SetNotes] = useState(ininotes)
  const [activeindex,SetActiveindex] = useState(0)
  const [popupToggle,setpopupToggle] = useState(0)
  useEffect(()=>
  {
    let local = {"group":group,"notes":notes}
    localStorage.setItem("object",JSON.stringify(local))
    console.log("local")
  },[group,notes])
  const setactiveindex =(a)=>{
    SetActiveindex(a)
  }
  const setnotes = (a)=>{
    SetNotes(a)
    let local = {"group":group,"notes":notes}
    localStorage.setItem("object",JSON.stringify(local))
  }
  const toggle =()=>{
    if (popupToggle == 0)
      setpopupToggle(1)
    else 
      setpopupToggle(0)
  }
  const addGroup =(g,c)=>{
    let temp = group
    temp = [...temp,{id:group.length+1,name:g,colour:c
    }]
    console.log("before"+temp)
    SetGroup(temp)
    let temp1 = notes
    let x ={notes:[],
            date:[] }
    temp1 = [...temp1,x]
    temp1.map((val)=>{console.log("teting"+val)})
    SetNotes(temp1) 
  }
  return (
    <div>
       <Sidebar props = {group} setindex = {setactiveindex} popup = {toggle} index = {activeindex}/>
       <Notes group={group} notes={notes} activeindex={activeindex} setnotes={setnotes}/>
       <Popup toggle = {popupToggle} addgroup = {addGroup} settoggle = {toggle}/>
    </div>
  )
}

export default App

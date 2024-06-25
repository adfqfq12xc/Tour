import { getDatabase, push, set,ref } from 'firebase/database';
import React, { useState } from 'react'
import { app } from './firebaseconfud';
import { tourData } from './tourData';
export default function Add() { 
    const saveData=async()=>{
        const db=getDatabase(app);
       tourData.map((e)=>{
        const newdoc=push(ref(db,'tours/'));
        set(newdoc,{
            id:e.id,
            city:e.city,
            img:e.img,
            name:e.name,
            info:e.info,
        }).then(()=>{
            console.log("datasaved successfully")
        })
       })
     
    }
  return (
    <div onClick={saveData}>add</div>
  )
}

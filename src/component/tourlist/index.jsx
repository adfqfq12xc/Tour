import React ,{useEffect, useState} from 'react'
import './tourlist.scss'
import Tour from '../tour/Tour'
import { get, getDatabase, ref } from 'firebase/database'
import { app } from '../../firebaseconfud'
import { useContext } from 'react'
import { UserContext } from '../../usercontext' 

export default function Tourlist() {
  const [tourData,letfruit]=useState([])
  const {setData}=useContext(UserContext)
  useEffect(()=>{
    const display=async ()=>{
      const db=getDatabase(app);
      const dataref=ref(db,'tours');
      const snapshots=await get(dataref);
      console.log("Fetchiing data")
      if(snapshots.exists()){
          letfruit(Object.values(snapshots.val()))
          setData(Object.values(snapshots.val()))
      }else{
          alert("Error")
      }
    }
    display()
  })
// tourUtils.js



  return (
    <div className='tourlist'>
      {tourData.map((e)=>{
    return  <Tour tour={e} key={e.id}/>

      })}

    </div>
  )
}

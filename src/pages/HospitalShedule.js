import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function HospitalShedule() {
    const { doctorId, hospitalId } = useParams();
    const [state, setState] = useState();
    console.log(doctorId)
    useEffect(() => {}, []);
    // request to back end to fetch the hospital shedule data;
  return (
    <div>HospitalShedule</div>
  )
}

export default HospitalShedule
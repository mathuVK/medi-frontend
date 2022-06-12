import React, { useState, useEffect } from "react";
import "./Doctorlist.css";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
export default function Doctorlist({}) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .post("http://localhost:3001/channel", {
        Doctorname: searchParams.get("docname"),
        Hospitalname: searchParams.get("hospitalname"),
        Speciality_type: searchParams.get("specialist"),
      })
      .then((res) => {
        if (res.status === 200) {
          setList(res.data);
        }
      })
      .catch((err) => {
        console.log("err: " + err);
      });
  }, []);
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>DoctorName</th>
            <th style={{ textAlign: "center" }}>Hospitalname</th>
            <th style={{ textAlign: "center" }}>Speciality</th>
            <th style={{ textAlign: "center" }}>View</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr>
                <td> {item.DoctorName}</td>
                <td> {item.Hospitalname}</td>
                <td> {item.Speciality_type}</td>
                <Button
                  onClick={() =>
                    navigate(
                      `hospitalShedule/${item.Doctor_id}/${item.Hospital_id}`
                    )
                  }
                />
                <td>
                  <button className="bookbutton">Book</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

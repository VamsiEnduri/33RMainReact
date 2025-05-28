// import React from "react";

// const Students = () => {
//   //     const stu_details = [
//   //   {
//   //     name: "Rahul Sharma",
//   //     age: 20,
//   //     rollNo: "CS101",
//   //     collegeName: "Indian Institute of Technology, Delhi"
//   //   },
//   //   {
//   //     name: "Priya Patel",
//   //     age: 21,
//   //     rollNo: "EC202",
//   //     collegeName: "National Institute of Technology, Surat"
//   //   },
//   //   {
//   //     name: "Amit Singh",
//   //     age: 19,
//   //     rollNo: "ME303",
//   //     collegeName: "Birla Institute of Technology and Science, Pilani"
//   //   },
//   //   {
//   //     name: "Neha Gupta",
//   //     age: 22,
//   //     rollNo: "CE404",
//   //     collegeName: "Indian Institute of Science, Bangalore"
//   //   },
//   //   {
//   //     name: "Sandeep Kumar",
//   //     age: 20,
//   //     rollNo: "EE505",
//   //     collegeName: "Delhi Technological University"
//   //   },
//   //   {
//   //     name: "Anjali Desai",
//   //     age: 21,
//   //     rollNo: "IT606",
//   //     collegeName: "Vellore Institute of Technology"
//   //   },
//   //   {
//   //     name: "Vikram Joshi",
//   //     age: 19,
//   //     rollNo: "AE707",
//   //     collegeName: "Manipal Institute of Technology"
//   //   },
//   //   {
//   //     name: "Pooja Reddy",
//   //     age: 20,
//   //     rollNo: "CH808",
//   //     collegeName: "Indian Institute of Technology, Bombay"
//   //   },
//   //   {
//   //     name: "Arun Malhotra",
//   //     age: 22,
//   //     rollNo: "BT909",
//   //     collegeName: "Indian Institute of Technology, Madras"
//   //   },
//   //   {
//   //     name: "Divya Iyer",
//   //     age: 21,
//   //     rollNo: "PH1010",
//   //     collegeName: "Indian Institute of Technology, Kharagpur"
//   //   }
//   // ];
//   // console.log(stu_details)

//   const data = ["vamsi", "ravi", "ramu"];
//   const loc = "hyd";
//   return (
//     <div className="students">
//       <h1>{loc}</h1>
//       <p>
//         {data.map((elem, index) => {
//           console.log(elem);
//           return (
//             <div>
//               <span>{elem}</span>
//             </div>
//           );
//         })}
//       </p>
//     </div>
//   );
// };

// export default Students;

import React from "react";

const Students = () => {
  const stu_details = [
    {
      name: "Rahul Sharma",
      age: 20,
      rollNo: "CS101",
      collegeName: "Indian Institute of Technology, Delhi",
    },
    {
      name: "Priya Patel",
      age: 21,
      rollNo: "EC202",
      collegeName: "National Institute of Technology, Surat",
    },
    {
      name: "Amit Singh",
      age: 19,
      rollNo: "ME303",
      collegeName: "Birla Institute of Technology and Science, Pilani",
    },
    {
      name: "Neha Gupta",
      age: 22,
      rollNo: "CE404",
      collegeName: "Indian Institute of Science, Bangalore",
    },
    {
      name: "Sandeep Kumar",
      age: 20,
      rollNo: "EE505",
      collegeName: "Delhi Technological University",
    },
    {
      name: "Anjali Desai",
      age: 21,
      rollNo: "IT606",
      collegeName: "Vellore Institute of Technology",
    },
    {
      name: "Vikram Joshi",
      age: 19,
      rollNo: "AE707",
      collegeName: "Manipal Institute of Technology",
    },
    {
      name: "Pooja Reddy",
      age: 20,
      rollNo: "CH808",
      collegeName: "Indian Institute of Technology, Bombay",
    },
    {
      name: "Arun Malhotra",
      age: 22,
      rollNo: "BT909",
      collegeName: "Indian Institute of Technology, Madras",
    },
    {
      name: "Divya Iyer",
      age: 21,
      rollNo: "PH1010",
      collegeName: "Indian Institute of Technology, Kharagpur",
    },
  ];
  return (
    <div className="students" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"20px"}}>
      {stu_details.map((student, index) => {
        return(
            <div style={{marginBottom:"20px",border:"1px solid black",padding:"10px"}}>
                <h1>{student.name}</h1>
                <p>{student.collegeName}</p>
                <span>{student.age}</span>
            </div>
        )
      })}
    </div>
  );
};

export default Students;

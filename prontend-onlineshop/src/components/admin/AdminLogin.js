// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {

//   const navigate = useNavigate();
  
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const onLogin = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:9000/api/user")
//       .then((res) => res.json())
//       .then((data) => {
//         const userArr = data.result.filter(
//           (e) => e.userName == username && e.userPass == password
//         );
//         if (userArr.length > 0) {
//           localStorage.setItem("name", userArr[0].userName);
//           localStorage.setItem("firstname", userArr[0].firstname);

//           navigate("/admin");
//         } else {
//           alert("Таны бүртгэл байхгүй байна");
//         }
//       })
//       .catch((err) => console.log(err))
//       .finally((finish) => console.log(finish));
//   };

//   useEffect(() => {
//     if (localStorage.getItem("name")) {
//       navigate("/admin");
//     }
//   }, []);

//   return (
//     <div className="modal" style={{ display: "block" }}>
//     <div className="modal-body">
//       <div className="row">
//         <div className="col-md-12">
//           <h2>Admin Login</h2>
//           <form>
//             <div className="mb3">
//               <label className="form-label">User name</label>
//               <input
//                 className="form-control"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="mb3">
//               <label className="form-label" type="e-mail">
//                 Password
//               </label>
//               <input
//                 className="form-control"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="mb3">
//               <button onClick={onLogin} className="btn btn-primary">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }

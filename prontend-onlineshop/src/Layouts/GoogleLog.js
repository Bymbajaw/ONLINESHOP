// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function GoogleLog({ setUser, user, onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [admin, setAdmin] = useState(false);

//   // const navigate = useNavigate
//   const navigate = useNavigate();

//   const [modal, setModal] = useState(false);
//   //clickeddd
//   const toggleModal = () => {
//     setModal(!modal);
//   };
//   return (
//     <>
//       <button
//         className="btn btn-control google-btn d-flex row sign"
//         onClick={toggleModal}
//       >
//         <div className="col-2">
//           <img src={require("./image/google.png")} alt="google img" />
//         </div>
//         <div className="col-10">Sign in with Google</div>
//       </button>

//       {modal && (
//         <div
//           className="modal"
//           onClick={toggleModal}
//           style={{ display: modal ? "block" : "none" }}
//         >
//           <div className="overlay" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-box">
//               <div className="modal-content">
//                 <div className="close-icon" onClick={toggleModal}>
//                   <i class="bi bi-x-lg"></i>
//                 </div>
//                 <h2>Welcome back</h2>
//                 <div className="mb-3">
//                   <label className="form-label">Username</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     className="form-control"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <button
//                     className="btn btn-light pe-4"
//                     onClick={() => onLogin(username, password)}
//                   >
//                     Login
//                   </button>
//                   <button
//                     className="btn btn-secondary pe-4"
//                     onClick={toggleModal}
//                   >
//                     Close
//                   </button>
//                   <span
//                     onClick={() => {
//                       setAdmin(true);
//                       navigate("/login");
//                     }}
//                   >
//                     Go to admin login
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

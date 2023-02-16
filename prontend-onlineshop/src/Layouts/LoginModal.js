// import React, { useState } from "react";
// import GoogleLog from "./GoogleLog";

// export default function LoginModal() {
//   const [user, setUser] = useState();
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     console.log("clicked");
//     setModal(!modal);
//   };

//   const onLogin = (uname, pword) => {
//     user.map((userObj) => {
//       if (userObj.username == uname && userObj.password == pword) {
//         toggleModal(false);
//         setUser(userObj);
//       }
//     });
//   };

//   return (
//     <>
//       {/* <button onClick={toggleModal} className="btn-modal btn btn-primary login">
//         <p>login</p>
//       </button> */}
//       <span className=" sign in" >
//         <span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="30"
//             height="30"
//             fill="currentColor"
//             class="bi bi-bag-plus"
//             viewBox="0 0 16 16"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
//             />
//             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//           </svg>
//         </span>
//       </span>
//       <span className="ps-4" onClick={toggleModal}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="30"
//           height="30"
//           fill="currentColor"
//           class="bi bi-person-circle"
//           viewBox="0 0 16 16"
//         >
//           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//           <path
//             fill-rule="evenodd"
//             d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//           />
//         </svg>
//       </span>

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
//                 <GoogleLog setUser={setUser} onLogin={onLogin} />
//                 <button className="btn btn-control facebook-btn d-flex row sign">
//                   <div className="col-2">
//                     <img
//                       src={require("./image/facebook.png")}
//                       alt="facebook img"
//                     />
//                   </div>
//                   <div className="col-10">Sign in with Facebook</div>
//                 </button>
//                 <button className="btn btn-control apple-btn d-flex row sign">
//                   <div className="col-2">
//                     <img src={require("./image/apple.png")} alt="google img" />
//                   </div>
//                   <div className="col-10">Sign in with Apple</div>
//                 </button>
//                 <button className="btn btn-control twitter-btn row d-flex sign">
//                   <div className="col-2">
//                     <img
//                       src={require("./image/twitter.png")}
//                       alt="google img"
//                     />
//                   </div>
//                   <div className="col-10">Sign in with Twitter</div>
//                 </button>
//                 <button className="btn btn-control email-btn row d-flex sign">
//                   <div className="col-2">
//                     <img src={require("./image/email.png")} alt="google img" />
//                   </div>
//                   <div className="col-10">Sign in with E-mail</div>
//                 </button>
//                 <div className="create-one">
//                   <p>
//                     No account? <b>Create one</b>
//                   </p>
//                 </div>

//                 <div className="get-help">
//                   <p>
//                     Forgot email or trouble signing in?
//                     <a href="#"> Get help.</a>
//                   </p>
//                 </div>
//                 <div className="privacy">
//                   <p>
//                     Click “Sign In” to agree to Medium’s
//                     <a href="#"> Terms of Service </a> and acknowledge that
//                     Medium’s <a href="#">Privacy Policy</a> applies to you.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

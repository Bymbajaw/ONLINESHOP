import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header(openModal, setUser, user, style, showModal) {
  const cates = [
    { id: 1, title: "Product", link: "product" },
    { id: 2, title: "Services", link: "services" },
    { id: 3, title: "Article", link: "article" },
    { id: 4, title: "About us", link: "aboutus" },
  ];

  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={require("./img/logo-removebg-preview.png")} alt="google img"
          width={110}
          height={50}
          className="img"/>
        </Link>
        <nav className="col-6">
          <ul className="d-flex align-items-center justify-content-between ">
            {cates.map((a, index) => {
              return (
                // <li>
                //   <a className="title text-decoration-none" href={a.link}>
                //     {a.title}
                //   </a>
                // </li>
                <li className="list-item" key={index}>
                  {a.id == 4 ? (
                    user ? (
                      user
                    ) : (
                    <div></div>
                    )
                  ) : (
                    <a className="title text-decoration-none" href={a.link}>
                      {a.title}
                    </a>
                  )}
                </li>
              );
            })}
            <li className="list-item login">
              <LoginModal />
            </li>

            {user && (
              <button className="btn btn-warning" onClick={() => setUser("")}>
                Log Out
              </button>
            )}
          </ul>
        </nav>
        {/* <span className="col-1 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-bag-plus"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </span>
          <span className="ps-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
        </span> */}
      </div>
    </div>
  );
}

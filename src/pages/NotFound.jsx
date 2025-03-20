import notFound from "../assets/404.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <img src={notFound} alt="Page Not Found" />
      <h1 className="text-3xl mt-20 ">
        Sorry, it looks like the page get lost
      </h1>
      <Link
        className="mt-4 px-6 py-2 bg-casal text-white rounded-lg  transition"
        to={"/login"}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;

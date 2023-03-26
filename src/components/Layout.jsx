import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = ({ children }) => {

  return (
    <>
      <div className="bg-bgDefault text-textDefault">
        <Header />
        {children}
      </div>
      <Toaster />
    </>
  );
};

export default Layout;

import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="bg-bgDefault text-textDefault">
            <Header />
            {children}
        </div>
    )
}

export default Layout
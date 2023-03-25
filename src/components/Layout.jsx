import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="bg-bgBody text-textBody min-w-screen min-h-screen">
            <Header />
            {children}
        </div>
    )
}

export default Layout
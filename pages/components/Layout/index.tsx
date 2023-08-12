import Header from "../Header"
import FooterFilter from "../footer"

const Layout = ({children}) => {
    return(
        <div>
            <Header/>
            <FooterFilter/>
            {children}

        </div>
    )
}

export default Layout;
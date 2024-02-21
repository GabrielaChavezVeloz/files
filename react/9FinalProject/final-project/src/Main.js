import { Outlet } from "react-router-dom"

import Header from "./Header"

const Main = () => {
    return (
        <>
        <Header/>        
        <main>
            {/* <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/courses" element={<ItemListContainer />}/>
                <Route path="/domain/:id" element={<ItemListContainer/>}/>
                <Route path="/course/:id" element={<ItemDetailContainer/>}/>
                <Route path="/addCourse" element={<CourseForm/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/auth" element={<AuthenticationPage/>} />
            </Routes> */}
            <Outlet />
        </main>
        </>
    )
}
export default Main
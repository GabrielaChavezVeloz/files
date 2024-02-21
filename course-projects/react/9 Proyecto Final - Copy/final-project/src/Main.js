import { Routes , Route } from "react-router-dom"

import ItemListContainer from "./courses/ItemListContainer"
import ItemDetailContainer from "./courses/ItemDetailContainer"
import CourseForm from "./courses/CourseForm"
import Cart from "./cart/Cart"
import AuthForm from "./auth/AuthForm"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/courses" element={<ItemListContainer />}/>
                <Route path="/domain/:id" element={<ItemListContainer/>}/>
                <Route path="/course/:id" element={<ItemDetailContainer/>}/>
                <Route path="/addCourse" element={<CourseForm/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/auth" element={<AuthForm/>} />
            </Routes>
        </main>
    )
}
export default Main
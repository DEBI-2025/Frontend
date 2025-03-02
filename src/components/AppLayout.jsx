import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import styled from "styled-components";

function AppLayout() {
    return (
        <Main>
            <NavBar/>
            <Outlet/>
        </Main>
    )
}

export default AppLayout;
const Main = styled.main`
    height: 100vh;

`

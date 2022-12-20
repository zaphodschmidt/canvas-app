import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {Menu} from "antd";


function App() {
   return ( 
    <div>
    <Header />
    <div>
      <SideMenu />
      <Content />
    </div>
    <Footer />
    </div>
   );
}

function Header() {
  return <div>Header</div>
}

function Footer() {
  return <div>Footer</div>
}

function SideMenu() {
  const navigate = useNavigate();
  return (<div style={{ display: "flex", flexDirection: "row" }}>
    <Menu 
    onClick={({key})=>{
      if(key === "signout"){
        //Add sign out feature
      }else{
        navigate(key)
      }
    }}

    items={[
      { label: "Home", key:"/" },
      { label: "Dashboard", key:"/dashboard"},
      { label: "Users List", key:"/usersList"},
      { label: "Profile", key:"/profile"},
      { label: "Signout",key:'signout', danger: true},
    ]}
    ></Menu>
    </div>)
}
function Content() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/usersList" element={<div>Users List</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  </div>
  );
}

export default App;

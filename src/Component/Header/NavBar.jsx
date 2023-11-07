import React, { useContext } from 'react'
import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
const NavBar = () => {

  const { user, logOutUser } = useContext(AuthContext)

  console.log(user)
  const handleLogOut = () => {
    logOutUser()
      .then(() => {

        toast.success("logOut Successful!")

      })
  }







  const navLinks = <div className='flex  text-blue-400 flex-col md:flex-row gap-2 md:gap-6'>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 font-extrabold" : ""}> Home
    </NavLink>
    <NavLink
      to="/allFood"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 font-extrabold" : ""}> All Food Items
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 font-extrabold" : ""}> Blog
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-700 font-extrabold" : ""}> Login
    </NavLink>

  </div>
  return (
    <div className='h-[80px] fixed left-0 top-0 right-0 z-50 bg-transparent'>
      <Navbar className='bg-transparent text-white' >
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MR Restaurant</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={user && user.photoURL} rounded />
            }
          >
            <Dropdown.Header>
              {
                user &&
                <div>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">{user.email}</span>
                </div>
              }
            </Dropdown.Header>
            <Link to="/myAddedFood"><Dropdown.Item>My added food items</Dropdown.Item></Link>
            <Link to="/addFood"><Dropdown.Item>Add a food item</Dropdown.Item></Link>
            <Link to="/myOrder" ><Dropdown.Item>My ordered food item </Dropdown.Item></Link>
            <Dropdown.Divider />
            <Dropdown.Item>

              {
                user ? <button onClick={handleLogOut}>Sign out</button> : <Link to="/login"><button>Log in</button></Link>
              }

            </Dropdown.Item>

          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            {navLinks}
          </Navbar.Link>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar



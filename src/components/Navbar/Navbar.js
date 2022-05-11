import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import odon from "./odon.png";
import { Toolbar, AppBar, Tabs, Tab, Avatar } from "@mui/material";
import Search from "./Search/Search";

function Navbar({ title}) {
	return (
		<AppBar position='static'>
			{/*Tenia disableGutter  */}
			<Toolbar>
				<div className='nav__container-logo'>
					<Logo logo={odon} />
				</div>
				<div className='nav__container-menu'>
					<h1 className='nav__titulo'>{title}</h1>
				</div>
				<div className='nav__menu-items'>
					<Tabs>
						<Tab label='Home' to='/' component={Link}></Tab>
						<Tab
							label='Pacientes'
							to='/pacientes'
							component={Link}></Tab>
						<Tab
							label='odontologos'
							to='/odontologos'
							component={Link}
						/>
						<Tab label='turnos' to='/turnos' component={Link} />
					</Tabs>
					<Search />
				</div>
				<div className='nav__container-users'>
					<Avatar className='nav__users'>
						A
					</Avatar>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;

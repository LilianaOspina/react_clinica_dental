import { Link } from "react-router-dom";
import "./Home.css";
import CardHome from "../CardContain/CardHome";
import { Toolbar, AppBar, Tab, Avatar } from "@mui/material";
import { AccessAlarm, Badge, Group } from "@mui/icons-material";


function Home() {
	return (
		<div className='home'>
			<AppBar position='static'>
				<Toolbar>
					<div className='home__container-logo'></div>
					<div className='home__container-menu'>
						<h1 className='home__titulo'>Clinica Dental</h1>
					</div>
					<div className='home__container-users'>
						<Avatar className='home__users'>A</Avatar>
					</div>
				</Toolbar>
			</AppBar>
			<div className='card__container'>
				<CardHome
					title={"Pacientes"}
					Logo={
						<Group
							sx={{ fontSize: 120, paddingTop: 1 }}
							color='secondary'
						/>
					}>
					<Tab to='/pacientes' component={Link}></Tab>
				</CardHome>
				<CardHome
					title={"Odontologos"}
					Logo={
						<Badge
							sx={{ fontSize: 120, paddingTop: 1 }}
							color='secondary'
						/>
					}>
					<Tab to='/odontologos' component={Link}></Tab>
				</CardHome>
				<CardHome
					title={"Turnos"}
					Logo={
						<AccessAlarm
							sx={{ fontSize: 120, paddingTop: 1 }}
							color='secondary'
						/>
					}>
					<Tab to='/turnos' component={Link}></Tab>
				</CardHome>
			</div>
		</div>
	);
}

export default Home;

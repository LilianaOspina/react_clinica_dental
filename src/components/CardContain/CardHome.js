import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	CardActionArea,
	CardActions,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardHome = ({ title, Logo, children }) => {
	return (
		<div className='card__container'>
			<Card
				elevation={4}
				sx={{
					width: 300,
					margin: 2,
					textAlign: "center",
				}}>
				<CardActionArea>
					<CardMedia
						// component='img'
						height='150'
						alt='pacient'
					>
						{Logo}
					</CardMedia>
					<CardContent>
						<Typography
							gutterBottom
							variant='h3'
							color='primary'
							component='div'>
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "center",
					}}>
					<Button
						size='big'
						color='secondary'
						to='/turnos'
						component={Link}>
						Ingresar
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default CardHome;

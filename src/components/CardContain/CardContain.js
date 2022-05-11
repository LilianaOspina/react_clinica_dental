import React from "react";
import {
	Button,
	CardActionArea,
	CardActions,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardContain = ({ title, children }) => {
	return (
		<div className='card__container'>
			<Card
				elevation={4}
				sx={{
					maxWidth: 300,
					margin: 2,
					textAlign: "center",
				}}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='150'
						image='http://placeimg.com/300/150/people'
						alt='pacient'
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant='h3'
							color='primary'
							component='div'>
							{title}
						</Typography>
						<Typography
							variant='body2'
							color='secondary'
							component='ul'
							sx={{
								listStyleType: "none",
								textAlign: "left",
							}}>
							{children}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "center",
					}}>
					<Button size='small' color='primary'>
						Modificar
					</Button>
					<Button size='small' color='primary'>
						Eliminar
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default CardContain;

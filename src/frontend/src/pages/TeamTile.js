import { React } from 'react';
import { Link } from 'react-router-dom'
import './TeamTile.scss';
export const TeamTile = ({ teamName }) => {

	return (
		<div className="TeamTile">
			<h1 className="text">
				<Link to={`${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}`}>{teamName}</Link>
			</h1>
		</div>
	)


}
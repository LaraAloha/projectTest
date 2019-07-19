import React from 'react';
import {ReactDOM} from 'react-dom';
import ReactDOMServer from "react-dom/server";
import {render} from 'react-dom';
import jsPDF from 'jspdf';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import Radar from 'react-d3-radar';

import styled from 'styled-components';
import './results.css';

const divWrap = styled.div`
	width: 30%;
	font-family: 'Roboto',Arial,sans-serif;
    font-size: 18px;
`;

const ResultsHead = styled.h1`
	font-size: 18px;
`;

const ButtonLoad = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 15px 5px;
	cursor: pointer;
	min-width: 80px;
	max-width: 240px;
	height: 10px;
	margin-top: 20px;
`;

class Results extends React.Component {	

	render() {
		const data = this.props.data;	

		function countResult(number) {
			let result = 0;
			for (let stage = 1; stage <= 4; stage++) {
				 const q = data.stages[stage].questions[number];
				 if (q.answer == q.correctAnswer) {
					   result++;
				 }
			}
			return result*2;
		}

		return (
		<divWrap>
			<div>
				<header>
					<ResultsHead style={{textAlign: 'center'}}>
						Результаты
					</ResultsHead>
					<Radar
					width={450}
					height={450}
					padding={70}
					domainMax={10}
					fontSize= {48}

					highlighted={null}
					onHover={(point) => {
						if (point) {
						console.log('hovered over a data point');
						} else {
						console.log('not over anything');
						}
					}}
					data={{
						variables: [
						{key: 'sales', label: 'Модель продаж'},
						{key: 'planning', label: 'Планирование'},
						{key: 'voronka', label: 'Воронка'},
						{key: 'offer', label: 'Оффер'},
						{key: 'hire', label: 'Найм'},
						{key: 'teaching', label: 'Обучение  и адаптаия'},
						{key: 'motivation', label: 'Мотивация'},
						{key: 'leading', label: 'Управление'},
						{key: 'scripts', label: 'Скрипты'},
						{key: 'crm', label: 'CRM'},
						{key: 'commercial', label: 'Коммерческое предложение'},
						{key: 'clients', label: '"Подогрев" клиентов'},
						],
						sets: [
						{
							key: 'me',
							label: 'My Scores',
							values: {
								sales: countResult(1),
								planning: countResult(2),
								voronka: countResult(3),
								offer: countResult(4),
								hire: countResult(5),
								teaching: countResult(6),
								motivation: countResult(7),
								leading: countResult(8),
								scripts: countResult(9),
								crm: countResult(10),
								commercial: countResult(11),
								clients: countResult(12),
							},
						},
						],
					}}
					/>
					
				</header>
				<ButtonLoad onClick={window.print}>
					Скачать результаты в PDF
				</ButtonLoad>
			</div>
		</divWrap>
		);
	}
}

export default Results;

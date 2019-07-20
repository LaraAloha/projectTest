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
	display: flex;
	flex-direction: row;
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

const First = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 15px 5px;
`;

const Second = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 15px 5px;
`;

class Results extends React.Component {	

	render() {
		const data = this.props.data;	
		const dataResult = [
			{
			  data: {
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
			  meta: { color: 'red' }
			},
		  ];
	   
	  const captions = {
			sales: 'Модель продаж',
			planning: 'Планирование',
			voronka: 'Воронка',
			offer: 'Оффер',
			hire: 'Найм',
			teaching: 'Обучение и адаптация',
			motivation: 'Мотивация',
			leading: 'Управление',
			scripts: 'Скрипты',
			crm: 'CRM',
			commercial: 'Коммерческое предложение',
			clients: '«Подогрев» клиентов',
		  };
	
	
		function countResult(number) {
			let result = 0;
			for (let stage = 1; stage <= 4; stage++) {
				 const q = data.stages[stage].questions[number];
				 if (q.answer == q.correctAnswer) {
					   result++;
				 }
			}
			return result/4;
		}

		return (
		<divWrap>
			<First>
				<ResultsHead style={{textAlign: 'center'}}>
					Ваши результаты
				</ResultsHead>
				<ResultsHead style={{textAlign: 'center'}}>
					Компания: {this.props.company}
				</ResultsHead>
				<RadarChart
						captions={captions}
						data={dataResult}
						size={450}
					/>

				<ButtonLoad onClick={window.print}>
					Скачать результаты в PDF
				</ButtonLoad>
			</First>



			<Second>
<p> Love my boiii </p>
			</Second>
		</divWrap>
		);
	}
}

export default Results;

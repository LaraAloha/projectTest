import React from 'react';
import {ReactDOM} from 'react-dom';
import ReactDOMServer from "react-dom/server";
import {render} from 'react-dom';
import jsPDF from 'jspdf';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import styled from 'styled-components';
import './results.css';

const divWrap = styled.div`
	width: 30%;
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
			  meta: { color: 'blue' }
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
			<div className="wrapper">
				<header>
					<h1 style={{color: 'black'}}>
						Результаты
					</h1>
					<RadarChart
						captions={captions}
						data={dataResult}
						size={450}
					/>
				</header>
				<button onClick={window.print}>
					Скачать результаты в PDF
				</button>
			</div>
		</divWrap>
		);
	}
}

export default Results;

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

const DivWrap = styled.div`
	display: flex;
	flex-direction: row;
	font-family: 'Roboto',Arial,sans-serif;
    font-size: 18px;

		@media (max-width: 1000px) {
			flex-direction: column;
		}
	`;

const ResultsHead = styled.h1`
	font-size: 18px;
`;

const ButtonBottom = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 25px;
	cursor: pointer;
	margin: 10px 0 25px 0;
	border-radius: 10px;
	background-color: red;
	border: 2px solid;
`;

const First = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 15px 25px;
`;

const Second = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 15px 25px;
`;

const Third = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 2px solid;
`;


const Text = styled.div`
	text-align: left;
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
		<DivWrap>
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
						size={500}
					/>

				<ButtonBottom style={{marginTop:'20px'}} onClick={window.print}>
					Скачать результаты в PDF
				</ButtonBottom>
			</First>



			<Second>
				<p> 1 августа 2019 (Москва) <br></br>конференция от Grebenuk Resulting </p>
				<div style={{maxWidth:'65%', border:'solid', padding: '5px'}}> Заполни форму ниже и мы вышлем вам бесплатный билет на конференцию </div>
				<Text>
				<p> Спикеры – топ-директора по продажам: </p>
				<ul>
					<li>BlackStar</li>
					<li>AmoCRM</li>
					<li>1C Bitrix</li>
					<li>Marsh</li>
					<li>Михаил Гребенюк (создатель этого теста)</li>
				</ul>
				</Text>
					<Third style={{border:'2px', padding: '7px'}}>
						<input placeholder="Имя" style={{border:'solid', borderRadius: '10px', fontSize: '14px', margin: '2% 0', width: '90%', height: '30px', padding: '5px'}}/>
						<input placeholder="Телефон" style={{border:'solid', borderRadius: '10px', fontSize: '14px', margin: '2% 0', width: '90%', height: '30px', padding: '5px'}}/>
						<ButtonBottom style={{margin:'20px 20px 0 20px'}}>Получить билет</ButtonBottom>
					</Third>

			</Second>
		</DivWrap>
		);
	}
}

export default Results;

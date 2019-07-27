import React from 'react';
import {ReactDOM} from 'react-dom';
import ReactDOMServer from "react-dom/server";
import {render} from 'react-dom';
import jsPDF from 'jspdf';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
// import Radar from 'react-d3-radar';
import {Radar, Line} from 'react-chartjs-2';
import styled from 'styled-components';
import './results.css';
import html2canvas from 'html2canvas';

class Results extends React.Component {	


	handleClick = () => {
		html2canvas(document.getElementById('canvas')).then(function(canvas) {
			// document.body.appendChild(canvas);
			window.scrollTo(0, 0);
			var doc = new jsPDF({ 
				orientation: 'landscape',
				unit: 'in',
				format: [4000, 4000]
			});
			doc.addImage(canvas, 'PNG', 0, 0);
			doc.save('fac.pdf');
	});	
	}
	
	render() {
		const data = this.props.data;	
	
		const chartOptions = {}

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
		<div className='wrap'>
			<div className='first'>
				<h1 className='resultsHead'>
					Ваши результаты
				</h1>
				<h1 className='resultsHead'>
					Компания: {this.props.company}
				</h1>

				< Radar  id='canvas' data= {{
					labels: 
					[
						"Модель продаж",
						'Планирование',
						'Воронка',
						'Оффер',
						"Найм",
						'Обучение  и адаптация',
						'Мотивация',
						'Управление',
						'Скрипты',
						'CRM',
						'Коммерческое предложение',
						'Подогрев клиентов'
					],
					datasets: [{
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: [
							countResult(1),
							countResult(2),
							countResult(3),
							countResult(4),
							countResult(5),
							countResult(6),
							countResult(7),
							countResult(8),
							countResult(9),
							countResult(10),
							countResult(11),
							countResult(12)
						]
						
					}]	
				}} />


				{/* <Radar
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
						{key: 'teaching', label: 'Обучение  и адаптация'},
						{key: 'motivation', label: 'Мотивация'},
						{key: 'leading', label: 'Управление'},
						{key: 'scripts', label: 'Скрипты'},
						{key: 'crm', label: 'CRM'},
						{key: 'commercial', label: 'Коммерческое предложение'},
						{key: 'clients', label: 'Подогрев клиентов'},
						],
						sets: [
						{
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
					/> */}

				<button 
				onClick={this.handleClick}
				className='buttonBottom' 
				style={{marginTop:'20px'}}
				// onClick={window.print}
				>
					Скачать результаты в PDF
				</button>
			</div>



			<div className='second'>
			<h1 className='resultsHead'>
				Что теперь с этим делать?
			</h1>
				<p className='textAnnounc'>Мы приглашаем вас на практическую конференцию <br></br> ТОП-директора по продажам корпораций на одной сцене 
				поделятся вживую, как они <strong><br></br>«все это» </strong> внедряли
				</p>				
				<div className='textBox'>
					<div>
						<p> Спикеры:</p>
						<ul>
							<li>BlackStar</li>
							<li>AmoCRM</li>
							<li>1C Bitrix</li>
							<li>Marsh</li>
							<li>Михаил Гребенюк (создатель этого теста)</li>
						</ul>
					</div>
					<div>
						<p> 1 августа 2019 Москва <br />(9:30-19:00)<br />Гостиница "Бородино"<br />Адрес: Ул. Русаковская, дом 13, строение 5<br /> 
						</p>
					</div>
				</div>
				{/* <p>БЕСПЛАТНЫЕ БИЛЕТЫ<br />для участников теста<br />Заполните форму и мы вышлем вам <br />пригласительный для вас и еще 1 для вашего друга</p> */}

				<a className='buttonDirect' href="https://test300.ru/end/" style={{margin:'20px 20px 0 20px'}}>Получить билеты на конференцию</a>

					{/* <Third style={{border:'2px', padding: '7px'}}>
						<input placeholder="Имя" style={{border:'solid', borderRadius: '10px', fontSize: '14px', margin: '2% 0', width: '90%', height: '30px', padding: '5px'}}/>
						<input placeholder="Телефон" style={{border:'solid', borderRadius: '10px', fontSize: '14px', margin: '2% 0', width: '90%', height: '30px', padding: '5px'}}/>
						<input placeholder="Введтие e-mail" style={{border:'solid', borderRadius: '10px', fontSize: '14px', margin: '2% 0', width: '90%', height: '30px', padding: '5px'}}/>
						<ButtonBottom style={{margin:'20px 20px 0 20px'}}>Получить билеты на конференцию</ButtonBottom>
					</Third> */}

			</div>
		</div>
		);
	}
}

export default Results;

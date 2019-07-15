import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

function Results({data}) {

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
	
	// countResult(1)
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
		// columns
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
	  
	  return (
    <div className="App">
      <header className="App-header">
			<p>
				Результаты по итогам ответов на вопросы
			</p>
			<RadarChart
				captions={captions}
				data={dataResult}
				size={450}
			/>
			
      </header>
    </div>
  );
}

export default Results;

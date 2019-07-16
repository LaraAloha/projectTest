import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
	
	function exportPdf() {
		html2canvas(document.querySelector("#capture")).then(canvas => {
			document.body.appendChild(canvas);
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF();
			pdf.addImage(imgData, 'PNG', 0, 0);
			pdf.save("TestResults.pdf"); 
		});
	}
	
	const dataResult = [
		{
		  data: {
			sales: countResult(1),
			planning: countResult(2),
			// voronka: countResult(3),
			// offer: countResult(4),
			// hire: countResult(5),
			// teaching: countResult(6),
			// motivation: countResult(7),
			// leading: countResult(8),
			// scripts: countResult(9),
			// crm: countResult(10),
			// commercial: countResult(11),
			// clients: countResult(12),
		  },
		  meta: { color: 'blue' }
		},
	  ];
   
  const captions = {
		// columns
		sales: 'Модель продаж',
		planning: 'Планирование',
		// voronka: 'Воронка',
		// offer: 'Оффер',
		// hire: 'Найм',
		// teaching: 'Обучение и адаптация',
		// motivation: 'Мотивация',
		// leading: 'Управление',
		// scripts: 'Скрипты',
		// crm: 'CRM',
		// commercial: 'Коммерческое предложение',
		// clients: '«Подогрев» клиентов',
	  };
	  
	  return (
    <div id="capture" className="App">
      <header className="App-header">
			<p>
				Результаты по итогам ответов на вопросы
			</p>
			<RadarChart
				captions={captions}
				data={dataResult}
				size={450}
			/>
			
			 <button onClick={exportPdf}>
				Скачать PDF
			</button>
      </header>
    </div>
  );
}

export default Results;

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';

/**
 * @todo  вынести в отдельную компоненту ответы
 */

class QuestionsObj extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStage: 1, 
			data: {
				stages: {
					1: {
						questions: {
							1: {
								question: 'Все входящие звонки и заявки в компанию принимают профессионально и затем быстро и точно направляют кому следует?',
								answers: {
									1: 'test answer'
								}
							},
							2: {
								question: 'За прошедшие 12 месяцев прибыль снизилась',
								answers: {
									1: 'test answer'
								}
							},
							3: {
								question: 'У нас есть этап воронки продаж, на котором, как правило, скапливается большое количество сделок (есть явное узкое место)',
								answers: {
									1: 'test answer'
								}
							},
							4: {
								question: 'Продающий персонал может легко перечислить основные преимущества нашего продукта / услуги и ответить на вопросы клиентов',
								answers: {
									1: 'test answer'
								}
							},
							5: {
								question: 'Опыт говорит, что сейчас нанять подходящего сотрудника практически невозможно',
								answers: {
									1: 'test answer'
								}
							},
							6: {
								question: 'Продающий персонал слабо разбирается в особенностях нашего продукта / услуги',
								answers: {
									1: 'test answer'
								}
							},
							7: {
								question: 'Опыт говорит, что сейчас нанять подходящего сотрудника практически невозможно',
								answers: {
									1: 'test answer'
								}
							},
							8: {
								question: 'У нас есть план по обучению персонала компании, выполнение которого контролируется',
								answers: {
									1: 'test answer'
								}
							},
							9: {
								question: 'У нас есть сильный руководитель отдела продаж, который пользуется авторитетом у подчиненных, планы по продажам которого регулярно выполняются',
								answers: {
									1: 'test answer'
								}
							},
							10: {
								question: 'Периодически мне самому приходится общаться с клиентами, чтобы добиться оплаты',
								answers: {
									1: 'test answer'
								}
							},
							11: {
								question: 'Каждый наш продавец ведет собственные записи, у нас нет общей базы с информацией обо всех клиентах',
								answers: {
									1: 'test answer'
								}
							},
							12: {
								question: 'У нас нет каких-то стандартных материалов, помогающих в продажах. Каждый продавец сам решает, что и как ему использовать',
								answers: {
									1: 'test answer'
								}
							},
							13: {
								question: 'У нас есть авто-цепочка прогревающих писем, которая отрпавляется всем потенциальным клиентам',
								answers: {
									1: 'test answer'
								}
							},
						}
					},
		
					2: {
						questions: {
							1: {
								question: 'Постоянные клиенты очень редко уходят от нас к конкурентам',
								answers: {
									1: 'test answer'
								}
							},
							2: {
								question: 'Каждый год на протяжении последних трех лет доход и прибыль растут',
								answers: {
									1: 'test answer'
								}
							},
							3: {
								question: 'Повторную покупку с тем же средним чеком у нас делает меньше 50% купивших клиентов',
								answers: {
									1: 'test answer'
								}
							},
							4: {
								question: 'Основная продукция / услуга не имеет каких-то ощутимых преимуществ перед продуктами конкурентов',
								answers: {
									1: 'test answer'
								}
							},
							5: {
								question: 'Я лично нанимаю / согласовываю всех новых сотрудников',
								answers: {
									1: 'test answer'
								}
							},
							6: {
								question: 'Новый сотрудник адаптируется как минимум три месяца, прежде чем начинает давать результат',
								answers: {
									1: 'test answer'
								}
							},
							7: {
								question: 'Если с сотрудниками компании и проводится обучение, то только по моей личной инициативе',
								answers: {
									1: 'test answer'
								}
							},
							8: {
								question: 'Мы не ведем подсчет точного количества новых потенциальных клиентов, звонков, встреч, конверсии, среднего чека и LTV по сотрудникам',
								answers: {
									1: 'test answer'
								}
							},
							9: {
								question: 'У нас есть «гора» недожатых клиентов, в том числе отказников, которых никто не проверял на «отказ» (кладбище лидов)',
								answers: {
									1: 'test answer'
								}
							},
							10: {
								question: 'У нас есть продавцы, за которыми закреплено более 100 клиентов в работе на данный момент',
								answers: {
									1: 'test answer'
								}
							},
							11: {
								question: 'Есть печатные / электронные материалы или образцы, которые используются в процессе продажи и помогают клиенту понять ценность услуг или продуктов компании',
								answers: {
									1: 'test answer'
								}
							},
							12: {
								question: 'У нас настроена digital-воронка, которая преследует клиентов в интеренете ретаргетингом в соответствии с их движением по воронке продаж',
								answers: {
									1: 'test answer'
								}
							}
						}
					},

					3: {
						questions: {
							1: {
								question: 'Наш продающий персонал занимается исключительно продажами и не отвлекается на решение других вопросов',
								answers: {
									1: 'test answer'
								}
							},
							2: {
								question: 'Можно сказать, что всех новых клиентов привел в компанию я сам',
								answers: {
									1: 'test answer'
								}
							},
							3: {
								question: 'В нашей воронке продаж есть «процессные этапы», которые не имеют формулировку завершенного вида (такие как: думают; на согласовании; в процессе принятия решения; на расчете; прогрев)',
								answers: {
									1: 'test answer'
								}
							},
							4: {
								question: 'Если наши конкуренты предлагают свои услуги дешевле, мы, как правило, даем скидку, чтобы удержать клиента',
								answers: {
									1: 'test answer'
								}
							},
							5: {
								question: 'Мы легко можем найти первоклассного лояльно продавца, который будет готов работать за бонус, а не за оклад',
								answers: {
									1: 'test answer'
								}
							},
							6: {
								question: 'Мы никогда не обучаем наших сотрудников, а стараемся нанимать готовых специалистов',
								answers: {
									1: 'test answer'
								}
							},
							7: {
								question: 'Весь продающий персонал получает деньги строго исходя из показателей личной эффективности и вы довольны применяемой у вас системой мотивации',
								answers: {
									1: 'test answer'
								}
							},
							8: {
								question: 'Возникает ощущение, что никто кроме меня не проверяет и не требует соблюдения инструкций и правил',
								answers: {
									1: 'test answer'
								}
							},
							9: {
								question: 'Наши менеджеры по продажам делают менее 12 касаний клиента чтобы дожать сделку',
								answers: {
									1: 'test answer'
								}
							},
							10: {
								question: 'У нас настроена телефония, ведется запись всех звонков, они распределяются по менеджерам и считается аналитика активности продавцов',
								answers: {
									1: 'test answer'
								}
							},
							11: {
								question: 'У нас есть наглядные материалы, демонстрирующие особенности нашего продукта / услуги',
								answers: {
									1: 'test answer'
								}
							},
							12: {
								question: 'Наши продавцы отправляют потенциальным клиентам упакованные (фото / видео) истории успеха (кейсы) с отзывами',
								answers: {
									1: 'test answer'
								}
							}
						}
					},

					4: {
						questions: {
							1: {
								question: 'Есть четкое разделение в продажах: одни продают то, что приносит нам основной доход, другие продают специальные продукты / услуги для привлечения новых потенциальных клиентов',
								answers: {
									1: 'test answer'
								}
							},
							2: {
								question: 'Планы по предоставлению продукции / услуг выполняются и часто даже перевыполняются',
								answers: {
									1: 'test answer'
								}
							},
							3: {
								question: 'У нас есть определенный эффективный сценарий ведения клиента до первой сделки и после, и все продавцы четко придерживаются этого сценария',
								answers: {
									1: 'test answer'
								}
							},
							4: {
								question: 'У меня, как у владельца, есть четкое понимание и объективный ответ на вопрос: «Чем мы лучше конкурентов и нужно купить товар / услугу именно у нас?»',
								answers: {
									1: 'test answer'
								}
							},
							5: {
								question: 'Основной объем продаж обеспечивают клиенты, с которыми я лично работаю',
								answers: {
									1: 'test answer'
								}
							},
							6: {
								question: 'Благодаря наличию хороших инструкций и «книги продаж» каждый новый сотрудник может быстро изучить технологию работы в компании и начать давать результат',
								answers: {
									1: 'test answer'
								}
							},
							7: {
								question: 'Наш продающий персонал всегда имеет высокий боевой дух и никогда не приунывает',
								answers: {
									1: 'test answer'
								}
							},
							8: {
								question: 'Звонки, работу в CRM системе и инструкции регулярно контролируются сотрудником контроля качества, который работает на удаленке и НЕ подчиняется РОПу',
								answers: {
									1: 'test answer'
								}
							},
							9: {
								question: 'У нас низкая конверсия из лида в сделку',
								answers: {
									1: 'test answer'
								}
							},
							10: {
								question: 'В нашем отделе продаж и у руководства есть панель (телевизор на стене), на который в реальном времени выводятся ключевые показатели компании',
								answers: {
									1: 'test answer'
								}
							},
							11: {
								question: 'На наше коммерческое предложение нельзя посмотреть без грусти',
								answers: {
									1: 'test answer'
								}
							},
							12: {
								question: 'Мы уделяем постоянным клиентам не меньше внимания, чем для работы с новыми и потенциальными',
								answers: {
									1: 'test answer'
								}
							}
						}
					},


				}
			},
		resultsReady: false
		};		
	}

	answerQuestion(questionId, answer) {
		const newData = {...this.state.data};
		newData.stages[this.state.currentStage].questions[questionId].answered = true;
		newData.stages[this.state.currentStage].questions[questionId].answer = answer;
		this.setState({data: newData});
	}

	nextButtonAvaliable() {
		return Object.values(this.state.data.stages[this.state.currentStage].questions).every(question => question.answered);	
	}

	nextStage = () => {
		this.setState({currentStage: this.state.currentStage+1});
	}

	resultsPage = () => { 
		this.setState({resultsReady: true});
	}

	render() {
	
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Вопросы</th>
						<th>Да</th>
						<th>Нет</th>
						<th>Возможно</th>
					</tr>
				</thead>
			<tbody> 
				{
					Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (
						<tr key={questionId}>
							<td>{questionData.question}</td>
							<td><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1}  onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input></td>
							<td><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2} onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input></td>
							<td><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3} onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input></td>
						</tr>
					))
				}
			</tbody>
			</table>
			<button onClick={this.nextStage} disabled={!this.nextButtonAvaliable()}> 
			Следующая группа вопросов 
			</button>
				{this.state.resultsReady&&<Results />}
		</div>
	);
	}
}

export default QuestionsObj;

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';
import questions from './questions';
import logo from './logo.png';
import './questions.css';
import styled from 'styled-components';
import Modal from 'react-awesome-modal';

const ColouredBox = styled.div`
	min-width: 50px; 
	height: 80px;
	margin-right: 30px;
	@media (max-width: 600px) {
		margin-right: 10px;
		min-width: 30px; 
	}
`;

class QuestionsObj extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStage: 1, 
			currentQuestion: 1, 
			data: questions,
			visible: true,
			city: '',
			company: '',
			position: '',
			acceptance: false,
			showError: false
	};		
}

closeModal = () => {
	this.setState({
		visible: false
	});
}	

trySubmitModal = () => {
	if (this.state.city&&this.state.company&&this.state.acceptance&&this.state.position) {
		this.closeModal();
	} else {
		this.error();
	}
}

answerQuestion(questionId, answer) {
	const newData = {...this.state.data};
	newData.stages[this.state.currentStage].questions[questionId].answered = true;
	newData.stages[this.state.currentStage].questions[questionId].answer = answer;
	this.setState({data: newData});
}

popupCheckboxes = (event) => { 
	this.setState({
		position: event.target.value
	})
}

popupAccept = (event) => { 
	this.setState({
		acceptance: !this.state.acceptance
	})
}

popupTextfields = (event) => { 
	this.setState({
		[event.target.name]: event.target.value
	})
}

nextButtonAvaliable() {
	return Object.values(this.state.data.stages[this.state.currentStage].questions).every(question => question.answer);	
}

nextStage = () => {
	this.setState({currentStage: this.state.currentStage+1});
	window.scrollTo(0, 0);
}

resultsPage = () => { 
	this.setState({resultsReady: true});
	window.scrollTo(0, 0);
}

allQuestionCounter = () => {
	let Count = 0;
	for (let i = 1; i <= Object.keys(questions.stages).length; i++) { 
	Count+=Object.keys(questions.stages[i].questions).length;
	}
	return Count;
}

questionCounter = () => {
	let Count = 0;
	for (let i = 1; i <= this.state.currentStage; i++) { 
		Count+=Object.keys(questions.stages[i].questions).length;
	}
	return Count;
}

questionCurrNumber(questionId, questionCounter){
	return parseInt(questionId)+questionCounter-12;
}

error(){
	this.setState({
		showError: true
	})
}

render() {
return (
	<div className='wrapQ'>
		<img src={logo} width="125" height="49" style={{margin: '5px'}}>
		</img>		
		{!this.state.resultsReady&&
		<div>
			<p className='subTitle'>
				Пройдите тест для владельца и узнайте, насколько эффективна ваша система продаж
			</p>	
			
			<div className='flexAll2'>
				<div className='columns'>
					<div>
						{ Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (						
							<div className='flexAll3'> 
								<ColouredBox className={this.state.data.stages[this.state.currentStage].questions[questionId].answer ? 'class1': 'class2' }>
									<p className='boxText'>				
										{this.questionCurrNumber(questionId, this.questionCounter())}
									</p>
								</ColouredBox>
								<div className='flexAll'>
									<div>
									{questionData.question}	
									</div>
									<div className='flexRadio'>
										<div className='tabHead'>		
											<label className='inputBox'>
												<div className='smallFlex'>
													<p style={{margin: '0 5px'}}> Да</p>
													<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1} onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input>							
												</div>
											</label>
										</div>
										<div className='tabHead'>		
											<label className='inputBox'>
												<div className='smallFlex'>
													<p style={{margin: '0 5px'}}>Нет</p>
													<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2} onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input>							
												</div>
											</label>
										</div>
										<div className='tabHead'>		
											<label className='inputBox'>
												<div className='smallFlex'>
													<p style={{margin: '0 5px'}}>Возможно</p>
													<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3}  onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input>							
												</div>
											</label>
										</div>
									</div>
								</div>
							</div>
							)) }
					</div>
				</div>

			</div>
			<p style={{textAlign: 'center'}}>
				{this.questionCounter()} вопросов из {this.allQuestionCounter()}
			</p>
			</div>
		}

		{this.state.currentStage<=3&&	
			<label> 
				<button className='buttonBottom'  onClick={this.nextStage} disabled={!this.nextButtonAvaliable()}>
						Далее
				</button>		

			</label>
		}

		{!this.state.resultsReady&&this.state.currentStage==4&&
			
		<label> 
			<button className='buttonBottom' onClick={this.resultsPage} disabled={!this.nextButtonAvaliable()}>
						Узнать результат
			</button>
		</label>
		}

		{this.state.resultsReady&&<Results data={this.state.data} company={this.state.company}/>}

		<Modal visible={this.state.visible} width='80%' effect="fadeInUp" 
		onClickAway={() => this.closeModal()}
		>
			<div className='flexAll4'>
			<label>
					<div className='flexAll5'>
						<p>1. Из какого вы города:</p>
						<input className='inputStyle' onChange={this.popupTextfields} type="text" name="city" value={this.state.city}/>
					</div>
				</label>
				<label>						
					<div className='flexAll5'>
						<p>2. Как называется ваша компания:</p>
						<input className='inputStyle' onChange={this.popupTextfields} type="text" name="company" value={this.state.company}/>
					</div>
				</label>
					<p>3. Укажите вашу позицию в компании:</p>
				<label>
					<input className='inputMargin' type="radio" value="owner" name="name1" checked={this.state.position=='owner'} onChange={this.popupCheckboxes}/>
						Владелец
				</label>
				<label>
					<input className='inputMargin' type="radio" value="owner_dir" name="name1" checked={this.state.position=='owner_dir'} onChange={this.popupCheckboxes}/>
						Владелец-директор
				</label>
				<label>
					<input className='inputMargin' type="radio" value="dir"name="name1" checked={this.state.position=='dir'} onChange={this.popupCheckboxes}/>
						Директор
				</label>
				<label>
					<input className='inputMargin' type="radio" value="rop"name="name1" checked={this.state.position=='rop'} onChange={this.popupCheckboxes}/>
						РОП
				</label>
				<label >
					<input className='inputMargin' type="radio" value="empl" name="name1" checked={this.state.position=='empl'} onChange={this.popupCheckboxes}/>
						Сотрудник
				</label>
				<label>
					<input 
					style={{marginTop: '20px'}}
					type="checkbox"
					checked={this.state.acceptance}
					onChange={this.popupAccept}
					/>
					<span className='textWarn'>Я подтверждаю, что путем заполнения теста предоставляю в соответствии с Законом «О защите персональных данных» право бессрочно получать, обрабатывать, регистрировать, накапливать, хранить, изменять, обновлять, использовать и распространять (передавать) информацию, которая в соответствии с требованиями законодательства составляет персональные данные; вносить эту информацию в Базу персональных данных.</span>
				</label>
			<div className='flexAll2'>
				{this.state.showError&&<div className='warn'>Пожалуйста, заполните все обязательные поля</div>}
				<button className='buttonBottom' style={{width: '230px'}} onClick={() => this.trySubmitModal()}>Перейти к тесту</button>
			</div>
			</div>
		</Modal>
	</div>

	);
}
}

export default QuestionsObj;

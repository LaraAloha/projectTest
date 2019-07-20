import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';
import questions from './questions';
import logo from './logo.png';
import './questions.css';
import styled from 'styled-components';
import { GoChevronRight } from "react-icons/go";
import Modal from 'react-awesome-modal';

const SubTitle = styled.p`
	font-size: 24px;
	margin: 5px 0;
	text-align: center;
`;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 5px 15px;
	font-family: 'Roboto',Arial,sans-serif;	
`;

const Columns = styled.div`
	-webkit-column-count: 2;  
	-moz-column-count: 2;  
	column-count: 2;  
	padding: 20px 0;
	column-gap: 6em;
	break-after: avoid;
	width: 75%;
    column-rule: 1px solid #ccc;
    font-size: 18px;
	line-height: 1.55;

	@media (max-width: 1100px) {
		column-rule: none;
	}

		@media (max-width: 850px) {
			column-count: 1;
			width: 85%;
		}
`;

const ButtonResult = styled.button`
	margin: 5px;
	max-width: 10%;
	border-style: ridge;
`;

const TabHeadQuestion = styled.div`
`;

const TabHead = styled.div`
	display: flex;
	margin: 5px;
`;

const ButtonBottom = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 15px;
	cursor: pointer;
	margin-top: 10px;
	border-radius: 10px;
	`;

const FlexRadio = styled.div`
	display: flex;
	padding: 10px 0 40px 0;
`;

const FlexAll = styled.div`
	display: flex;
	flex-direction: column;
`;

const FlexAll2 = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FlexAll3 = styled.div`
	display: flex;
	flex-direction: row;
	break-inside: avoid-column;
	padding-right: 10px;
`;

const FlexAll4 = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 45px;
		@media (max-width: 850px) {
			font-size: 16px;
			padding: 30px 35px;
		}		
			@media (max-width: 767px) {
				font-size: 12px;
				padding: 20px 25px;
			}
`;

const FlexAll5 = styled.div`
	display: flex;
	flex-direction: column;
`;

const SmallFlex = styled.div`
	display: flex;
	align-items: center;
	height: 10px;
	cursor: pointer;
`;

const ColouredBox = styled.div`
	min-width: 50px; 
	height: 80px;
	margin-right: 30px;
`;

const ColouredBox2 = styled.div`
	min-width: 30px; 
	height: 80px;
	margin-right: 30px;
`;

const BoxText = styled.p`
	text-align: center;
`;

const Warn = styled.div`
	height: 30px;
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
			acceptance: false
	};		
}

closeModal = () => {
	this.setState({
		visible: false
	});
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

testButton() {
	return this.state.city&&this.state.company&&this.state.acceptance&&this.state.position;
}

nextButtonAvaliable() {
	return Object.values(this.state.data.stages[this.state.currentStage].questions).every(question => question.answer);	
}

nextStage = () => {
	this.setState({currentStage: this.state.currentStage+1});
}

resultsPage = () => { 
	this.setState({resultsReady: true});
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

wrongChecked(){
	if (this.state.city&&this.state.company&&this.state.acceptance&&this.state.position){
		return 
	}
}

render() {
return (
	<Wrap>
		<img src={logo} width="125" height="49" style={{margin: '5px'}}>
		</img>		
		{!this.state.resultsReady&&
		<div>
			<SubTitle>
				Пройдите тест для владельца и узнайте, насколько эффективна ваша система продаж
			</SubTitle>	
			
			<FlexAll2>
				<Columns>
					<div>
						{ Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (						
							<FlexAll3> 
								<ColouredBox className={this.state.data.stages[this.state.currentStage].questions[questionId].answer ? 'class1': 'class2' }>
									<BoxText>				
										{this.questionCurrNumber(questionId, this.questionCounter())}
									</BoxText>
								</ColouredBox>
								<FlexAll>
									<TabHeadQuestion>
									{questionData.question}	
									</TabHeadQuestion>
									<FlexRadio>
										<TabHead>		
											<label style={{display: 'block', width: '100%', height: '20%'}}>
												<SmallFlex>
													<p style={{margin: '0 5px'}}> Да</p>
													<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1} onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input>							
												</SmallFlex>
											</label>
										</TabHead>
										<TabHead>
											<label style={{display: 'block', width: '100%', height: '100%'}}>
												<SmallFlex>
													<p style={{margin: '0 5px'}}>Нет</p>
													<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2} onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input>							
												</SmallFlex>
											</label>
										</TabHead>
										<TabHead>
											<label style={{display: 'block', width: '100%', height: '100%'}}>
												<SmallFlex>
													<p style={{margin: '0 5px'}}>Возможно</p>
													<input style={{cursor: 'pointer'}}  checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3}  onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input>							
												</SmallFlex>
											</label>
										</TabHead>
									</FlexRadio>
								</FlexAll>
							</FlexAll3>
							)) }
					</div>
				</Columns>
			</FlexAll2>
			<p style={{textAlign: 'center'}}>
				{this.questionCounter()} вопросов из {this.allQuestionCounter()}
			</p>
			</div>
		}

		{this.state.currentStage<=3&&	
			<label> 
				<ButtonBottom onClick={this.nextStage}>
				<GoChevronRight style={{margin: '5px', color: 'black'}}/>
					<button disabled={!this.nextButtonAvaliable()} style={{borderStyle:'none', backgroundColor: 'none', margin: '10px'  }}>
						Далее
					</button>	
					<GoChevronRight style={{margin: '5px'}}/>
				</ButtonBottom>
			</label>
		}

		{!this.state.resultsReady&&this.state.currentStage==4&&
			
		<label> 
			<ButtonBottom onClick={this.resultsPage}>
				<GoChevronRight />
					<button disabled={!this.nextButtonAvaliable()} style={{borderStyle: 'none', backgroundColor: 'none', margin: '10px'}}>
						Узнать результат
					</button>	
				<GoChevronRight style={{margin: '5px'}}/>
			</ButtonBottom>
		</label>
		}

		{this.state.resultsReady&&<Results data={this.state.data} company={this.state.company}/>}

		<Modal visible={this.state.visible} width='80%' effect="fadeInUp" onClickAway={() => 
			
			this.closeModal()}>
			<FlexAll4>
			<label>
				<FlexAll5>
				<p>Из какого вы города:</p>
					<input style={{margin: '2% 0', minWidth: '30%', height: '30px'}} onChange={this.popupTextfields} type="text" name="city" value={this.state.city}/>
				</FlexAll5>
				</label>
				<label>						
				<FlexAll5>
					<p>Как называется ваша компания:</p>
					<input style={{margin: '2% 0', minWidth: '30%', height: '30px'}} onChange={this.popupTextfields} type="text" name="company" value={this.state.company}/>
					</FlexAll5>
					</label>
				<p>Укажите вашу позицию в компании:</p>
					<label>
						<input style={{margin: '2%'}} type="radio" value="owner" name="name1" checked={this.state.position=='owner'} onChange={this.popupCheckboxes}/>
						Владелец
					</label>
					<label>
						<input style={{margin: '2%'}} type="radio" value="owner_dir" name="name1" checked={this.state.position=='owner_dir'} onChange={this.popupCheckboxes}/>
						Владелец-директор
					</label>
					<label>
						<input style={{margin: '2%'}} type="radio" value="dir"name="name1" checked={this.state.position=='dir'} onChange={this.popupCheckboxes}/>
						Директор
					</label>
					<label>
						<input style={{margin: '2%'}} type="radio" value="rop"name="name1" checked={this.state.position=='rop'} onChange={this.popupCheckboxes}/>
						РОП
					</label>
					<label >
						<input style={{margin: '2%'}} type="radio" value="empl" name="name1" checked={this.state.position=='empl'} onChange={this.popupCheckboxes}/>
						Сотрудник
					</label>
					<label>
						<input 
						style={{margin: '25px 15px 0'}}
						type="checkbox"
						checked={this.state.acceptance}
						onChange={this.popupAccept}
						/>
						<span>Я подтверждаю, что путем заполнения теста предоставляю в соответствии с Законом «О защите персональных данных» право бессрочно получать, обрабатывать, регистрировать, накапливать, хранить, изменять, обновлять, использовать и распространять (передавать) информацию, которая в соответствии с требованиями законодательства составляет персональные данные; вносить эту информацию в Базу персональных данных.</span>
					</label>
				<Warn>Пожалуйста, заполните все обязательные поля</Warn>
				<button disabled={!this.testButton()} style={{borderRadius: '10px', height: '40px', marginTop: '25px'}} onClick={() => this.closeModal()}>Перейти к тесту</button>
			</FlexAll4>
		</Modal>
	</Wrap>

	);
}
}

export default QuestionsObj;

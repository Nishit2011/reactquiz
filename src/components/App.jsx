import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
	constructor(props){
	super(props);
	this.state={
	questions:[
	{
	id:1,
	text:'What is your name?',
	choices:[
	{
	id:'a',
	text:'Nishit'
	},
	{
		id:'b',
		text:'Pix'
	},
	{
		id:'c',
		text:'Six'
	}
	],
	correct:'a'
	},
	{
	id:2,
		text:'What is your city name?',
		choices:[
		{
		id:'a',
		text:'Delhi'
		},
		{
			id:'b',
			text:'Patna'
		},
		{
			id:'c',
			text:'Ranchi'
		}
		],
		correct:'c'
	},
	{
		id:3,
			text:'Who is your favorite cricketer?',
			choices:[
			{
			id:'a',
			text:'Sachin'
			},
			{
				id:'b',
				text:'Dhoni'
			},
			{
				id:'c',
				text:'Virat'
			}
			],
			correct:'a'
	}
	],
	score:0,
	current:1
	}
	}
	
	setCurrent(current){
	this.setState({current});
	}
	setScore(score){
	this.setState({score});
	}
	
	render(){
	if(this.state.current > this.state.questions.length){
	var scorebox = '';
	var results = <Results {...this.state} />
	}else{
	var scorebox = <Scorebox {...this.state} />
	var results = '';
	}
	
	  return(
	   <div>
	   {scorebox}
	   <QuestionList {...this.state} setCurrent ={this.setCurrent.bind(this)} setScore ={this.setScore.bind(this)}/>
	   {results}
	   </div>
	  )
	
	}
	
	}
	
	export default App
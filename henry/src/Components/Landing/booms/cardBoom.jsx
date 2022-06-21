import React,{useState} from 'react';
import Booms from './booms';
import Testimony from './testimony';
import { Slider,CardDiv } from '../LandingStyles/landing';
import {GrNext, GrPrevious} from 'react-icons/gr';
import Starting from './starting';


export default function Carousel(){
	const [current,setCurrent]=useState(0);
	const arrComp=[<Starting/> ,<Booms/>,<Testimony/>];
	const length=arrComp.length;

	const nextComponent=()=>{
		setCurrent(current===length -1 ? 0: current+1);
	}

	const prevComponent=()=>{
		setCurrent(current === 0 ? length -1 : current -1);
	}

	if(!Array.isArray(arrComp) || arrComp.length <=0){
		return null
	}

 return(
	<Slider >
		<GrPrevious  className='Larrow' onClick={prevComponent}/>
		<GrNext className='Rarrow' onClick={nextComponent}/>
		
		
		{
			arrComp.map((el , index)=> {
				return(
					<CardDiv>
					{ index === current &&(
						<div>{el}</div>
					)
					}
					</CardDiv>
					)
			}
			)

		}
		
	</Slider>
 )
}
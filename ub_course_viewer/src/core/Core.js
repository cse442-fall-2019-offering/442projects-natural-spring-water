import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Rectangle from 'react-rectangle'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../landingPage/Search';
import '../App.css';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

let myGraph = {nodes:[{id:"n1", label:"CSE250"}, {id:"n2", label:"CSE191"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]};

function Core(){
    return (
		<div>
			<Search> </Search>
			
			<canvas id = "graph" width="200" height="100" style={{border: "1px solid #000000"}}> <span> Hello </span> </canvas>
			<canvas id = "graph" width="200" height="0" style={{border: "1px solid #000000", position: "relative", bottom: "40pt"}}> </canvas>
			<canvas id = "graph" width="200" height="100" style={{border: "1px solid #000000"}}> </canvas>
			<Sigma graph={myGraph} settings={{drawEdges: true, clone: false}}>
				<RelativeSize initialSize={15}/>
				<RandomizeNodePositions/>
			</Sigma>
		</div>
    );
}

export default Core;
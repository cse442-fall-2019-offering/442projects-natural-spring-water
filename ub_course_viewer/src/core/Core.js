import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Tree from 'react-tree-graph';
import Graph from 'react-graph-vis';
import '../../node_modules/vis-network/styles/vis-network.css';
import Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import TopicViewer from './TopicViewer';


const TOPIC_SHIFT = 1000;

class Core extends Component{
  state = {
    rootCourse:{},
    viewGraph:{},
	rootIndex: 0,
	edgeSet:[],
	nodeSet:[],
	selectedTopics:[]
  }

	findNodes = (courseList,rootCourse) => {
		let nodeList = [];
		for ( let index = 0; index < courseList.length; index++){
			let newNode = {id:index+1, label: courseList[index].code, title: courseList[index].title};
			nodeList.push(newNode);
		}
		for ( let index = 0; index < rootCourse.associated_topics.length; index++){
			console.log(this.props.topicList[index]);
			var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
			let newNode = {id:TOPIC_SHIFT+rootCourse.associated_topics[index], label:this.props.topicList[rootCourse.associated_topics[index]].topic_desc, title: rootCourse.title, color:randomColor};
			nodeList.push(newNode);
		}
		return nodeList;
	}

	findRootIndex = (rootCourse, courseList) => {
		for ( let index = 0; index < courseList.length; index++){
			if(rootCourse.code==courseList[index].code) return index+1;
		}
		return 0;
	}

	checkCourses = (base, other) => {
		for(let index = 0; index < base.associated_topics.length; index++){
			if(other.associated_topics.includes(base.associated_topics[index])) return true;
		}
		return false;
	}

	findCode = (course) => {
		return parseInt(course.code.split(" ")[1]);
	}

	findEdges = (rootCourse, courseList, tempSet) => {
		let edgeList = [];
		let nodeList = [];
		let nodeSetTemp = tempSet.nodeSet;
		let edgeSetTemp = tempSet.edgeSet;
		if(rootCourse.code == undefined) return [];
//		let fromIndex = this.findRootIndex(rootCourse,courseList);
		let fromIndex = this.findCode(rootCourse);
		for(let topicIndex = 0; topicIndex < rootCourse.associated_topics.length; topicIndex++){
			for (let index = 0; index < courseList.length; index++){
				if(courseList[index].associated_topics.includes(rootCourse.associated_topics[topicIndex])&& !edgeSetTemp.includes(rootCourse.associated_topics[topicIndex])){
					//edgeSetTemp.push(rootCourse.associated_topics[topicIndex]);
					let courseCode = this.findCode(courseList[index]);
					let newEdge = {from:courseCode, to:TOPIC_SHIFT+rootCourse.associated_topics[topicIndex]};
					if(!nodeSetTemp.includes(courseCode)){
						nodeSetTemp.push(courseCode);
						let newNode = {id:courseCode, label: courseList[index].code, title: courseList[index].title};
						nodeList.push(newNode);
					}
					edgeList.push(newEdge);
				}
			}
		}
		console.log(rootCourse.associated_topics);
		for ( let index = 0; index < rootCourse.associated_topics.length; index++){
			let topicNodeID = TOPIC_SHIFT + rootCourse.associated_topics[index];
			if(!nodeSetTemp.includes(topicNodeID)) {
				console.log(rootCourse.associated_topics[index]);
        	                console.log(this.props.topicList[rootCourse.associated_topics[index]-1].topic_desc);
                	        var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	                        let newNode = {id:TOPIC_SHIFT+rootCourse.associated_topics[index], label:this.props.topicList[rootCourse.associated_topics[index]-1].topic_desc, title: rootCourse.title, color:randomColor};
	                        nodeList.push(newNode);
				nodeSetTemp.push(topicNodeID);
				edgeSetTemp.push(topicNodeID-TOPIC_SHIFT);
			}
                }
//		this.setState({edgeSet:edgeSetTemp,nodeSet:nodeSetTemp});
		return {nodes:nodeList,edges:edgeList,edgeSet:edgeSetTemp,nodeSet:nodeSetTemp};
	}

	createGraph = (rootCourses, courseList) => {
		let tempSet = {edgeSet:[],nodeSet:[]};
		try{
			let graph = { nodes:[], edges:[] };
			for ( let index = 0; index < rootCourses.length; ++index){
				let tempGraph = this.findEdges(rootCourses[index],courseList,tempSet);
				graph = {nodes:graph.nodes.concat(tempGraph.nodes), edges:graph.edges.concat(tempGraph.edges)};
				tempSet = {edgeSet:tempGraph.edgeSet, nodeSet:tempGraph.nodeSet};
			}
//			let graph = {nodes:tempSet.nodes,edges:tempSet.edges};
			return graph;
		}
		catch (e) {
			console.log(e);
		}
		return {nodes:[], edges:[]};
	}

	
	selectNode = (event) => {
			var { nodes, edges } = event;
                        console.log("Selected nodes:");
                        console.log(nodes);
                        console.log("Selected edges:");
                        console.log(edges);
                        let topics = [];
                        for(let index=0;index<nodes.length;++index){
                        //Add functionality to load topic viewer to graph
                                if(nodes[index]>TOPIC_SHIFT){
                                        topics.push(this.props.topicList[nodes[index]-TOPIC_SHIFT-1]);
                                }
                        }
                        this.setState({selectedTopics:topics});

}

	events = {
		select: this.selectNode
	};

  constructor(props){
    super(props);
    this.setState({rootCourse: this.props.selectedCourse});
  }

  render = () =>{
    return (
      <div className="TreeDiv">

		<Navbar expand="lg" variant="dark" bg="primary">
			<Nav className="mr-auto">
				<Nav.Link onClick={this.props.onToggle}>Home</Nav.Link>
			</Nav>
		</Navbar>

		<Graph
		  graph={this.createGraph(this.props.cart,this.props.courseList)}
		  options={{layout: {hierarchical: false}, edges: {color: "#000000"}, height: "750px"}}
		  events={this.events}
		  getNetwork={network => {
			//  if you want access to vis.js network api you can set the state in a parent component using this property
		  }}
		/>
		{this.state.selectedTopics.map(topic => {
			return <TopicViewer topic={topic}/>
		})}
      </div>
      );
  }
}

export default Core;

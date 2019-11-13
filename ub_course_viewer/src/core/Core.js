import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Tree from 'react-tree-graph';
import Graph from 'react-graph-vis';
import '../../node_modules/vis-network/styles/vis-network.css';

class Core extends Component{
  state = {
    rootCourse:{},
    viewGraph:{},
	rootIndex: 0
  }

  createNode = (course) => {
    let newNode = {
      name: course.code,
      children: this.findChildren(course)
    }
	console.log(course);
    return newNode;
  }

  findChildren = (parentCourse) => {
    let my_children = [];
    this.props.courseList.map((course) => {
      if(course.associated_courses && course.associated_courses.indexOf(parentCourse.code) !== -1){
        my_children.push(this.createNode(course));
      }
    });
    return my_children;
  }

	findNodes = (courseList) => {
		let nodeList = [];
		for ( let index = 0; index < courseList.length; index++){
			let newNode = {id:index+1, label: courseList[index].code, title: courseList[index].code};
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

	findEdges = (rootCourse, courseList) => {
		let edgeList = [];
		if(rootCourse.code == undefined) return [];
		let fromIndex = this.findRootIndex(rootCourse,courseList);
		for (let index = 0; index < courseList.length; index++){
			if(index+1 != fromIndex && this.checkCourses(rootCourse,courseList[index])){
				let newEdge = {from:fromIndex, to:index+1};
				edgeList.push(newEdge);
			}
		}
		return edgeList;
	}

	createGraph = (rootCourse, courseList) => {
		let graph = { nodes: this.findNodes(courseList), edges: this.findEdges(rootCourse,courseList) };
		return graph;
	}

  constructor(props){
    super(props);
    this.setState({rootCourse: this.props.selectedCourse});
  }
  render = () =>{
    return (
      <div className="TreeDiv">
		<Graph
		  graph={this.createGraph(this.props.selectedCourse,this.props.courseList)}
		  options={{layout: {hierarchical: false}, edges: {color: "#000000"}, height: "500px"}}
		  events={{select: function(event) {var { nodes, edges } = event}}}
		  getNetwork={network => {
			//  if you want access to vis.js network api you can set the state in a parent component using this property
		  }}
		/>
      </div>
      );
  }
}

export default Core;

import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Tree from 'react-tree-graph';
import Graph from 'react-graph-vis';
import '../../node_modules/vis-network/styles/vis-network.css';

class Core extends Component{
  state = {
    rootCourse:{},
    viewGraph:{}
  }

  createNode = (course) => {
    let newNode = {
      name: course.code,
      children: this.findChildren(course)
    }
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
  constructor(props){
    super(props);
    this.state.rootCourse = this.props.selectedCourse;
  }
  render = () =>{
    return (
      <div className="TreeDiv">
        <Tree
          data={this.createNode(this.props.selectedCourse)}
          nodeRadius={15}
          margins={{ top: 20, bottom: 10, left: 50, right: 200 }}
          height={700}
          width={1000}
          textProps={{x:-25, y:25}}/>
		
		<Graph
		  graph={{nodes: [{id: 1, label: "Test 1", title: "Test1"}, 
						  {id: 2, label: "Test 2", title: "Test2"},
						  ], 						  
				  edges: [{from: 1, to: 2}]}}
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
import React,{Component} from 'react';

class ParentComponent extends Component {
  state={
    oState: 1
  }
  constructor(props) {
    super(props);
    console.log("ParentComponent Constructor")
  }
  static getDerivedStateFromProps(props, state){
    console.log("ParentComponent getDerivedStateFromProps", props, state)
    return null;
  }
  componentDidMount(){
    console.log("ParentComponent cmponentDidMount")
    this.setState({oState:5})
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("ParentComponent shouldComponentUpdate",nextProps,nextState,this.state,this.props)
       return false;
    
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ParentComponent getSnapshotBeforeUpdate",prevState,prevProps)
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ParentComponent componentDidUpdate",prevProps,prevState,
      
    )
  }

  render(){
    console.log("ParentComponent Render")
    return(
        <div>
          <h1>This Is Parent Component: {this.state.oState}</h1>
        </div>
    );
  }
}
export default ParentComponent;
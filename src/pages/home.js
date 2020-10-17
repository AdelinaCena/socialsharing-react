import React, { Component } from 'react';
import { Post } from '../components/Post';
import { getAllPosts } from '../store/actions/PostAction';
import Grid from '@material-ui/core/Grid';

// redux
import { connect } from 'react-redux'

class home extends Component {
	constructor(props) {
	    super(props);
	}

	componentDidMount = async() => {
		await this.props.getAllPosts();
		console.log(this.props);
	}

    render() {
    	const { loadPosts } = this.props;
	    return (
	    	<Grid container className="styles.form">
			    <Grid item sm={2} xs={12}>
				</Grid>
				<Grid item sm={8} xs={12}>
				    <div> 
				    	<Post posts={loadPosts}/>
				    </div>
				</Grid>
				<Grid item sm={2} xs={12}>
				</Grid>
			</Grid>
	    );
	}

}


const mapDispatchToProps = (dispatch) => {
	return {
		getAllPosts:() => dispatch(getAllPosts())
	}
}

const mapStatesToProps = (state) => {
	return { 
		    loadPosts:state.post.loadPosts
		};
}

export default connect(mapStatesToProps, mapDispatchToProps)(home)
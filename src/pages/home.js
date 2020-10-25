import React, { Component } from 'react';
import { Post } from '../components/Post';
import { getAllPosts } from '../store/actions/PostAction';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// redux
import { connect } from 'react-redux'

class home extends Component {
	constructor(props) {
	    super(props);
	}

	componentDidMount = async() => {
		await this.props.getAllPosts();
	}

    render() {
    	const { loadPosts } = this.props;
	    return (
	    	<Grid container className="styles.form">
			    <Grid item sm={2} xs={12}/>
				<Grid item sm={8} xs={12} className="posts-view">
					
					<Button style={{marginTop:'10px'}} variant="contained" color="primary" href="/posts/create">
						Add post
					</Button>
				    <div style={{marginTop:'20px'}}> 
				    	<Post posts={loadPosts} data={this.props}/>
				    </div>
				</Grid>
				<Grid item sm={2} xs={12} />
			</Grid>
	    );
	}

}


const mapDispatchToProps = (dispatch) => {
	return {
		getAllPosts:() => dispatch(getAllPosts()),
	}
}

const mapStatesToProps = (state) => {
	return { 
		loadPosts: state.post.loadPosts
	};
}

export default connect(mapStatesToProps, mapDispatchToProps)(home)
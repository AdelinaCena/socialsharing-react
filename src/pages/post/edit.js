import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import ReactDOMServer from 'react-dom/server';
import { getPost, updatePost, deleteFile} from '../../store/actions/PostAction';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import '../../css/post.css'
import  { File } from  '../../components/File'
import Grid from '@material-ui/core/Grid';

class edit extends Component {
    
	constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }

    componentDidMount () {
        this.props.getPost(this.props.match.params.post);
	}
    
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.updatePost(this.state, this.props.match.params.post);
        this.props.history.push('/');
    }
    
	handleChange = (e) => {
		this.setState({
			[e.target.name] :e.target.value,
            new_file: "why react "
		});

        console.log(this.state)
	}

    // called every time a file's `status` changes
    handleChangeStatus = ({ meta, file }, status) => {
        if (status == 'done') {
       } 
    }  


    render() {
        const { post } = this.props.singlePost 
        const { media } = this.props.singlePost
        
	    return (
            <Grid container className="styles.form">
                <Grid item sm={8} xs={12} className="posts-view">
                    <div className="edit-post-form">
                        <h3>Edit Post</h3>
                        <form noValidate autoComplete="off">
                            <TextField 
                                id="email" name="title" type="text" 
                                label="Title"
                                value={this.state ? this.state.title : post.title} 
                                fullWidth 
                                onChange={this.handleChange}/>
                            <TextareaAutosize 
                                    aria-label="maximum width" 
                                    name="text" 
                                    label="Text"
                                    style={{width: '100%', marginTop:'10px'}}
                                    rowsMin="10"
                                    value={this.state ? this.state.text : post.text}
                                    onChange={this.handleChange}
                                    placeholder="Text here" />
                        
                            <Button  className= "post-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                                Update post
                            </Button>
                        </form>
                    </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div className="grave"> 
                        <h3>Post Media</h3>
                            {media? media.map(row => (
                                <File key={row.id} file={row}  data={this.props}/>
                            )) : null }
                    </div> 
                     
                </Grid>
            </Grid>
           
        );
	}

}

const mapStatesToProps = (state) => {
	return {
        singlePost : state.post
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
        getPost:(postId) => dispatch(getPost(postId)),
        updatePost:(post, postId) => dispatch(updatePost(post, postId)),
        deleteFile:(fileId) => dispatch(deleteFile(fileId))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(edit)
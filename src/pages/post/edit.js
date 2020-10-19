import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import ReactDOMServer from 'react-dom/server';
import { getPost, updatePost } from '../../store/actions/PostAction';



class edit extends Component {

    
	constructor(props) {
        super(props);

        this.dropzoneRef = React.createRef();

        this.dropzonConfiguration = {
            djsConfig : {
                autoProcessQueue: true,
                dictDefaultMessage: "Image (Upload here)",
                params: {
                    id: 1,
                },
                previewTemplate: ReactDOMServer.renderToStaticMarkup(
                    <div className="dz-preview dz-file-preview">
                    <div className="dz-details">
                        <img data-dz-thumbnail="true" className="img-thumbnail" />
                        <div className="dz-filename"><span data-dz-name="true"></span></div>
                    </div>
                    <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
                    </div>
                )
            },
            componentConfig: {
                postUrl: '',
            }
        }
    }

    componentDidMount () {
        this.props.getPost(this.props.match.params.post);
	}
    
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.updatePost(this.state, this.props.match.params.post);
        this.props.history.push('/');
        // this.resetForm();
    }
    
    resetForm = (e) => {
        this.setState({
            title: '',
            text : '',
            media: []
        })
    }

	handleChange = (e) => {
		this.setState({
			[e.target.name] :e.target.value
		});
	}

    render() {

        const { post } = this.props.singlePost 

	    return (
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

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Update post
                </Button>
            </form>
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
        updatePost:(post, postId) => dispatch(updatePost(post, postId))
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(edit)
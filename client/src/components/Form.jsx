import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams, useHistory} from 'react-router';


function Form(){
    const [post_title, setPost_title] = useState('');
    const [post_content, setPost_content] = useState('');
    const [post_date, setPost_date] = useState('');
    const [post_type, setPost_type] = useState('');
    const [post_image, setPost_image] = useState('');

    //Edit post
    const {id} = useParams();
    const history = useHistory(); 
    useEffect(()=>{
        if (id && id.length){
            Axios.get(`/api/posts/${id}`).then((response)=>{
                    console.log(response);
                    if (response.data){
                        const value= response.data; //devuelve un objeto
                        setPost_title(value.post_title);
                        setPost_content(value.post_content);
                        setPost_date(value.post_date);
                        setPost_type(value.post_type);
                        setPost_image(value.post_image);
                    }
            }
            ).catch(console.log)
        }
    },[id])

    //Submit 
    const submitForm = (e)=>{
        e.preventDefault(); //no refresh
        if (id){
            Axios.put(`/api/posts/${id}`,{
                post_title: post_title,
                post_content: post_content,
                post_date: post_date,
                post_type: post_type,
                post_image: post_image
                }).then(()=>{
                    alert('Post modified');
                    //redirect
                    history.push('/'); //le dice a donde volver
                }).catch(e=>console.log(e))
        }else{
            Axios.post('/api/posts/import/',{
                post_title: post_title,
                post_content: post_content,
                post_date: post_date,
                post_type: post_type,
                post_image: post_image
                }).then(()=>{
                    alert('New post is online!');
                    //clean form
                    setPost_title('');
                    setPost_content('');
                    setPost_date('');
                    setPost_type('');
                    setPost_image('');
                }).catch(e=>console.log(e))}
    }

    return (
        <body>
        <div className="wrapper">

            {/* Header*/}
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo">
                                <h2>My posts</h2>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu">
                                <ul>
                                    <li><Link to="/">Post</Link></li>
                                    <li><Link to="/form">New post</Link></li>
                                    <li><Link to="/posts">Find post</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Page Content */}
            <div className="content">

                {/* Form */}
                <div className="container">
                <div className="row justify-content-center" id="form-post">
                <div className="col-8">
                <form onSubmit={submitForm}>
                        <div className="form-group">
                                <label htmlFor="post_title">Title :</label>
                                <input placeholder="Post title" type="text" name="post_title" id="post_title" className="form-control" required value={post_title}  onChange={(e)=>{setPost_title(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="post_content">Content :</label>
                                <textarea placeholder="Write your post here" type="text" rows="10" name="post_content" id="post_content" required value={post_content} className="form-control"  onChange={(e)=>{setPost_content(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                                    <label htmlFor="post_date">Date :</label>
                                    <input type="date" name="post_date" id="post_date" required className="form-control" value={post_date} onChange={(e)=>{setPost_date(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                                    <label htmlFor="post_type">Category :</label>
                                    <input value={post_type} onChange={(e)=>{setPost_type(e.target.value) }} type="text" name="post_type" id="post_type" className="form-control"/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="post_image">Image URL :</label>
                                <input value={post_image} onChange={(e)=>{setPost_image(e.target.value) }} type="url" name="post_image" id="post_image" className="form-control"/>
                        </div>
                        <div className="form-group-button">
                            <button type="submit" className="btn btn-primary btn-block" id="submit-button" value="Submit">Submit</button>
                        </div >   
                </form>
                </div>
                </div>
            </div>
            </div>
        </div>
            <script src="js/jquery-3.1.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/active.js"></script>
        </body>
        )}

export default Form
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {useState, useEffect} from 'react'; //son hooks
import {useParams, useHistory} from 'react-router'; //son hooks


function Post(){

    const [post, setPost] = useState(null); //a blog tratalo como algo estatico pero permitime cambiarlo cuando pasa algo
    
    const {id} = useParams(); //en esta variable estatica id carga el definido en la ruta

    useEffect(()=>{ //se tiene que ejecutar cada vez que cambia el id, necesita que hacer (cambiar blog) y _cuando_ (cuando cambia el id) 
        fetch(`/api/posts/${id}`)
         .then(res => res.json())
         .then(data => {
           console.log(data);
           setPost(data)
         })
         .catch(console.log)
    }, [id]);

    return (
        <body>
        <div className="wrapper">

         {/* Header */}
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
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/form">New post</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

             {/* Page Content */}
             <div className="content">
                 {/* Show post */}
                 <section class="single-blog-area">
                    <div class="container">
                    <div class="row">  
                    <div className="col-9">
                            {!post?null:(
                                <div className="col-md-12">
                                <div className="blog-area">
                                <div className="blog-area-part">
                                    <h3>Date: <span>{post.post_date.split("T")[0].split('-').reverse().join('/')}</span>  //  ID: <span>{post.id}</span> // Category: <span>{post.post_type}</span></h3>
                                    <h2>{post.post_title}</h2>
                                    <img src={post.post_image} />
                                    <p>{post.post_content}</p>
                                    <div className = "button-container">
                                        <Link to='/'><button className="btn btn-primary btn-block" style={{justifyContent: "center"}} id="submit-button">Home</button></Link>
                                    </div>
                                </div>
                                </div>
                                </div>
                             )}
                     </div>
                     </div>
                     </div>
                     </section>
             </div>                 
             </div>
            <script src="js/jquery-3.1.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/active.js"></script>
        </body>)}

export default Post

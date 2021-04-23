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
                 {/* Show post */}
                     <div className="row justify-content-center" id="table_posts">     
                     <div className="col-9">
                        <table className="table table-borderless table table-hover">
                            <tbody>
                            {!post?null:(
                                <tr>  
                                                <td>
                                                    {post.post_date.split("T")[0].split('-').reverse().join('/')}
                                                </td>
                                                <td>
                                                    {post.id}
                                                </td>
                                                <td>
                                                    {post.post_title}
                                                </td>
                                                <td>
                                                    {post.post_content}
                                                </td>
                                                <td>
                                                    {post.post_type}
                                                </td>
                                                <td>
                                                    {post.post_image}
                                                </td>
                             </tr>
                             )}
                             </tbody>
                             </table>
                     </div>
                     </div>
             </div>                 
             </div>
            <script src="js/jquery-3.1.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/active.js"></script>
        </body>)}

export default Post

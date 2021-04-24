import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state= {
            postsList:[],
        }
    }

    componentDidMount() {
        //get list
        fetch('/api/posts/list/')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            postsList:data
          })
        })
        .catch(console.log)
    }
    

    render() {
    
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

            {/* Post section */}
            <section className="blog-post-area">
                <div className="container">
                        <div className="blog-post-area-style">
                        <div className = "row">
                        <div className="flexContainer">
                        {this.state.postsList.map((aPost) => (
    
                                    <div className="single-post" style={{flexBasis: "28%"}}>
                                        <img id="img-post" src={aPost.post_image} alt=""/>
                                        <Link to={`/post/${aPost.id}`}><h3>{aPost.post_title}</h3></Link>
                                        <h4>Category: <span>{aPost.post_type}</span></h4>
                                        <h4>Date: <span>{aPost.post_date.split("T")[0].split('-').reverse().join('/')}</span></h4>
                                        
                                        <div className = "button-container">

                                        {/* Delete item */}
                                        <span className ="button-post-left">
                                            <button type="image" src="client\src\images\trash-outline.svg" className="btn btn-primary btn-block" id="button_posts" onClick={()=>{
                                                fetch(`/api/posts/${aPost.id}`,{method:'DELETE'}).then(()=>{
                                                    fetch('/api/posts/list/').then((result)=>result.json()).then((json)=>{
                                                        console.log({json});
                                                        this.setState({...this.state,postsList:json}); //mantiene lo que habia en estado y actualiza la lista con lo que elimine
                                                        }).catch(console.log);
                                                    })
                                            }}><i className="fa fa-trash" id="icon-button"></i></button>
                                        </span>

                                        {/* Edit item */}
                                        <span className ="button-post-right">
                                            <Link to={`/form/${aPost.id}`}><button type="button" className="btn btn-primary btn-block" id="button_posts"><i id="icon-button" className="fa fa-pencil"></i></button></Link>
                                        </span>
                                        </div>

                                    </div>
                        ))};               
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
            <script src="js/jquery-3.1.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/active.js"></script>
        </body>
)
}}

export default Home
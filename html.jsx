/*return (
    <body>
        <div className="wrapper">

        {/* Header 
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

         {/* Page Content 
         <div className="content">
             {/* Show post 
                    <div className="row justify-content-center" id="table_posts">     
                    <div className="col-9">
                        {!post?null:(    
                            <div>
                                <section class="single-blog-area">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="border-top">
                                                    <div class="col-md-8">
                                                        <div class="blog-area">
                                                            <div class="blog-area-part">
                                                                <span><h3>Date: {post.post_date.split("T")[0].split('-').reverse().join('/')}</h3><span></span><h3>ID: {{/*post.post.id}}</h3></span>
                                                                <h3>Category: {post.post_type}</h3>
                                                                <h2>{post.post_title}</h2>
                                                                <img src="{post.post_image}" alt="" />
                                                                <p>{post.post_content}</p>
                                                                <h3><i class="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labo<i class="fa fa-quote-right" aria-hidden="true"></i></h3>
                                                                <div><Link to='/'><button className="btn btn-primary btn-block" id="submit-button">Home</button></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )};
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
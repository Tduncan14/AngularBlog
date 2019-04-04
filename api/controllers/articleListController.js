const Article = require('../models/Article');


// the function that gets all the articles
exports.listAllArticles = (req,res) =>{

    Article.find({},(err,article) =>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).json(article);
    })
}

// grabs all the articles with that tag
exports.listTagArticles = (req,res) =>{

    Article.find({tag:req.params.tag},(err,article)=>{
        if(err){
            res.status(500).send(err);
        }

        res.status(200).json(article);
    
})

}

// creates a new article


exports.createNewArticle = (req,res) =>{
    let newArticle = new Article(req.body);

    newArticle.save((err,article) =>{
        if(err){
            res.status(500).send(err);
        }
        res.status(201).json(article);
    });
}

// finds the article by the id or parameter to read
exports.readArticle =(req,res) =>{
    Article.findById(req.params.articleid,(err,article) =>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).json(article);
    })
};

exports.updateArticle = (req,res) =>{
    Article.findOneAndUpdate(
        {_id: req.params.articleid},
        req.body,
        {new:true},
        (err,article) =>{
            if(err){
                res.status(500).send(err);
            }
             res.status(200).json(article);
        }
    )
}

exports.deleteArticle =(req,res) =>{
Article.remove({_id:req.params.articleid},(err,article) =>{

    if(err){
        res.status(404).send(err);
    }

    res.status(200).send({message:"Article is successfully deleted"});

}

)}






















/*

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


setting the engine in an express

app.set('view engine','pug');

/* */
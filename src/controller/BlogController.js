const blogModel = require('../models/BlogModel');



exports.CreateBlog = async (req, res) => {

    let reqBody = req.body;

    try {

        let result = await blogModel.create(reqBody);
        res.status(200).json({ status: "Success", data: result })

    }

    catch (error) {
        res.status(200).json({ status: "Fail", data: error })
    }
}




// R=Read
exports.ReadBlog = async (req, res) => {

    try {
        let result = await blogModel.find()
        res.status(200).json({ status: "Success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "Fail", data: error })
    }


}

// R=Read By ID
exports.ReadBlogByID = async (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };

    try {
        let result = await blogModel.find(Query)
        res.status(200).json({ status: "Success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "Fail", data: error })
    }

}


// U=Update

exports.UpdateBlog = async (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };
    let reqBody = req.body;


    try {
        let result = await blogModel.updateOne(Query, reqBody)
        res.status(200).json({ status: "success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "fail", data: error })
    }
}



// D=Delete
exports.DeleteBlog = async (req, res) => {
    let id = req.params.id;
    let Query = { _id: id };

    try {
        let result = await blogModel.deleteOne(Query);
        res.status(200).json({ status: "success", data: result })
    }

    catch (error) {
        res.status(400).json({ status: "fail", data: error })

    }

}





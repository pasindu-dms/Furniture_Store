const router = require("express").Router();
const Feedback = require('../../models/FeedbackModel/feedback.model');


//add feedback ('http://localhost:8081/api/feedback/feedback/addfeedback')
router.route("/addfeedback").post((req,res)=>{
    const Username = req.body.Username;
    const Phone = Number(req.body.Phone);
    const Email = req.body.Email;
    const date = Date.parse(req.body.date);
    const feedbackMsg = req.body.feedbackMsg;

    const newFeedback = new Feedback({
        Username, 
        Phone,
        Email,
        date,
        feedbackMsg
    })

    newFeedback.save()
    .then(()=>{res.json("Successfully added your Feedback. Thank You !!") //feedback added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});


// get all feedback ('http://localhost:8081/api/feedback/feedback/getallfeedbacks')
router.route('/getallfeedbacks').get((_req, res) => {
    Feedback.find()
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update feedback ('http://localhost:8081/api/feedback/feedback/update/:id')
router.route('/update/:id').put((req, res) => {
    const id = req.params.id;

    Feedback.findByIdAndUpdate(id)
        .then(feedback => {
            if (!feedback) {
                return res.status(404).json('Feedback not found');
            }

            feedback.Username = req.body.Username;
            feedback.Phone = Number(req.body.Phone);
            feedback.Email = req.body.Email;
            feedback.date = Date.parse(req.body.date);
            feedback.feedbackMsg = req.body.feedbackMsg;

            feedback.save()
                .then(() => res.json('Feedback updated successfully!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



//Remove feedback ('http://localhost:8081/api/feedback/feedback/remove/:id ')
router.route('/remove/:id').delete((req, res) => {
    Feedback.findByIdAndDelete(req.params.id)
        .then(() => res.json('Feedback deleted successfully !!.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one feedback ('http://localhost:8081/api/feedback/feedback/getfeedbackbyid/:id ')
router.route('/getfeedbackbyid/:id').get((req, res) => {
    Feedback.findById(req.params.id)
        .then(feedback => res.json(feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


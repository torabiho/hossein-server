export const listEducations = (req,res) => {
    const { educationCollection } = req.app.locals;
    educationCollection.find({}).toArray()
    .then(response => res.status(200).json(response))
    .catch((err) => res.status(404).json(err));
}
export const listEducations = (req,res) => {
    const { educations } = req.app.locals;
    educations.find({}).toArray()
    .then(response => res.status(200).json(response))
    .catch((err) => res.status(404).json(err));
}
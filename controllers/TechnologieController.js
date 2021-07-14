const Technologie = require('../models/technologie');

exports.getAllTechnologies = (req, res) => {
   
    Technologie
        .findAll()
        .then((technologies) => {

            res.status(200).json({error: false, data: technologies })
        })
        .catch(err => res.status(404).json({ error: true, message: 'assisstances not found !' }))

}

exports.storeTechnologie = (req, res) => {

    let { intitule, description } = req.body;

    Technologie.create({
        intitule: intitule,
        description: description
    })
    .then((technologie) => res.status(201).json({ error: false, data: technologie }))
    .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for technologie' }))
   
}

exports.updateTechnologie = (req, res) => {
    console.log(req.body)
    let { intitule, description } = req.body;

    Technologie.update({
        intitule: intitule,
        description: description
    }, {
        where: { id: req.params.id }
    })
    .then((result) => res.status(202).json({ error: false, data: result }))
    .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
}

exports.showOneTechnologie = async (req, res) => {
   
    try {
        let technologie = await Technologie.findByPk(req.params.id);
        return res.status(200).json({error: false, data: technologie})
    } catch (error) {
        return res.status(404).json({ error: true, message: 'technologie not found' })
    }
    
        
}

exports.deleteTechnologie =  (req, res) => {
    return res.send('suppression')
}

// exports.editCategory =  (req, res) => {
//     Category.findByPk(req.params.id)
//            .then(category => {
//                res.render('category/edit', {
//                    category: category
//                })
//            })
// }

exports.patchTechnologie = (req, res) => {
    
    Technologie.update(req.body, { where: { id: req.params.id } })
            .then(result => res.status(200).json({ error: false, data: result }))
            .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}


// exports.createCategory = (req, res) => {
//     res.render('category/create')
// }
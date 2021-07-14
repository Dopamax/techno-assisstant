const Assisstance = require('../models/assisstance');
const Technologie = require('../models/technologie');

exports.getAllAssisstances = (req, res) => {
   
    Assisstance
        .findAll({ include: [{ model: Technologie }] })
        .then((assisstances) => {
            console.log(assisstances)
            res.status(200).json({ error: false, data: assisstances })
        })
        .catch(err => res.status(404).json({error: true, message: 'assisstances not found!'}))

}

exports.storeAssissstance = (req, res) => {

    let { titre, lien, technologie } = req.body;

    Assisstance.create({
        titre: titre,
        lien:lien,
        description: description,
        technologieId: technologie
    })
    .then((assisstance) => res.status(201).json({error: false, data: assisstance}))
    .catch((err) => res.status(400).json({error: true, message: 'Bad request !'}))
   
}

exports.updateAssisstance = (req, res) => {
    return res.send('modification totale')
}

exports.showOneAssisstance = (req, res) => {
   
    Assisstance.findByPk(req.params.id)
           .then(assisstance => {
               res.status(200).json({ error: false, data: assisstance })
           })
           .catch(err => res.status(404).json({error: true, message: 'assisstance not found !'})) 
}

exports.deleteAssisstance =  (req, res) => {
    
    let id = req.params.id;

    Assisstance.destroy({ where: { id: id } })
           .then(() => res.status(204).json({}))
           .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete this resource !' }))
}

// exports.editProduct =  (req, res) => {
//     Product.findByPk(req.params.id)
//            .then(product => {
//                res.render('product/edit', {
//                    product: product
//                })
//            })
// }

exports.patchAssisstance = (req, res) => {
    return res.send('modification partielle')
}


// exports.createProduct = (req, res) => {

//     Category.findAll({ where: { active: 1 } })
//             .then((categories) => {

//                 res.render('product/create', { categories: categories })
//             })
//             .catch((err) => console.log(err))

// }
const Form = require('../models/form');

exports.createForm = (req, res) => {
    try {
        const formObject = req.body.form;
        delete formObject._id;
        const form = new Form(formObject);
        form.save()
            .then(() => res.status(201).json({ message: 'Formulaire envoyé !' }))
            .catch(error => res.status(400).json({ error }));
    } catch (error) {
    
        res.status(500).json({ error: 'Une erreur interne est survenue lors du traitement du formulaire.' });
    }
}
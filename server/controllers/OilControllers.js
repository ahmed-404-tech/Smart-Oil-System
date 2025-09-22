const Oil = require("../models/Oil");

const addOil = async (req, res) => {
    const { type, grade, brand, cars, volume, buyPrice, sellPrice, stock, expire } = req.body;

    try {
        const oil = new Oil({ type, grade, brand, cars, volume, buyPrice, sellPrice, stock, expire });
        await oil.save();

        res.status(201).json(oil);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

const getOils = async (req, res) => {
    try {
        const oils = await Oil.find();

        if (!oils) {
            res.status(400).json({ message: "There is no oils here" });
        }

        res.status(200).json(oils);
    } catch (error) {
        res.status(500).json({ message: "error to get oils" });
        console.log(error);
    }
}

const getOneOil = async (req, res) => {
    const { id } = req.params;

    try {
        const oil = await Oil.findById(id);

        res.status(200).json(oil);
    } catch (error) {
        console.log(error);
    }
}

const deleteOil = async (req, res) => {
    const { id } = req.params;

    try {
        const oil = await Oil.findByIdAndDelete(id);
        res.status(200).json(oil);
    } catch (error) {
        console.log(error)
    }
}

const editOil = async (req, res) => {
    const { id } = req.params;
    const { type, grade, brand, cars, volume, buyPrice, sellPrice, stock, expire } = req.body;

    try {
        const editedOil = await Oil.findByIdAndUpdate(id, { type, grade, brand, cars, volume, buyPrice, sellPrice, stock, expire });
        res.status(200).json(editedOil);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { addOil, getOils, getOneOil, deleteOil, editOil };
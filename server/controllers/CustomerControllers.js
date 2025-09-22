const Customer = require("../models/Customer");
const Oil = require("../models/Oil");

const addCustomer = async (req, res) => {
    const { name, oil, currentKM, nextKM, replaceOilFilter, replaceGasolineFilter } = req.body;

    try {
        const oilExists = await Oil.findById(oil);

        if (!oilExists) {
            res.status(400).json({ message: "There is no oil with this id" });
        }

        const customer = new Customer({ name, oil, currentKM, nextKM, replaceOilFilter, replaceGasolineFilter });
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Cannot create customer now" });
        console.log("error: ", error);
    }
}

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().populate("oil", "type grade");

        if (customers.length === 0) {
            res.status(404).json({ message: "There is no customers here" });
        }

        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: "error to get customers" });
        console.log(error);
    }
}

const getOneCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findById(id).populate("oil");

        if (!customer) {
            res.status(400).json({ message: "There is no customer with this id" });
        }

        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "error to get customer" });
        console.log(error);
    }
}

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByIdAndDelete(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "error to delete customer" });
        console.log(error);
    }
}

const editCustomer = async (req, res) => {
    const { id } = req.params;
    const { oil, currentKM, nextKM, replaceOilFilter, replaceGasolineFilter } = req.body;

    try {
        const customer = await Customer.findByIdAndUpdate(id, { oil, currentKM, nextKM, replaceOilFilter, replaceGasolineFilter }).populate("oil");
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "error to edit customer" });
        console.log(error);
    }
}

module.exports = { addCustomer, getCustomers, getOneCustomer, deleteCustomer, editCustomer };
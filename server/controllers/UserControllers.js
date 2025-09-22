const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ username, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Cannot create user now" });
        console.log("error: ", error);
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).send("No user with this username");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send("Incorrect password");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({ user, token });
    } catch (error) {
        console.log("Login error: ", error);
        res.status(500).send("Login error");
    }
}

module.exports = { addUser, login }
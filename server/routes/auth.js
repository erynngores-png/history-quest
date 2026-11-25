import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, email, password, role, classCode } = req.body;

        if (!password || !role || (role === "student" && !username) || (role === "teacher" && !email)) {
            return res.status(400).json({
                message: "Please fill in all required fields."
            });
        }

        if (role === "student" && password.length < 8) {
            return res.status(400).json({
                message: "Student passwords must be at least 8 characters."
            });
        }

        if (role === "teacher" && (
            password.length < 8 ||
            !/[0-9]/.test(password) ||
            !/[^A-Za-z0-9]/.test(password)
        )) {
            return res.status(400).json({
                message: "Teacher passwords must have at least 8 characters, one number, and one special character."
            });
        }

        if (role === "student" && !classCode) {
            return res.status(400).json({
                message: "Students must enter a class code."
            });
        }

        const existingUser = role === "student" 
            ? await User.findOne({ username })
            : await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Account already exists."
            });
        }

        const teacherClassCode = role === "teacher"
            ? Math.random().toString(36).substring(2, 8).toUpperCase()
            : undefined;

        const newUser = new User({
            username,
            email,
            password,
            role,
            classCode: role === "student" ? classCode: null,
            teacherClassCode: role === "teacher" ? teacherClassCode : undefined
        });

        await newUser.save();

        res.status(201).json({
            message: "Account created successfully!"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password, username, role } = req.body;

        const user = role === "teacher"
            ? await User.findOne({ email, role: "teacher" })
            : await User.findOne({ username, role: "student" });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect username/email or password."
            });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
            return res.status(400).json({
                message: "Incorrect username/email or password."
            });
        }

        res.status(200).json({
            message: "Login successful!",
            role: user.role
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

export default router;
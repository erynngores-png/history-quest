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
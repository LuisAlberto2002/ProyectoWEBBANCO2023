const User = require("../models/Users");

// para manejar el login de login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.status(200).json({
      message: "Login exitoso",
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

module.exports = { loginUser };

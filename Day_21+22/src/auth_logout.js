const Logout = async (req, res) => {
  try {
    // Clear the JWT cookie
    res.clearCookie("token");
    res.send("Logout Successfully");
  } catch (err) {
    res.send("Error: " + err.message);
  }
};

module.exports = Logout;

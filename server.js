// server.js
export default async function(req, res) {
  const payload = JSON.parse(req.payload || '{}');

  if (payload.path === "/hello") {
    return res.send({ message: "Hello World!" });
  } else if (payload.path === "/goodbye") {
    return res.send({ message: "Goodbye!" });
  }

  return res.send({ message: "Unknown path" });
}
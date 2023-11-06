function status(request, response) {
  response.status(200).json({ chave: "Estudar NEXTJS está sendo bacana!" });
}

export default status;

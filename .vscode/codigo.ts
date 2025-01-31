import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from "..";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "DELETE") {
      const codigo = Number(req.query.codigo);
      controleLivro.excluir(codigo);
      return res.status(200).json({ mensagem: "Livro excluído com sucesso" });
    }
    return res.status(405).json({ mensagem: "Método não permitido" });
  } catch (erro) {
    return res.status(500).json({ mensagem: "Erro no servidor" });
  }
};

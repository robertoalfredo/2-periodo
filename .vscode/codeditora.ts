import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const codEditora = Number(req.query.codEditora);
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      if (nomeEditora) {
        return res.status(200).json({ nome: nomeEditora });
      }
      return res.status(404).json({ mensagem: "Editora não encontrada" });
    }
    return res.status(405).json({ mensagem: "Método não permitido" });
  } catch (erro) {
    return res.status(500).json({ mensagem: "Erro no servidor" });
  }
};

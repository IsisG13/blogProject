import { getDocs, collection, doc, getDoc, deleteDoc } from "firebase/firestore";
import db from "@/firebase";

export default async function handler(req, res) {
  const dadosCollection = collection(db, "dados");

  if (req.method === "GET") {
    const { id } = req.query;

    try {
      if (id) {
        const docRef = doc(dadosCollection, id);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const selectedData = {
            id: docSnapshot.id,
            ...docSnapshot.data(),
          };
          res.status(200).json(selectedData);
        } else {
          res.status(404).json({ error: "Item não encontrado" });
        }
      } else {
        const dadosSnapshot = await getDocs(dadosCollection);
        const dados = dadosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        res.status(200).json(dados);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      res.status(500).json({ error: "Erro ao buscar dados." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}

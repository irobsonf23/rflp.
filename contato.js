import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            sucesso: false,
            mensagem: "Método não permitido."
        });

    }

    try {

        const {
            nome,
            email,
            mensagem
        } = req.body;

        if (!nome || !email || !mensagem) {

            return res.status(400).json({
                sucesso: false,
                mensagem: "Preencha todos os campos."
            });

        }

        await sql`
            INSERT INTO contatos
            (nome, email, mensagem)
            VALUES
            (${nome}, ${email}, ${mensagem})
        `;

        return res.status(200).json({
            sucesso: true,
            mensagem: "Contato salvo com sucesso."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao salvar contato."
        });

    }

}

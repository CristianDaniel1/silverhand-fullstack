export const resetPasswordEmail = (
  userName: string,
  resetLink: string,
  companyName: string = 'SilverHand'
) => {
  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redefinição de Senha</title>
    </head>
    <body
      style="
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        box-shadow: #0000001a 0px 4px 12px;
      "
    >
      <div
        style="
          background-color: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          padding: 20px;
        "
      >
        <div
          style="
            text-align: center;
            margin-bottom: 25px;
            padding: 20px;
            background-color: #fff;
          "
        >
          <h1 style="color: #000000; margin-bottom: 10px">Redefinir Senha</h1>
          <div
            style="
              height: 3px;
              width: 50px;
              background-color: #ff5858;
              margin: 0 auto;
            "
          ></div>
        </div>

        <p style="margin-bottom: 20px">Olá <strong>${userName}</strong>,</p>

        <p style="margin-bottom: 20px">
          Recebemos uma solicitação para redefinir a senha da sua conta. Clique no
          botão abaixo para criar uma nova senha:
        </p>

        <div style="text-align: center; margin: 30px 0">
          <a
            href="${resetLink}"
            style="
              background-color: #ff5858;
              color: #000000;
              padding: 12px 25px;
              text-decoration: none;
              border-radius: 4px;
              font-weight: bold;
              display: inline-block;
            "
          >
            Redefinir Senha
          </a>
        </div>

        <p style="margin-bottom: 20px">
          Se você não solicitou esta redefinição, por favor ignore este e-mail ou
          entre em contato conosco se tiver alguma dúvida.
        </p>

        <p style="margin-bottom: 5px">Atenciosamente,</p>
        <p style="margin-top: 0; font-weight: bold; color: #ff5858;">Equipe ${companyName}</p>

        <div
          style="
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #777;
          "
        >
          <p>
            Se você estiver tendo problemas para clicar no botão "Redefinir Senha",
            copie e cole o URL abaixo no seu navegador:
          </p>
          <p style="word-break: break-all">${resetLink}</p>
        </div>
      </div>
    </body>
  </html>
`;
};

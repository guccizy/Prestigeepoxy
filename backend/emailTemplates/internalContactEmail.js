const generateInternalContactEmail = (name, email, phone, project, squareFootage, finishType, message) => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau Message de Contact - Prestige Epoxy</title>
        <style>
            body {
                font-family: 'Manrope', Arial, sans-serif;
                background-color: #0f0f0f; /* Midnight */
                color: #f5f5f0; /* Cream */
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: none;
                -ms-text-size-adjust: none;
            }
            .container {
                max-width: 700px;
                margin: 20px auto;
                background-color: #000000; /* Deep Black */
                border-radius: 4px;
                overflow: hidden;
                border: 0.5px solid rgba(201, 169, 97, 0.1);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            .header-table {
                background-color: #000000;
                padding: 30px;
                border-bottom: 0.5px solid rgba(201, 169, 97, 0.1);
                width: 100%;
            }
            .header-logo, .header-title {
                vertical-align: middle;
                padding: 0;
            }
            .header-logo {
                width: 28px;
                padding-right: 10px;
            }
            .header-title h1 {
                font-family: 'Unbounded', Arial, sans-serif;
                color: #f5f5f0;
                font-size: 36px; /* Augmenté de 28px à 36px */
                font-weight: 300;
                margin: 0;
                line-height: 1;
                text-align: left;
            }
            .header-title h1 span {
                color: #c9a961;
            }
            .header img {
                max-width: 28px;
                height: 26px;
                display: block;
                border: 0;
            }
            .content {
                padding: 35px;
                background-color: #000000;
                color: #f5f5f0;
                line-height: 1.7;
                font-size: 16px;
            }
            .content p {
                margin-bottom: 18px;
                color: #f5f5f0;
            }
            .details {
                background-color: #1a1a1a; /* Anthracite */
                padding: 25px;
                border-radius: 4px;
                border: 0.5px solid rgba(201, 169, 97, 0.1);
                margin-top: 25px;
                margin-bottom: 25px;
            }
            .details ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .details ul li {
                margin-bottom: 10px;
                font-size: 15px;
                color: #f5f5f0;
            }
            .details ul li:last-child {
                margin-bottom: 0;
            }
            .details ul li strong {
                color: #c9a961;
                font-weight: 600;
            }
            .footer {
                background-color: #000000;
                color: rgba(245, 245, 240, 0.6);
                text-align: center;
                padding: 20px 30px;
                font-size: 11px;
                border-top: 0.5px solid rgba(201, 169, 97, 0.1);
            }
            .footer a {
                color: #f5f5f0;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <table class="header-table" role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="header-logo">
                        <img src="https://i.ibb.co/9kTg0YFH/logo-mail.png" alt="Prestige Epoxy Logo" />
                    </td>
                    <td class="header-title">
                        <h1>PRESTIGE <span>EPOXY</span></h1>
                    </td>
                </tr>
            </table>
            <div class="content">
                <p>Bonjour l'équipe,</p>
                <p>Un nouveau message de contact a été soumis via le site web. Voici les détails :</p>
                <div class="details">
                    <ul>
                        <li><strong>Nom :</strong> ${name}</li>
                        <li><strong>Email client :</strong> ${email}</li>
                        <li><strong>Téléphone client :</strong> ${phone || 'Non fourni'}</li>
                        <li><strong>Type de projet :</strong> ${project || 'Non fourni'}</li>
                        <li><strong>Nombre de pieds carrés :</strong> ${squareFootage || 'Non fourni'}</li>
                        <li><strong>Type de finitions :</strong> ${finishType || 'Non fourni'}</li>
                        <li><strong>Message :</strong><br/>${message}</li>
                    </ul>
                </div>
                <p>Veuillez contacter ce client dans les plus brefs délais.</p>
            </div>
            <div class="footer">
                <p>&copy; 2025 Prestige Epoxy. Tous droits réservés.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

module.exports = generateInternalContactEmail;

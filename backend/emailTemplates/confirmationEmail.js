const generateConfirmationEmail = (clientName, clientEmail, projectType, message, squareFootage, finishType) => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation de votre demande de devis - Prestige Epoxy</title>
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
                max-width: 700px; /* Plus large */
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
                width: 26px; /* Ajustement fin pour l'alignement */
                padding-right: 10px;
            }
            .header-title h1 {
                font-family: 'Unbounded', Arial, sans-serif; 
                color: #f5f5f0;
                font-size: 36px; /* Augmenté de 28px à 36px */
                font-weight: 300;
                margin: 0;
                line-height: 1; /* Assurer que la hauteur de ligne n'interfère pas */
                text-align: left;
            }
            .header-title h1 span {
                color: #c9a961;
            }
            .header img {
                max-width: 26px; /* Ajustement fin pour l'alignement */
                height: 26px; /* Hauteur fixe pour un meilleur alignement */
                display: block;
                border: 0;
            }
            .header h1 {
                font-family: 'Unbounded', Arial, sans-serif; 
                color: #f5f5f0;
                font-size: 28px;
                font-weight: 300;
                margin: 0;
                line-height: 1;
                text-align: left;
            }
            .header h1 span {
                color: #c9a961;
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
            .button-container {
                text-align: center;
                margin-top: 35px;
                margin-bottom: 35px;
            }
            .button {
                display: inline-block;
                background-color: #c9a961;
                color: #000000 !important;
                padding: 14px 28px;
                border-radius: 30px;
                text-decoration: none;
                font-weight: bold;
                font-size: 16px;
                letter-spacing: 0.8px;
                transition: background-color 0.3s ease;
            }
            .details {
                background-color: #1a1a1a;
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
                color: #f5f5f0; /* Force le texte des li en Cream */
            }
            .details ul li:last-child {
                margin-bottom: 0;
            }
            .details ul li strong {
                color: #c9a961; /* Elegant Gold */
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
                color: #f5f5f0; /* Cream / Blanc */
                text-decoration: none;
            }
            .content a {
                color: #c9a961; /* Elegant Gold */
                text-decoration: none;
                font-weight: 500;
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
                <p>Bonjour ${clientName},</p>
                <p>Nous vous confirmons la bonne réception de votre demande de devis pour votre projet de revêtement époxy.</p>
                <p>Voici un récapitulatif des informations que vous nous avez transmises :</p>
                <div class="details">
                    <ul>
                        <li><strong>Email :</strong> ${clientEmail}</li>
                        <li><strong>Type de projet :</strong> ${projectType}</li>
                        <li><strong>Nombre de pieds carrés :</strong> ${squareFootage || 'Non fourni'}</li>
                        <li><strong>Type de finitions :</strong> ${finishType || 'Non fourni'}</li>
                        <li><strong>Message :</strong><br/>${message}</li>
                    </ul>
                </div>
                <p>Notre équipe dédiée va étudier votre demande avec la plus grande attention et vous contactera personnellement dans les plus brefs délais pour discuter de vos besoins et élaborer une proposition sur mesure.</p>
                <p>En attendant notre retour, nous vous invitons à explorer nos réalisations et à découvrir l'étendue de nos finitions d'exception sur notre <a href="https://www.prestigeepoxy.ca">site web</a>.</p>
                <div class="button-container">
                    <a href="https://www.prestigeepoxy.ca" class="button">Visiter notre site</a>
                </div>
                <p>Merci de faire confiance à l'excellence de Prestige Epoxy pour votre projet.</p>
                <p>Cordialement,</p>
                <p>L'équipe Prestige Epoxy</p>
            </div>
            <div class="footer">
                <p>&copy; 2025 Prestige Epoxy. Tous droits réservés.</p>
                <p><a href="https://www.prestigeepoxy.ca/mentions-legales">Mentions légales</a> | <a href="https://www.prestigeepoxy.ca/securite">Sécurité</a></p>
            </div>
        </div>
    </body>
    </html>
  `;
};

module.exports = generateConfirmationEmail;

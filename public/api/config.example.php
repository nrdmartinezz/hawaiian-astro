<?php
/**
 * Copy to config.local.php for local testing, or to ~/private/site-mail.php
 * on the server (outside public_html). lib/mailer.php reads that path first.
 * Never commit real credentials.
 *
 * Mail transport: uses PHP mail() by default (like WordPress). Set smtp_host, smtp_user,
 * and smtp_pass to switch to authenticated SMTP — useful when mail() deliverability is poor.
 */
return [
    'recaptcha_secret' => 'YOUR_RECAPTCHA_SECRET_KEY',
    'notify_to' => 'oahusc@hawaiiansmilesortho.com',
    'from_email' => 'oahusc@hawaiiansmilesortho.com',
    'from_name' => 'Hawaiian Smiles Orthodontics',
    'site_url' => 'https://hawaiiansmilesortho.com',
    'site_phone' => '(808) 247-6039',
    'site_phone_href' => '+18082476039',
    'timezone' => 'Pacific/Honolulu',

    // Optional SMTP — leave blank to use PHP mail() on the host.
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_user' => '',
    'smtp_pass' => '',

    'forms' => [
        'contact' => [
            'subject' => 'New enquiry — Hawaiian Smiles Orthodontics',
            'notification' => 'notification-contact.html',
            // Autoreply disabled by default — set send_autoreply => true to enable.
        ],
    ],

    'recaptcha_min_score' => 0.5,
    'rate_limit_seconds' => 60,
    'rate_limit_max' => 5,
];

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locales = [
  'ar',
  'bg-BG',
  'de-DE',
  'en-US', // already created
  'es-ES',
  'fa-IR',
  'fr-FR',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'nl-NL',
  'pl-PL',
  'pt-BR',
  'ru-RU',
  'tr-TR',
  'vi-VN',
  'zh-CN',
  'zh-TW'
];

const plugins = ['propertai', 'tavily'];

plugins.forEach(plugin => {
  // Read the en-US file as template
  const enUsContent = fs.readFileSync(
    path.join(__dirname, '../locales', `${plugin}.en-US.json`),
    'utf8'
  );
  
  // Create the same content for all other locales
  locales.forEach(locale => {
    if (locale === 'en-US') return; // Skip as we already have this
    
    const filePath = path.join(__dirname, '../locales', `${plugin}.${locale}.json`);
    fs.writeFileSync(filePath, enUsContent);
    console.log(`Created ${filePath}`);
  });
});

console.log('All locale files created!'); 
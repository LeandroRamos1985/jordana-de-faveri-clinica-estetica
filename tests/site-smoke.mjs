import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const html = read('index.html');
const css = read('styles.css');
const js = read('script.js');

assert.match(html, /lang="pt-BR"/);
assert.ok(html.includes('<h1'));
assert.ok(html.includes('application/ld+json'));
assert.ok(html.includes('autoplay') && html.includes('muted') && html.includes('loop') && html.includes('playsinline'));
assert.match(html, /3023-7732/);
assert.match(html, /Ângelo La Porta/);
assert.match(html, /id="simulador"/);
assert.match(html, /id="contact-form"/);
assert.match(html, /id="mobile-menu"/);
assert.match(html, /id="privacy"/);
assert.match(html, /id="faq"/);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /--ink:/);
assert.match(js, /simulatorState/);
assert.match(js, /lead_form_submit/);
assert.ok(html.includes('Seus dados ficam neste navegador'));
console.log('site-smoke: ok');

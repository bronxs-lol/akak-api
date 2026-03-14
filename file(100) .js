export default function handler(req, res) {
const startTime = performance.now();
try {
const hosted = req.query.hosted;
const userAgent = req.headers['user-agent'] || '';
const isRoblox = userAgent.includes("Roblox") || req.headers['roblox-id'];
const customErrorHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kynx Hub – Access Denied</title>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0a0a0f;--card:#10101a;--border:#1e1e30;--accent:#7c3aed;--accent2:#a855f7;--red:#ef4444;--text:#e2e8f0;--muted:#64748b;--glow:rgba(124,58,237,0.35)}
html,body{height:100%}
body{
font-family:'Inter',sans-serif;
background:var(--bg);
color:var(--text);
width:100%;
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
margin:0;
padding:20px;
overflow:hidden
}
body::before{
content:'';
position:fixed;
inset:0;
background-image:linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px);
background-size:40px 40px;
animation:gridPan 20s linear infinite;
pointer-events:none;
z-index:0
}
body::after{
content:'';
position:fixed;
inset:0;
background:radial-gradient(ellipse 70% 50% at 50% 50%,rgba(124,58,237,0.10) 0%,transparent 70%);
pointer-events:none;
z-index:0
}
@keyframes gridPan{0%{transform:translateY(0)}100%{transform:translateY(40px)}}
.card{
position:relative;
z-index:1;
background:var(--card);
border:1px solid var(--border);
border-radius:16px;
padding:40px 36px;
max-width:480px;
width:100%;
margin:auto;
box-shadow:0 0 60px var(--glow),0 20px 60px rgba(0,0,0,0.5);
animation:fadeUp .6s ease both
}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid var(--border)}
.logo{font-family:'Rajdhani',sans-serif;font-size:1.5rem;font-weight:700;letter-spacing:2px;background:linear-gradient(135deg,var(--accent2),#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.badge-denied{display:flex;align-items:center;gap:6px;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.3);color:#f87171;font-size:.72rem;font-weight:600;letter-spacing:1.5px;padding:5px 12px;border-radius:999px;text-transform:uppercase}
.badge-denied::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--red);box-shadow:0 0 6px var(--red);animation:pulse 1.4s ease infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.icon-wrap{width:64px;height:64px;border-radius:14px;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);display:flex;align-items:center;justify-content:center;margin-bottom:20px}
.icon-wrap svg{width:32px;height:32px;color:var(--accent2)}
h1{font-family:'Rajdhani',sans-serif;font-size:1.75rem;font-weight:700;line-height:1.2;margin-bottom:10px;color:#fff}
.sub{font-size:.9rem;color:var(--muted);line-height:1.65;margin-bottom:8px}
.info-box{background:rgba(124,58,237,0.06);border:1px solid rgba(124,58,237,0.18);border-radius:10px;padding:14px 16px;font-size:.82rem;color:#94a3b8;line-height:1.6;margin:20px 0 28px}
.info-box strong{color:var(--accent2);font-weight:600}
.btn-row{display:flex;gap:12px;flex-wrap:wrap}
.btn{flex:1;min-width:130px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:11px 18px;border-radius:10px;font-size:.88rem;font-weight:600;cursor:pointer;text-decoration:none;border:none;transition:transform .15s ease,box-shadow .15s ease,filter .15s ease}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;box-shadow:0 4px 20px rgba(124,58,237,0.4)}
.btn-primary:hover{box-shadow:0 6px 28px rgba(124,58,237,0.6);filter:brightness(1.1)}
.btn-secondary{background:transparent;color:var(--text);border:1px solid var(--border)}
.btn-secondary:hover{border-color:var(--accent);color:var(--accent2);background:rgba(124,58,237,0.06)}
.discord-icon{width:18px;height:18px;fill:currentColor}
.footer-line{margin-top:24px;padding-top:18px;border-top:1px solid var(--border);font-size:.75rem;color:var(--muted);text-align:center;letter-spacing:.5px}
.footer-line span{color:var(--accent2);font-weight:600}
</style>
</head>
<body>
<div class="card">
<div class="topbar">
<div class="logo">Kynx Hub</div>
<div class="badge-denied">Access Denied</div>
</div>
<div class="icon-wrap">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="11" width="18" height="11" rx="2"/>
<path d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>
</div>
<h1>This Lua script is protected by Kynx Hub</h1>
<p class="sub">You don't have permission to access these files.</p>
<div class="info-box">
<strong>Protected Content</strong><br>
This script has been secured against unauthorized access, reverse engineering, and tampering. Direct API access is not permitted.
</div>
<div class="btn-row">
<a href="/" class="btn btn-primary">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
</svg>
Return Home
</a>
<a href="https://discord.gg/Pwgx7Z5AKf" target="_blank" rel="noopener" class="btn btn-secondary">
<svg class="discord-icon" viewBox="0 0 24 24">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
</svg>
Contact Kynx Hub
</a>
</div>
<div class="footer-line">Protected by <span>Kynx Hub</span> · Unauthorized access is strictly prohibited</div>
</div>
</body>
</html>`;
if(hosted!=="kynx-hub/loader.xyz"){return res.status(403).send("malformed link or file api changed error 200, report this error to discord.gg/Pwgx7Z5AKf")}
if(!isRoblox){
res.setHeader("Content-Type","text/html");
return res.status(403).send(customErrorHTML)
}
const luaScriptContent=`loadstring(game:HttpGet("https://raw.githubusercontent.com/bronxs-lol/akak-api/refs/heads/main/loader.txt"))()`;
const endTime=performance.now();
const timeTaken=(endTime-startTime).toFixed(2);
const timingWarning=`warn("script successfully loaded: ${timeTaken}ms")\n`;
const finalScript=timingWarning+luaScriptContent;
res.setHeader("Content-Type","text/plain");
return res.status(200).send(finalScript)
}catch(error){
console.error("API Error:",error);
return res.status(500).send("Internal Server Error")
}
}
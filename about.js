function buildAbout() {
  // Add about button to header
  const header = document.querySelector('header');
  const btn = document.createElement('button');
  btn.className = 'header-btn';
  btn.textContent = 'about';
  btn.onclick = openAbout;
  // Insert before theme picker
  const themePicker = header.querySelector('.theme-picker');
  header.insertBefore(btn, themePicker);

  // Build modal
  const overlay = document.createElement('div');
  overlay.id = 'aboutOverlay';
  overlay.className = 'about-overlay';
  overlay.onclick = e => { if (e.target === overlay) closeAbout(); };

  overlay.innerHTML = `
    <div class="about-modal">
      <button class="about-close" onclick="closeAbout()">&times;</button>

      <div class="about-title">fridge poems</div>

      <div class="about-body">
        <p>This is a website I made heavily inspired by and with a lot of gratitude to many people &mdash; <a href="https://www.instagram.com/depressingfridgepoems" target="_blank">@depressingfridgepoems</a> on Instagram, Spencer Chang&rsquo;s (<a href="https://spencer.place" target="_blank">spencer.place</a>) &ldquo;poems we found on the internet&rdquo;, and <a href="https://bactra.org/Poetry/" target="_blank">bactra.org</a>.</p>

        <p>I read a lot of poetry and I&rsquo;m very aspirational about my poetry writing skills (I possess none, to be clear). A huge collection of the poems I love are scattered across the social media websites I use which is a great pain since I would love to have a central repository (WIP). Recently I have started enjoying making silly things on the internet as a way to document my interests and get a chuckle (or a raised eyebrow) out of my friends and family.</p>

        <p>Poems/poets shown here are thanks to <a href="https://poetrydb.org" target="_blank">PoetryDB&rsquo;s</a> free + open (!!) API. All poems are also public domain. My deepest thanks to everyone/everything that inspired this. Thanks also to Claude for enabling someone who has absolutely no website development skills to ideate and do stuff like this. AI-assisted &ldquo;work&rdquo;/&ldquo;building&rdquo; can be such a <em><strong>joy</strong></em> sometimes.</p>

        <p>If you like this, you can reach me at <a href="mailto:niandinv2@gmail.com">niandinv2@gmail.com</a>. No hate/abusive email please. I am just a girl. LOL.</p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

function openAbout() {
  document.getElementById('aboutOverlay').classList.add('open');
}

function closeAbout() {
  document.getElementById('aboutOverlay').classList.remove('open');
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAbout();
});
-e 
document.addEventListener('DOMContentLoaded', buildAbout);

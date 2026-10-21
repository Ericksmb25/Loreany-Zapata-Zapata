import { COMMUNION_EVENT } from './invitationLogic';

/**
 * Generates a completely standalone single-file HTML document (with embedded CSS and JavaScript)
 * representing the high-end First Communion invitation for Loreany Zapata Zapata.
 */
export function generateSingleFileHtml(portraitBase64OrUrl: string = ''): string {
  const imageSrc = portraitBase64OrUrl || '/src/assets/images/Gemini_Generated_Image_uj01hsuj01hsuj01.jfif';

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primera Comunión - Loreany Zapata Zapata</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-white: #FFFFFF;
      --bg-cream: #FFFDFB;
      --pink-pastel: #F8C8DC;
      --pink-soft: #FDF2F6;
      --peach-pastel: #FFE5B4;
      --peach-soft: #FFF5E8;
      --gold-accent: #C5A059;
      --gold-light: #E8D3A2;
      --text-dark: #3F3B3B;
      --text-muted: #7A7270;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      background-color: var(--bg-cream);
      color: var(--text-dark);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .container {
      max-width: 820px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .serif-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }

    .script-title {
      font-family: 'Great Vibes', cursive;
    }

    /* Ambient background gradient elements */
    .bg-glow {
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      z-index: -1;
      opacity: 0.6;
      pointer-events: none;
    }
    .glow-1 {
      top: -50px;
      left: 10%;
      width: 320px;
      height: 320px;
      background: rgba(248, 200, 220, 0.45);
    }
    .glow-2 {
      top: 40%;
      right: 5%;
      width: 350px;
      height: 350px;
      background: rgba(255, 229, 180, 0.4);
    }
    .glow-3 {
      bottom: 10%;
      left: 15%;
      width: 300px;
      height: 300px;
      background: rgba(248, 200, 220, 0.35);
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 60px 20px 40px;
      position: relative;
    }

    .cross-icon {
      display: inline-block;
      margin-bottom: 16px;
      color: var(--gold-accent);
      filter: drop-shadow(0 2px 4px rgba(197, 160, 89, 0.2));
    }

    .hero-kicker {
      font-size: 1.25rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--gold-accent);
      font-weight: 500;
      margin-bottom: 8px;
    }

    .hero-name {
      font-size: clamp(2.5rem, 6vw, 4.2rem);
      font-weight: 400;
      line-height: 1.15;
      color: #2F2A2A;
      margin-bottom: 24px;
      letter-spacing: -0.01em;
    }

    /* Photo container with rounded-3xl and shadow-lg */
    .photo-arch-wrapper {
      position: relative;
      width: 280px;
      max-width: 85%;
      height: 380px;
      margin: 0 auto 36px;
      padding: 10px;
      background: linear-gradient(135deg, #FFFFFF, var(--pink-soft), #FFFFFF);
      border-radius: 24px;
      box-shadow: 0 15px 35px rgba(248, 200, 220, 0.4), 0 5px 15px rgba(0,0,0,0.03);
      border: 1px solid rgba(197, 160, 89, 0.35);
    }

    .photo-arch {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      object-fit: cover;
      object-position: top;
      display: block;
    }

    .intro-quote {
      max-width: 620px;
      margin: 0 auto;
      font-size: 1.15rem;
      font-style: italic;
      color: #554F4E;
      line-height: 1.8;
      position: relative;
      padding: 0 15px;
    }

    /* Countdown bar */
    .countdown-container {
      margin: 32px auto 0;
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
    }

    .countdown-card {
      background: #FFFFFF;
      border: 1px solid rgba(248, 200, 220, 0.8);
      border-radius: 16px;
      padding: 12px 18px;
      min-width: 78px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(248, 200, 220, 0.2);
    }

    .countdown-num {
      font-size: 1.6rem;
      font-weight: 600;
      color: #332E2E;
      font-family: 'Cormorant Garamond', Georgia, serif;
      line-height: 1;
    }

    .countdown-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-muted);
      margin-top: 4px;
    }

    /* Music Section */
    .section-card {
      background: rgba(255, 255, 255, 0.92);
      border-radius: 24px;
      border: 1px solid rgba(248, 200, 220, 0.6);
      padding: 36px 28px;
      margin: 28px auto;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(248, 200, 220, 0.18);
      position: relative;
      backdrop-filter: blur(8px);
    }

    .music-box {
      text-align: center;
      background: linear-gradient(135deg, rgba(255,255,255,0.98), var(--pink-soft) 40%, var(--peach-soft) 100%);
      border: 1px solid rgba(197, 160, 89, 0.3);
    }

    .music-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--gold-accent);
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .music-title {
      font-size: 1.6rem;
      color: #2F2A2A;
      margin-bottom: 4px;
    }

    .music-artist {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .music-inspire {
      font-size: 1.05rem;
      font-style: italic;
      color: #5A5352;
      max-width: 540px;
      margin: 0 auto 24px;
      line-height: 1.6;
    }

    .play-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #FFE5B4, #F8C8DC);
      color: #3B3133;
      border: 1px solid rgba(197, 160, 89, 0.4);
      padding: 14px 32px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(248, 200, 220, 0.5);
      transition: all 0.3s ease;
    }

    .play-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(248, 200, 220, 0.7);
    }

    /* Event Details Grid */
    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 32px 0;
    }

    .detail-card {
      background: #FFFFFF;
      border-radius: 20px;
      padding: 32px 24px;
      border: 1px solid rgba(248, 200, 220, 0.7);
      text-align: center;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .detail-icon-circle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--pink-soft);
      border: 1px solid var(--pink-pastel);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: var(--gold-accent);
    }

    .detail-card-title {
      font-size: 1.65rem;
      color: #312C2C;
      margin-bottom: 12px;
    }

    .detail-item {
      margin-bottom: 8px;
      font-size: 0.95rem;
      color: #554F4E;
    }

    .detail-highlight {
      font-size: 1.15rem;
      font-weight: 600;
      color: #2F2A2A;
      margin-bottom: 4px;
    }

    .btn-maps {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #FFFFFF;
      border: 1px solid var(--peach-pastel);
      background-color: var(--peach-soft);
      color: #4A3A2A;
      padding: 10px 22px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      margin-top: 18px;
      transition: all 0.2s ease;
    }

    .btn-maps:hover {
      background: var(--peach-pastel);
      transform: translateY(-1px);
    }

    /* Envelope Gift Section */
    .gift-box {
      text-align: center;
      background: linear-gradient(to bottom, #FFFFFF, var(--pink-soft));
    }

    .envelope-icon {
      width: 52px;
      height: 52px;
      margin: 0 auto 16px;
      color: var(--gold-accent);
    }

    .gift-text {
      max-width: 580px;
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.8;
      color: #4C4646;
    }

    /* Attendance confirmation section */
    .rsvp-box {
      text-align: center;
      background: #FFFFFF;
      border: 1px solid rgba(197, 160, 89, 0.4);
      padding: 28px 24px;
    }

    .rsvp-notice {
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: #332D2E;
    }

    .rsvp-subtext {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin-top: 6px;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 48px 20px 60px;
      border-top: 1px solid rgba(248, 200, 220, 0.5);
      margin-top: 40px;
    }

    .footer-thanks {
      font-size: 1.45rem;
      font-style: italic;
      color: #383333;
      margin-bottom: 20px;
    }


    /* Floating music pill */
    .floating-audio-widget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(197, 160, 89, 0.4);
      padding: 10px 18px;
      border-radius: 50px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .floating-audio-widget:hover {
      transform: scale(1.03);
    }

    .eq-bar {
      display: inline-block;
      width: 3px;
      height: 14px;
      background-color: var(--gold-accent);
      border-radius: 2px;
      animation: bounce 1s infinite alternate;
    }
    .eq-bar:nth-child(2) { animation-delay: 0.2s; height: 18px; }
    .eq-bar:nth-child(3) { animation-delay: 0.4s; height: 10px; }

    @keyframes bounce {
      0% { height: 6px; }
      100% { height: 18px; }
    }
  </style>
</head>
<body>
  <div class="bg-glow glow-1"></div>
  <div class="bg-glow glow-2"></div>
  <div class="bg-glow glow-3"></div>

  <!-- Hidden YouTube iframe player -->
  <div style="position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; overflow: hidden;">
    <iframe id="ytplayer" width="200" height="200" src="https://www.youtube.com/embed/LRsgqFu5c1o?enablejsapi=1&playsinline=1" title="La Gloria de Dios" allow="autoplay"></iframe>
  </div>

  <div class="container">
    <!-- Hero Section -->
    <header class="hero">
      <div class="cross-icon">
        <svg width="34" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M7 7h10"/>
        </svg>
      </div>

      <p class="hero-kicker serif-title">Mi Primera Comunión</p>
      <h1 class="hero-name serif-title">Loreany Zapata Zapata</h1>

      <div class="photo-arch-wrapper">
        <img class="photo-arch" src="${imageSrc}" alt="Loreany Zapata Zapata - Primera Comunión">
      </div>

      <p class="intro-quote serif-title">
        "Hay momentos inolvidables que se guardan para siempre en el corazón, y quiero compartir contigo uno de los más especiales de mi vida."
      </p>

      <!-- Countdown -->
      <div class="countdown-container" id="countdown">
        <div class="countdown-card">
          <div class="countdown-num" id="days">--</div>
          <div class="countdown-label">Días</div>
        </div>
        <div class="countdown-card">
          <div class="countdown-num" id="hours">--</div>
          <div class="countdown-label">Horas</div>
        </div>
        <div class="countdown-card">
          <div class="countdown-num" id="minutes">--</div>
          <div class="countdown-label">Minutos</div>
        </div>
        <div class="countdown-card">
          <div class="countdown-num" id="seconds">--</div>
          <div class="countdown-label">Segundos</div>
        </div>
      </div>
    </header>

    <!-- Music Player Section -->
    <section class="section-card music-box">
      <div class="music-badge">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
        Música de Fondo
      </div>
      <h2 class="serif-title music-title">La Gloria de Dios</h2>
      <p class="music-artist">Evaluna & Ricardo Montaner</p>

      <p class="music-inspire">
        "Dale play a la música, deja que comience la magia y acompáñame a celebrar este día tan especial."
      </p>

      <button id="togglePlayBtn" class="play-btn" type="button">
        <svg id="playIcon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span id="playText">Reproducir Canción</span>
      </button>
    </section>

    <!-- Event Details Grid -->
    <section class="details-grid">
      <!-- Eucaristía -->
      <article class="detail-card">
        <div class="detail-icon-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 2v20M7 7h10"/>
          </svg>
        </div>
        <h3 class="serif-title detail-card-title">Eucaristía</h3>
        <p class="detail-highlight">8 de diciembre de 2026</p>
        <p class="detail-item"><strong>Hora:</strong> 10:00 a. m.</p>
        <p class="detail-item"><strong>Lugar:</strong> Basílica – Cra 26 Nº 242, Santa Rosa de Osos.</p>
      </article>

      <!-- Recepción -->
      <article class="detail-card">
        <div class="detail-icon-circle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </div>
        <h3 class="serif-title detail-card-title">Recepción</h3>
        <p class="detail-highlight">Celebración Familiar</p>
        <p class="detail-item"><strong>Hora:</strong> 1:30 p. m.</p>
        <p class="detail-item"><strong>Lugar:</strong> Restaurante Tiempos, Santa Rosa de Osos.</p>
        
        <a href="https://maps.app.goo.gl/wNUr5r8tPXLYmGvz6" target="_blank" rel="noopener noreferrer" class="btn-maps">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Ver Ubicación
        </a>
      </article>
    </section>

    <!-- Gift Suggestion Section (Lluvia de Sobres) -->
    <section class="section-card gift-box">
      <div class="envelope-icon">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      <h3 class="serif-title" style="font-size: 1.8rem; margin-bottom: 12px; color: #332E2E;">Lluvia de Sobres</h3>
      <p class="gift-text">
        "Tu compañía en este día tan especial es el mejor regalo para mí, pero si quieres obsequiarme algo, puedes hacerlo mediante lluvia de sobres."
      </p>
    </section>

    <!-- Attendance Information Section -->
    <section class="section-card rsvp-box">
      <p class="rsvp-notice serif-title">Por favor confirmar asistencia.</p>
      <p class="rsvp-subtext">Tu presencia llenará este día de gozo y bendición</p>
    </section>

    <!-- Footer -->
    <footer>
      <p class="footer-thanks serif-title">
        ¡Gracias por ser parte de este momento tan significativo en mi vida! Con amor, Loreany.
      </p>

    </footer>
  </div>

  <!-- Floating Audio Widget -->
  <div id="floatingWidget" class="floating-audio-widget" title="Controlar Música">
    <div id="eqBars" style="display: none; align-items: flex-end; gap: 3px;">
      <span class="eq-bar"></span>
      <span class="eq-bar"></span>
      <span class="eq-bar"></span>
    </div>
    <svg id="floatingIcon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: var(--gold-accent);">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
    <span id="floatingText" style="font-size: 0.82rem; font-weight: 600; color: #443B3B;">Música</span>
  </div>

  <script>
    // YouTube iframe API control
    var isPlaying = false;
    var player = document.getElementById('ytplayer');
    var toggleBtn = document.getElementById('togglePlayBtn');
    var playText = document.getElementById('playText');
    var playIcon = document.getElementById('playIcon');
    var floatingWidget = document.getElementById('floatingWidget');
    var floatingText = document.getElementById('floatingText');
    var floatingIcon = document.getElementById('floatingIcon');
    var eqBars = document.getElementById('eqBars');

    function sendYtCommand(action, value) {
      if (!player || !player.contentWindow) return;
      player.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: action,
        args: value || []
      }), '*');
    }

    function toggleMusic() {
      if (!isPlaying) {
        sendYtCommand('playVideo');
        isPlaying = true;
        updateUI(true);
      } else {
        sendYtCommand('pauseVideo');
        isPlaying = false;
        updateUI(false);
      }
    }

    function updateUI(playing) {
      if (playing) {
        playText.textContent = 'Pausar Canción';
        playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
        floatingText.textContent = 'Sonando: La Gloria de Dios';
        floatingIcon.style.display = 'none';
        eqBars.style.display = 'inline-flex';
      } else {
        playText.textContent = 'Reproducir Canción';
        playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
        floatingText.textContent = 'Música';
        floatingIcon.style.display = 'inline-block';
        floatingIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
        eqBars.style.display = 'none';
      }
    }

    toggleBtn.addEventListener('click', toggleMusic);
    floatingWidget.addEventListener('click', toggleMusic);

    // Countdown Timer calculation
    var targetDate = new Date('2026-12-08T10:00:00-05:00').getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var distance = targetDate - now;

      if (distance < 0) {
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
      }

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerText = days < 10 ? '0' + days : days;
      document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  </script>
</body>
</html>`;
}

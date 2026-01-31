/* ==========================================
   1. CONTROLE DO MENU GAVETA
   ========================================== */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    // Certifique-se de que é 'active' para bater com o CSS
    navMenu.classList.toggle('active'); 
}

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('active');
    });
});

/* ==========================================
   2. EFEITO DE SCROLL NO HEADER
   ========================================== */
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.95)";
            header.style.padding = "20px 5%";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.8)";
            header.style.padding = "30px 5%";
        }
    }
});

/* ==========================================
   3. FUNÇÕES DO FORMULÁRIO (CONTRATAR)
   ========================================== */
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Máscara de WhatsApp ---
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    // --- Envio do Formulário ---
    const hireForm = document.getElementById('hireForm');
    if (hireForm) {
        hireForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.querySelector('.btn-submit');
            
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = "ENVIANDO...";
                btn.style.pointerEvents = "none"; 

                // Simulação de envio (Página 6 do PDF)
                setTimeout(() => {
                    btn.innerHTML = "SOLICITAÇÃO ENVIADA!";
                    btn.style.backgroundColor = "#2ecc71"; // Verde Sucesso
                    
                    hireForm.reset(); 

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.backgroundColor = ""; // Volta para o Azul Avel
                        btn.style.pointerEvents = "auto";
                    }, 4000);
                }, 1500);
            }
        });
    }

    /* ==========================================
       4. EFEITO DE DIGITAÇÃO (OPCIONAL)
       ========================================== */
    const textElement = document.querySelector('.type-text');
    if (textElement) {
        const words = ["VENDAS", "RECONHECIMENTO", "PUBLICIDADE"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex--);
            } else {
                textElement.textContent = currentWord.substring(0, charIndex++);
            }

            if (!isDeleting && charIndex > currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else if (isDeleting && charIndex < 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 500);
            } else {
                let speed = isDeleting ? 70 : 120;
                setTimeout(typeEffect, speed);
            }
        }
        typeEffect();
    }
});
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; // Distância para ativar o efeito

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Executa uma vez ao carregar para caso a seção já esteja visível
reveal();
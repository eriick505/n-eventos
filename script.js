//função de dar scroll para seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

//botoes da barra de navegaç~cao
const buttons = document.querySelectorAll('.nav-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('.nav-button');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navButtons.forEach(btn => btn.classList.remove('active'));
            navButtons[index].classList.add('active');
        }
    });
});

//botoes das perguntas
document.querySelectorAll('.pergunta-fixa').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
        
        document.querySelectorAll('.perguntas').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

//botãozinhos do portfolio
document.addEventListener('DOMContentLoaded', function() {
    const botoesCategoria = document.querySelectorAll('.categoria-btn');
    
    botoesCategoria.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesCategoria.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            document.querySelectorAll('.galeria-portfolio').forEach(galeria => {
                galeria.style.display = 'none';
            });
            
            const categoria = this.getAttribute('data-categoria');
            document.getElementById(`galeria-${categoria}`).style.display = 'grid';
        });
    });
});

//fotos do portfolio loop:
const galeriaCasamento = document.getElementById('galeria-casamento')
const galeriaAniversario = document.getElementById('galeria-aniversario');
const galeriaCorporativo = document.getElementById('galeria-corporativo');
const galeriaDiversos = document.getElementById('galeria-diversos');
    
for (let i = 1; i <= 20; i++) {
    const itemHTML = `
        <div class="item-portfolio">
            <img src="ImagensPortfolio/Casamento${i}.jpg" alt="Casamento ${i}">
        </div>
    `;
        
    galeriaCasamento.innerHTML += itemHTML;
}

for (let i = 1; i <= 20; i++) {
    const itemHTML = `
        <div class="item-portfolio">
            <img src="ImagensPortfolio/Aniversario${i}.jpg" alt="Aniversário ${i}">
        </div>
    `;
        
    galeriaAniversario.innerHTML += itemHTML;
}

for (let i = 1; i <= 20; i++) {
    const itemHTML = `
        <div class="item-portfolio">
            <img src="ImagensPortfolio/Corporativo${i}.jpg" alt="Corporativo ${i}">
        </div>
    `;
        
    galeriaCorporativo.innerHTML += itemHTML;
}

for (let i = 1; i <= 20; i++) {
    const itemHTML = `
        <div class="item-portfolio">
            <img src="ImagensPortfolio/Diversos${i}.jpg" alt="Diversos ${i}">
        </div>
    `;
        
    galeriaDiversos.innerHTML += itemHTML;
}
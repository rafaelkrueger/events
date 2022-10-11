import React from 'react'

function Footer() {
  return (
    <>
        <div class="container-fluid" id="footer-style">
            <div class="row" id="footer-content">
            <div class="col">
                    <h2 class="footer-title">Mapa do Site</h2>
                    <hr/>
                    <p>Home</p>
                    <p>Eventos</p>
                    <p>Criar Eventos</p>
                    <p>Login</p>
                    <p>Cadastro</p>
                    </div>
                <div class="col">
                    <h2 class="footer-title">Sobre Nós</h2>
                    <hr/>
                    <p>Política de reembolso</p><p>Política de privacidade</p>
                    <p>Regras de conduta</p>
                    <p>EULA</p>
                    </div>
                    <div class="col">
                    <h2 class="footer-title">Suporte</h2>
                    <hr/>
                    <p>Central de Suporte</p>
                    <p>WhatsApp</p>
                    </div>
                </div>
                <br/>
            <br/>
        </div>        
    </>
  )
}

export default Footer
const Footer = () => <footer className="page-footer font-small blue pt-4" style={{backgroundColor : 'rgb(238, 64, 65)'}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row ">
            <div className="col-md-6 mt-md-0">
                <h1 className="text-uppercase">SKY</h1>
                <p className="mx-5" style={{fontSize : '0.9em'}}>Il sito www.sky.it ("Sito") è di proprietà esclusiva di Sky Italia S.r.l., con sede in Milano, Via Monte Penice 7 (di seguito "Sky"). L'accesso al, e la navigazione sul, Sito, da parte dei singoli utenti, sono gratuiti e sono subordinati all'accettazione dei termini e delle condizioni delle presenti note legali. L'utente prende atto e comunque conviene: (i) che Sky si riserva il diritto di modificare i termini e le condizioni delle presenti note legali in ogni momento comunicando le modifiche agli utenti tramite avviso generale apposto sul Sito o tramite un collegamento a tale avviso e (ii) che, dal momento di ciascun avviso generale ora detto, le note legali come modificate costituiranno i nuovi termini e condizioni al quale saranno subordinati l’accesso al, e la navigazione sul, Sito (le presenti note legali, come via via modificate, di seguito, le "Note Legali".)</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 d-flex flex-column align-items-start mt-3">
                <h5 className="">Servizi:</h5>
                <ul className="list-unstyled d-flex flex-column align-items-start">
                    <li> SKY TV</li>
                    <li> SKY APPS</li>
                    <li> NOW</li>
                    <li> SKY BAR</li>
                    <li> SPAZI SKY</li>
                    <li> PROGRAMMI</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 d-flex flex-column align-items-start mt-3">
                <h5 className="">Note legali:</h5>
                <ul className="list-unstyled d-flex flex-column align-items-start">
                    <li>GESTIONE COOKIE</li>
                    <li>COOKIE POLICY</li>
                    <li>SECURITY AND PRIVACY</li>
                    <li>DICHIARAZIONE DI ACCESSIBILITA</li>
                    <li>OFFERTA SKY MEDIA</li>
                    <li>CORPORATE</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: Epicode
    </div>

</footer>

export default Footer
const Footer = () => {
    return (
        <footer className="footer">
            <div className="bg-shape-style"></div>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-area text-center">
                        <div className="footer-logo">
                            <a href="index.html"><img src="assets/images/header/footer/01.png" alt="footer-logo" /></a>
                        </div>
                        <div className="scocial-media">
                            <a href="index-3.html#" className="facebook"><i className="icofont-facebook"></i></a>
                            <a href="index-3.html#" className="twitter"><i className="icofont-twitter"></i></a>
                            <a href="index-3.html#" className="linkedin"><i className="icofont-linkedin"></i></a>
                            <a href="index-3.html#" className="vimeo"><i className="icofont-vimeo"></i></a>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><a href="index-3.html#">ホーム</a></li>
                                <li><a href="index-3.html#">使い方</a></li>
                                <li><a href="index-3.html#">メニュー</a></li>
                                <li><a href="index-3.html#">シェフ</a></li>
                                <li><a href="index-3.html#">レシピ</a></li>
                                <li><a href="index-3.html#">お問い合わせ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <p>&copy; 2021 <a href="index-3.html#"><span>メズバン</span></a> デザイン by <a href="index-3.html#"><span>FoxCoders</span></a>.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

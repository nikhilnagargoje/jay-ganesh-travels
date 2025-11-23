function QrSection() {
  return (
    <section className="qr-section">
      <h2 className="section-title">Find Us on Google</h2>

      <div className="qr-flex">

        <div className="qr-box">
          <h3>Google Location</h3>
          <img src="/image/locationqr.jpg" className="qr-img" />
          <a href="https://maps.app.goo.gl/39GTBYFs5L1fyFk28" target="_blank" className="btn-main">
            Open Location
          </a>
        </div>

        <div className="qr-box">
          <h3>Google Reviews</h3>
          <img src="/image/review.jpg" className="qr-img" />
          <a href="https://g.page/r/CbfFx-aGZ6W8EBM/review" target="_blank" className="btn-main">
            Rate Us
          </a>
        </div>

      </div>

    </section>
  );
}

export default QrSection;
function DailyTravels() {
  return (
    <section className="daily">
      <h2 className="section-title">Daily Bus Service</h2>

      <div className="daily-box">
        <h3>Pune → Pandharpur → Mangalwedha → Hunnur</h3>
        <p>Night 11:00 PM | Morning 6:00 AM</p>

        <h3>Pune → Solapur → Omerga</h3>
        <p>Night 11:45 PM | Morning 6:30 AM</p>

        <h3>Omerga → Solapur → Pune</h3>
        <p>Night 09:00 PM | Morning 5:00 AM</p>

        <h3>Hunnur → Mangalwedha → Pandharpur → Pune(nigdi)</h3>
        <p>Afternoon 1:00 PM | Night 9:00 PM</p>

        <a className="btn-main mt-3"
           href="https://www.jayganeshbus.com"
           target="_blank">
          Book Daily Travels
        </a>
      </div>
    </section>
  );
}

export default DailyTravels;
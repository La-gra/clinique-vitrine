export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">🏥 Clinique Santé Plus</h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#equipe" className="hover:text-blue-600 transition">Équipe</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
          <a href="#contact" className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
            Rendez-vous
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1 rounded-full mb-6 tracking-wide uppercase">
            Clinique moderne — Libreville, Gabon
          </span>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Votre santé,<br />notre priorité
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
            Une clinique moderne au service de votre bien-être. Consultations, soins et suivi personnalisé 7j/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-lg">
              Prendre rendez-vous
            </a>
            <a href="#services" className="border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Nos services →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { chiffre: "15+", label: "Années d'expérience" },
            { chiffre: "5000+", label: "Patients traités" },
            { chiffre: "24h/24", label: "Service urgences" },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">{s.chiffre}</div>
              <div className="text-blue-200 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Ce que nous offrons</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">Nos Services Médicaux</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🩺", titre: "Consultation Générale", desc: "Prise en charge complète par nos médecins généralistes expérimentés." },
              { icon: "👶", titre: "Pédiatrie", desc: "Suivi médical dédié aux nourrissons et enfants en bas âge." },
              { icon: "❤️", titre: "Cardiologie", desc: "Diagnostic et traitement des maladies cardiovasculaires." },
              { icon: "🤰", titre: "Gynécologie", desc: "Suivi de grossesse et santé féminine complète." },
              { icon: "🦷", titre: "Dentisterie", desc: "Soins dentaires modernes pour toute la famille." },
              { icon: "🚑", titre: "Urgences 24h/24", desc: "Service d'urgence disponible jour et nuit, 7j/7." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{s.titre}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Nos experts</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">Notre Équipe Médicale</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { nom: "Dr. Marie Dupont", role: "Médecin Généraliste", exp: "15 ans d'expérience", emoji: "👩‍⚕️" },
              { nom: "Dr. Jean Obame", role: "Cardiologue", exp: "12 ans d'expérience", emoji: "👨‍⚕️" },
              { nom: "Dr. Sophie Mba", role: "Pédiatre", exp: "10 ans d'expérience", emoji: "👩‍⚕️" },
            ].map((d, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-md group-hover:scale-105 transition">
                  {d.emoji}
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{d.nom}</h4>
                <p className="text-blue-600 text-sm font-medium">{d.role}</p>
                <p className="text-gray-400 text-xs mt-1">{d.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Nous écrire</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">Contactez-nous</h3>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nom complet *</label>
                <input type="text" placeholder="Jean Dupont"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input type="email" placeholder="jean@exemple.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone</label>
                <input type="tel" placeholder="+241 07 00 00 00"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service souhaité</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition">
                  <option value="">Choisir un service</option>
                  <option>Consultation générale</option>
                  <option>Pédiatrie</option>
                  <option>Cardiologie</option>
                  <option>Gynécologie</option>
                  <option>Urgences</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
              <textarea rows={4} placeholder="Décrivez votre demande..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none transition" />
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition shadow-md">
              Envoyer le message →
            </button>
          </div>

          {/* Infos contact */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[
              { icon: "📍", label: "Libreville, Gabon" },
              { icon: "📞", label: "+241 07 00 00 00" },
              { icon: "🕐", label: "Lun–Sam 7h–20h" },
            ].map((info, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-1">{info.icon}</div>
                <p className="text-gray-600 text-xs font-medium">{info.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <h4 className="font-bold text-lg mb-1">🏥 Clinique Santé Plus</h4>
        <p className="text-gray-400 text-sm">© 2026 — Tous droits réservés</p>
        <p className="text-gray-500 text-xs mt-2">📍 Libreville, Gabon &nbsp;|&nbsp; 📞 +241 07 00 00 00</p>
      </footer>

    </main>
  );
}
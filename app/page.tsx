export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800">
      <section className="bg-emerald-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black">Ahfad Al-Khair</h1>
          <p className="mt-6 text-xl text-emerald-100">
            Asociación Humanitaria y Solidaria
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-white text-emerald-900 px-6 py-3 rounded-2xl font-semibold">
              Donar
            </button>

            <button className="border border-white px-6 py-3 rounded-2xl">
              Contactar
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold">Nuestra Misión</h2>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Trabajamos para apoyar a familias vulnerables mediante proyectos sociales,
          educativos y campañas solidarias.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white rounded-3xl p-8 shadow border">
            <h3 className="text-2xl font-bold">Ayuda Humanitaria</h3>
            <p className="mt-4 text-slate-600">
              Distribución de alimentos, ropa y apoyo social.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow border">
            <h3 className="text-2xl font-bold">Educación</h3>
            <p className="mt-4 text-slate-600">
              Programas educativos y talleres comunitarios.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow border">
            <h3 className="text-2xl font-bold">Voluntariado</h3>
            <p className="mt-4 text-slate-600">
              Red activa de voluntarios y colaboradores.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-8 text-center text-slate-500">
        © 2026 Ahfad Al-Khair
      </footer>
    </main>
  )
}

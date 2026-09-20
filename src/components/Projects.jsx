// src/components/Projects.jsx

// Lista dos seus principais projetos comerciais/prontos
const portfolioProjects = [
  {
    id: 1,
    title: "ProtecGERA",
    description: "Website comercial desenvolvido com Next.js e Tailwind CSS, otimizado para performance e indexação no Google.",
    category: "Site Comercial",
    // URL do site real para gerar o preview e o botão de acesso
    url: "https://protecgera.com.br", 
    // Usamos um serviço gratuito que tira print da URL informada para usar como preview
    previewUrl: "https://api.microlink.io/?url=https://protecgera.com.br&screenshot=true&meta=false&embed=screenshot.url",
    techs: ["Tailwind CSS", "Next.js"]
  },
  // Você pode adicionar mais projetos aqui facilmente no futuro:
  /*
  {
    id: 2,
    title: "Outro Projeto",
    description: "Descrição do seu outro sistema ou site.",
    category: "Aplicação Web",
    url: "https://seu-outro-site.com.br",
    previewUrl: "https://api.microlink.io/?url=https://seu-outro-site.com.br&screenshot=true&meta=false&embed=screenshot.url",
    techs: ["Next.js", "Tailwind CSS"]
  }
  */
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Projetos <span className="text-blue-500">Em Destaque</span>
        </h2>
        <p className="text-slate-400">Soluções web profissionais e sistemas desenvolvidos e entregues.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
          >
            {/* Bloco de Preview do Site */}
            <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
              <img 
                src={project.previewUrl} 
                alt={`Preview de ${project.title}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <span className="absolute top-3 right-3 text-xs px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-800 rounded-full font-medium">
                {project.category}
              </span>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6 flex flex-col grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div>
                {/* Tecnologias Utilizadas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, index) => (
                    <span key={index} className="text-xs px-2.5 py-1 bg-blue-950/60 text-blue-400 border border-blue-900/40 rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botão de Acesso */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Acessar Site Oficial 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
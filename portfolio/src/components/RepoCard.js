export default function RepoCard({ repo }) {
  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-indigo-500 transition-colors group">
      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-indigo-400">
        {repo.name}
      </h3>
      
      <p className="text-zinc-400 text-sm my-3 line-clamp-2">
        {repo.description || "Projeto sem descrição."}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-xs font-mono text-zinc-500">
          {repo.language || "Outros"}
        </span>
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-indigo-400 hover:underline"
        >
          Acessar Repositório →
        </a>
      </div>
    </div>
  );
}
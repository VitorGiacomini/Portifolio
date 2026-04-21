import { getRepos } from '@/lib/github';
import RepoCard from '@/components/RepoCard';

export default async function Home() {
  const repos = await getRepos();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Meu Portfólio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </main>
  );
}
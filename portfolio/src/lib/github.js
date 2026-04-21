export async function getRepos() {
    const username = 'VitorGiacomini';
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
        next: { revalidate: 3600} 
    });
    if(!response.ok){
        console.error('Erro ao buscar repositórios do GitHub:', response.statusText);
        return [];
    }
    return response.json()
    }

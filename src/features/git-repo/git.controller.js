
import fetch from "node-fetch"
import ApplicationError from "../../error-handler/appError.js";
export default class GitController{

    async getRepoInfo(req,res){
         const GITHUB_USERNAME =  (req.query.username) || 'beagentcoder';
         const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

         try {
            const response=await fetch(GITHUB_API_URL)
            if(!response.ok){
                throw new ApplicationError(`GitHub API returned status ${response.status}`,400)
            }
            const repos = await response.json();
            const formattedRepos = repos.map(repo => ({
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                language: repo.language,
                stars: repo.stargazers_count,
            }));
            const starredRepos = formattedRepos.filter(repo => repo.stars > 0);
            res.json(starredRepos);     
    
         
     
    }
    catch(err){
        throw new ApplicationError("Something Went Wrong!!!",500)

    }
    
}
}
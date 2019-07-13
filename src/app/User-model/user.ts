export class User {
    constructor(
        public location: string,
        public name: string,
        public avatar_url: string,
        public company: string,
        public login: string,
        public bio: string,
        public public_repos: number,
        public public_gists: number,
        public followers: number,
        public following: number,
    ) { }
}


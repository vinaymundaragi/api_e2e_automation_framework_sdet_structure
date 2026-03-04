import env from '../../config/envLoader.js';

export class AuthClient{
    constructor(request){
        this.request = request;
    }

    async generateToken(request) {
    const response = await this.request.post('/auth', {
        data: {
            username: env.username,
            password: env.password
        }
    });

    if(response.status() !== 200){
        throw new Error("Token generation failed");
    }


    const body = await response.json();
    return body.token;
    }
}

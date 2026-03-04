export class BookingClient{
    constructor(request){
        this.request = request;
    }

    async createBooking(payload){
        return this.request.post('/booking', {data : payload});
    }

    async getBookingId(id){
        return this.request.get(`/booking/${id}`);
    }

    async updateBooking(id, token, payload){
        return this.request.put(`/booking/${id}`, {
            headers : {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${token}`
            },
            data: payload
        });
    }

    async deleteBooking(id, token){
        return this.request.delete(`/booking/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${token}`
            }
        });
    }
}
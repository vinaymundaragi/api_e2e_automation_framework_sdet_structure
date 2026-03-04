import { test, expect } from '../../fixtures/apiFixture';
import { createBookingPayload } from '../../api/testData/bookingData';
import { validateBookingResponse } from '../../api/utils/responseValidator';
import { updateBookingPayload } from '../../api/testData/updateBookingData';
import { validateSchema } from '../../api/utils/schemaValidator';
import { bookingSchema } from '../../api/schemas/bookingschema';

test('Booking CRUD Flow', async ({ apiClients }) => {

    const {bookingClient, token} = apiClients;

    //Create a Booking
    const createRes = await bookingClient.createBooking(createBookingPayload);
    expect(createRes.status()).toBe(200);

    //Get the Booking ID
    const createBody = await createRes.json();
    const bookingId = createBody.bookingid;

    //Update Booking
    const updateRes = await bookingClient.updateBooking(bookingId, token, updateBookingPayload);

    expect(updateRes.status()).toBe(200);

    // Validate
    const getRes = await bookingClient.getBookingId(bookingId);
    const getBody = await getRes.json();

    validateBookingResponse(getBody, updateBookingPayload);
    validateSchema(bookingSchema, getBody);

    //Delete
    const deleteRes = await bookingClient.deleteBooking(bookingId, token);
    expect(deleteRes.status()).toBe(201);
});
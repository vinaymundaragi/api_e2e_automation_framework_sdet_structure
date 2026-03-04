import { expect } from '@playwright/test';

export function validateBookingResponse(body, expected) {
    expect(body.firstname).toBe(expected.firstname);
    expect(body.totalprice).toBe(expected.totalprice);
    expect(body.depositpaid).toBe(expected.depositpaid);
}

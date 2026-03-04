import {test as base} from '@playwright/test';
import { BookingClient } from '../api/clients/bookingClient';
import { AuthClient } from '../api/clients/authClient';

export const test = base.extend({
    apiClients: async ({request}, use) => {
        const authClient = new AuthClient(request);
        const bookingClient = new BookingClient(request);

        const token = await authClient.generateToken();

        await use({
            bookingClient,
            token
        });

    }
});

export {expect} from '@playwright/test';
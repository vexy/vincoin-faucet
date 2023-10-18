import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
        // console.log(request);

        const form = await request.formData();
        const pid = form.get('pid');
        const wallet = form.get('wallet');

		console.log("Form is submitted with following data");
        console.debug(pid);
        console.debug(wallet);

        return { success: true };
	},
} satisfies Actions;
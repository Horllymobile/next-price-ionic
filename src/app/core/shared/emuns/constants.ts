/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from 'src/environments/environment';

export const Constants = {
  USER: {
    TOKEN: 'TOKEN',
    USER_PROFILE: 'USER',
    AUTH_URL: `${environment.API_BASE_URL}/auth`,
  },
};

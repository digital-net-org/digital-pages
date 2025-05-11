import type { RequestCallbacks } from '@digital-lib/react-digital-client';

export interface FrameConfigCallbacks {
    onError?: RequestCallbacks<any>['onError'];
    onSuccess?: () => void;
}

import { createContext, useContext } from 'react';

export type RouteTrackContextType = {
    routeTrack: string;
    setRouteTrack: (routeTrack: string) => void;
}

export const RouteTrackContext = createContext<RouteTrackContextType>({ routeTrack: '/', setRouteTrack: routeTrack => console.warn('no theme provider')});
export const useRouteTrack = () => useContext(RouteTrackContext);

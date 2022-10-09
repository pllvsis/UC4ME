import { Geolocation } from '@capacitor/geolocation';

export async function getCurrentLocation() {
    return await Geolocation.getCurrentPosition();
}
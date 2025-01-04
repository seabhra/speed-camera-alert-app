// utils.ts

export function calculateSpeed(distance: number, time: number): number {
    return distance / time;
}

export function formatSpeed(speed: number): string {
    return `${speed.toFixed(2)} km/h`;
}
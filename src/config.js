export const API_KEY = 'd1d49e0b77dcd2bfae34f164080aa3ce'

export const BASE_URL = 'https://api.themoviedb.org/3'

export const IMG_URL = 'https://image.tmdb.org/t/p/original'

export function convertToYear(date) {
    const convertToYear = new Date (date)
    return convertToYear.getFullYear()
}
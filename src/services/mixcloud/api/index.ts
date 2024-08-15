const AEROSTATBG_HOST = 'https://aerostatbg.ru';

export const fetchReleases = (itemsPerPage: number = 10, page: number = 0) =>
    fetch(
        `${AEROSTATBG_HOST}/api/releases/?_format=json&items_per_page=${itemsPerPage}&page=${page}`
    ).then((data) => data.json());

export const fetchReleaseById = (id: string) =>
    fetch(`${AEROSTATBG_HOST}/api/release/${id}?_format=json`).then((data) =>
        data.json()
    );

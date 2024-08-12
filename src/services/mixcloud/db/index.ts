import { releases } from 'services/mixcloud/db/data';

export const fetchReleases = () => Promise.resolve(releases);

export const fetchReleaseById = (id: string) =>
    fetch(`https://aerostatbg.ru/api/release/${id}?_format=json`).then((data) =>
        data.json()
    );

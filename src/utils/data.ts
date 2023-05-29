interface Profit {
    day: string,
    money: number
  }
const getData = async () => {
    const response = await fetch('http://localhost:5173/mock/db.json').then((res) => {
        return res.json();
    });
    if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    };
// export const mockData = async () => {
//     await getData().map(p => {
//         p.Date = new Date(p.day);
//         return p;
//     })
// }
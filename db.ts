const data = () => [
        {
            "Timestamp": "2023-04-01T00:00:00.000",
            "money": 2500
        },
        {
            "Timestamp": "2023-04-02T00:00:00.000",
            "money": 2200
        },
        {
            "Timestamp": "2023-04-03T00:00:00.000",
            "money": 1850
        },
        {
            "Timestamp": "2023-04-04T00:00:00.000",
            "money": 3580
        },
        {
            "Timestamp": "2023-04-05T00:00:00.000",
            "money": 3290
        },
        {
            "Timestamp": "2023-04-06T00:00:00.000",
            "money": 2630
        },
        {
            "Timestamp": "2023-04-07T00:00:00.000",
            "money": 0
        },
        {
            "Timestamp": "2023-04-08T00:00:00.000",
            "money": 2700
        },
        {
            "Timestamp": "2023-04-09T00:00:00.000",
            "money": 1290
        },
        {
            "Timestamp": "2023-04-10T00:00:00.000",
            "money": 2990
        },

        {
            "Timestamp": "2023-04-11T00:00:00.000",
            "money": 950
        },
        {
            "Timestamp": "2023-04-12T00:00:00.000",
            "money": 5260
        },
        {
            "Timestamp": "2023-04-13T00:00:00.000",
            "money": 4800
        },
        {
            "Timestamp": "2023-04-14T00:00:00.000",
            "money": 0
        },
        {
            "Timestamp": "2023-04-15T00:00:00.000",
            "money": 5300
        },
        {
            "Timestamp": "2023-04-16T00:00:00.000",
            "money": 7040
        },
        {
            "Timestamp": "2023-04-17T00:00:00.000",
            "money": 6500
        },
        {
            "Timestamp": "2023-04-18T00:00:00.000",
            "money": 5850
        },
        {
            "Timestamp": "2023-04-19T00:00:00.000",
            "money": 3980
        },
        {
            "Timestamp": "2023-04-20T00:00:00.000",
            "money": 3500
        },
        {
            "Timestamp": "2023-04-21T00:00:00.000",
            "money": 0
        },
        {
            "Timestamp": "2023-04-22T00:00:00.000",
            "money": 5020
        },
        {
            "Timestamp": "2023-04-23T00:00:00.000",
            "money": 5050
        },
        {
            "Timestamp": "2023-04-24T00:00:00.000",
            "money": 4400
        },
        {
            "Timestamp": "2023-04-25T00:00:00.000",
            "money": 4145
        },
        {
            "Timestamp": "2023-04-26T00:00:00.000",
            "money": 3920
        },
        {
            "Timestamp": "2023-04-27T00:00:00.000",
            "money": 3800
        },
        {
            "Timestamp": "2023-04-28T00:00:00.000",
            "money": 0
        },
        {
            "Timestamp": "2023-04-29T00:00:00.000",
            "money": 2870
        },
        {
            "Timestamp": "2023-04-30T00:00:00.000",
            "money": 1450
        }
    ]
export const mockData = () =>
    data().map(p => {
      p.Date = new Date(p.Timestamp);
      return p;
    }
  );
  
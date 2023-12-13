export const users = [
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User1',
    email: 'user1@nextmail.com',
    password: '123456',
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a64542a',
    name: 'User2',
    email: 'user2@nextmail.com',
    password: '123456w',
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a64342a',
    name: 'User3',
    email: 'user3@nextmail.com',
    password: '12345d6',
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a64462a',
    name: 'User 4',
    email: 'user4@nextmail.com',
    password: '12345g6',
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a64422a',
    name: 'User 5',
    email: 'user5@nextmail.com',
    password: '1234g56',
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a64425a',
    name: 'User6',
    email: 'user6@nextmail.com',
    password: '1234f56',
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a64432a',
    name: 'User7',
    email: 'user7@nextmail.com',
    password: '12345a6',
  },
];

export const customers = [
    {
      customer_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      customer_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
    },
    {
      customer_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      image_url: '/customers/hector-simpson.png',
    },
    {
      customer_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
      name: 'Steven Tey',
      email: 'steven@tey.com',
      image_url: '/customers/steven-tey.png',
    },
    {
      customer_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
      name: 'Steph Dietz',
      email: 'steph@dietz.com',
      image_url: '/customers/steph-dietz.png',
    },
    {
      customer_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: '/customers/michael-novotny.png',
    },
    {
      customer_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      image_url: '/customers/evil-rabbit.png',
    },
    {
      customer_id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
      name: 'Emil Kowalski',
      email: 'emil@kowalski.com',
      image_url: '/customers/emil-kowalski.png',
    },
    {
      customer_id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: '/customers/amy-burns.png',
    },
    {
      customer_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: '/customers/balazs-orban.png',
    },
  ];
  export const invoices = [
    {
      customer_id: customers[0].customer_id,
      amount: 15795,
      status: 'pending',
      date: '2022-12-06',
    },
    {
      customer_id: customers[1].customer_id,
      amount: 20348,
      status: 'pending',
      date: '2022-11-14',
    },
    {
      customer_id: customers[4].customer_id,
      amount: 3040,
      status: 'paid',
      date: '2022-10-29',
    },
    {
      customer_id: customers[3].customer_id,
      amount: 44800,
      status: 'paid',
      date: '2023-09-10',
    },
    {
      customer_id: customers[5].customer_id,
      amount: 34577,
      status: 'pending',
      date: '2023-08-05',
    },
    {
      customer_id: customers[7].customer_id,
      amount: 54246,
      status: 'pending',
      date: '2023-07-16',
    },
    {
      customer_id: customers[6].customer_id,
      amount: 666,
      status: 'pending',
      date: '2023-06-27',
    },
    {
      customer_id: customers[3].customer_id,
      amount: 32545,
      status: 'paid',
      date: '2023-06-09',
    },
    {
      customer_id: customers[4].customer_id,
      amount: 1250,
      status: 'paid',
      date: '2023-06-17',
    },
    {
      customer_id: customers[5].customer_id,
      amount: 8546,
      status: 'paid',
      date: '2023-06-07',
    },
    {
      customer_id: customers[1].customer_id,
      amount: 500,
      status: 'paid',
      date: '2023-08-19',
    },
    {
      customer_id: customers[5].customer_id,
      amount: 8945,
      status: 'paid',
      date: '2023-06-03',
    },
    {
      customer_id: customers[2].customer_id,
      amount: 8945,
      status: 'paid',
      date: '2023-06-18',
    },
    {
      customer_id: customers[0].customer_id,
      amount: 8945,
      status: 'paid',
      date: '2023-10-04',
    },
    {
      customer_id: customers[2].customer_id,
      amount: 1000,
      status: 'paid',
      date: '2022-06-05',
    },
  ];
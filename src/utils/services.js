export const BaseUrl = 'https://quiz-app-ebon-nu.vercel.app';
// export const BaseUrl = 'localhost:4000';

export const getAllData = async () => {
  const requiredOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const result = await fetch(
    `${BaseUrl}/generalKnowledge/getAllBills?page=1&limit=100`,
    requiredOption,
  );
  return result.json();
};

export const getAllFirstYear = async () => {
  const requiredOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const result = await fetch(
    `${BaseUrl}/firstYear/getAllBills?page=1&limit=300`,
    requiredOption,
  );
  return result.json();
};

export const getAllSecondYear = async () => {
  const requiredOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const result = await fetch(
    `${BaseUrl}/secondYear/getAllBills?page=1&limit=300`,
    requiredOption,
  );
  return result.json();
};

export const getAllMatric = async () => {
  const requiredOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const result = await fetch(
    `${BaseUrl}/matric/getAllBills?page=1&limit=300`,
    requiredOption,
  );
  return result.json();
};




import React from 'react';

const RestApiTest = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/get/company/kospi');
      const resJson = await response.json(response);
      console.log(resJson);
      resJson.forEach((element) => {
        setData((prev) => [...prev, element.name]);
      });
      console.log(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>TEST API 정보</h1>
      <div>
        {loading ? (
          'loading...'
        ) : (
          <p>
            {data.map((idx, key) => (
              <div key={idx + key}>{idx}</div>
            ))}
          </p>
        )}
      </div>
    </>
  );
};
export default RestApiTest;

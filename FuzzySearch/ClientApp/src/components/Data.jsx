const Data = ({ data }) => {
  return (
    <>
      <br />
      <table className="table caption-top" style={{ textAlign: "center" }}>
        <caption>
          <h4>List of users</h4>
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Data;

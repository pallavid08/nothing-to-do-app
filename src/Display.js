const Display = ({ item1, style }) => {
  return (
    <div className="display-container">
      <p className="item1">{item1}</p>
      <div>
        <p className="text-refresh">Click to Refresh</p>
      </div>
    </div>
  );
};
export default Display;

function Spinner() {
  const spinner = {
    width: "60px",
    height: "60px",
    border: "8px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "8px solid #5BB318",
    animation: "spin 1.5s linear infinite",
  };
  const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
  return (
    <div className="flex-fd-c-ai-c w-100">
      <style>{keyframes}</style>
      <div style={spinner}></div>
    </div>
  );
}

export default Spinner;

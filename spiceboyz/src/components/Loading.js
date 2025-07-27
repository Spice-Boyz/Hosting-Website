import './Loading.css';

function Loading() {
  const logoUrl = `${process.env.PUBLIC_URL}/assets/SPICEBOYZCHROME.png`;

  return (
    <div className="loading-container">
      <div
        className="logo-spinner"
        style={{ backgroundImage: `url(${logoUrl})` }}
      />
    </div>
  );
}

export default Loading;
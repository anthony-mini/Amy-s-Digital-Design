export default function Button() {
  function handleClick() {
    if (pathname === '/') {
      window.location.reload();
    } else {
      window.location.assign('/');
    }
  }

  const pathname = window.location.pathname;

  return pathname === '/' ? (
    <div>
      <button onClick={handleClick}>Free Consultation</button>
    </div>
  ) : (
    <div>
      <button onClick={handleClick}>Homepage</button>
    </div>
  );
}

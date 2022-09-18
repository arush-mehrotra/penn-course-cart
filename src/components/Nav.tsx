// Smooth scrolls to the bottom of the page when referenced

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

const Nav = () => (
    <div style={{
      width: '100%',
      padding: '0 1rem',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <h2 style = {{margin: '0', marginBottom: '25px', marginTop: '25px'}}>Penn Course Cart</h2>
        <button className="button-85" onClick={handleScroll} style = {{display: 'block', marginLeft: 'auto', marginTop: '25px', marginBottom: '25px'}}>View Cart</button>
    </div>
)

export default Nav;
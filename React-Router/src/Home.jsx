function Home(){

    const nav=useNavigate()
    function handle(){
        nav("/about")
    }
    return(
        <>

        <h1>Home</h1>
        <button onclick={handle}>
            click to about page
        </button>
        </>
    )
}
export default Home
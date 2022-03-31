import './App.css';
import med1 from './images/med1.jpg'

const nomeMeds = {
    med1: "José da Silva",
    med2: "Maria da Silva",
    med3: "Jaqueline da Silva"
}

function getWrapperStyle() {
    return {
        fontfamily: 'Times New Roman',
        textAlign: 'center',
        backgroundColor: '#EEEEEE',
        border: '1px solid black',
        borderRadius: '7px'
    };
}

function App() {
    return (
        <div style={getWrapperStyle()}>
            <h4 id='title'>Profissionais de saúde</h4>
            <div style={{border: '1px solid #e6e6e6', borderRadius: '10px', margin: '10px' }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <div className='doctor'>
                        <img src={med1} className='image'/><br/>
                        <p className='doctor-name'>{nomeMeds.med1}s</p>
                    </div>
                    <div className='doctor'>
                        <img src='/med2.jpg' className='image'/><br/>
                        <p className='doctor-name'>{nomeMeds.med2}</p>
                    </div>
                    <div className='doctor'>
                        <img
                            src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                            className='image'/><br/>
                        <p className='doctor-name'>{nomeMeds.med3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
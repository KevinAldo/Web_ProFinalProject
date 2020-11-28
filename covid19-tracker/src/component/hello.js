import {Year, Day} from './waktu.js';

const Hello = () =>{
    return(
      <>
      <p>Hello, welcome to my Final Project</p>
      <p>Tahun sekarang adalah {Year()}</p>
      <p>Tanggal sekarang adalah {Day()}</p>
      </>
    );
  };

export default Hello;
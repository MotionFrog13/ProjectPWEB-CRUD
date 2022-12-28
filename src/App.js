import { React , Component } from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      title : "Data Mahasiswa 3IA11",
      employeeData : [],
      act : 0,
      index : ''
    }
  }

  handleSubmit= (ece) => {
    ece.preventDefault();
    let employeeData = this.state.employeeData;
    let npm = this.refs.txtNpm.value;
    let nama = this.refs.txtNama.value;
    let tglLahir = this.refs.txtTL.value;
    let agama = this.refs.txtAgama.value;
    let gender = this.refs.txtJKelamin.value;
    let email = this.refs.txtEmail.value;

    if(this.state.act === 0)
    {
      let newEmployee = {
        "npm" : npm,
        "nama" : nama,
        "tglLahir" : tglLahir,
        "agama" : agama,
        "gender" : gender,
        "email" : email
      }
      employeeData.push(newEmployee);
    }
    else
    {
      let index= this.state.index;
      employeeData[index].npm = npm;
      employeeData[index].nama = nama;
      employeeData[index].tglLahir = tglLahir;
      employeeData[index].agama = agama;
      employeeData[index].gender = gender;
      employeeData[index].email = email;
    }

    this.setState({
      employeeData : employeeData,
      act: 0

    })

    this.refs.myForm.reset();

  }

  handleEdit = (i) =>{
    let employeeData = this.state.employeeData[i];
    this.refs.txtNpm.value = employeeData.npm;
    this.refs.txtNama.value = employeeData.nama;
    this.refs.txtTL.value = employeeData.tglLahir;
    this.refs.txtAgama.value = employeeData.agama;
    this.refs.txtJKelamin.value = employeeData.gender;
    this.refs.txtEmail.value = employeeData.email;

    this.setState({
      act : 1,
      index : i
    })
  }

  handleDelete= (i) =>{
    let employeeData = this.state.employeeData;
    employeeData.splice(i,1);
    this.setState({
      employeeData : employeeData
    })
  }

  render(){
    let employeeData = this.state.employeeData;
    return(
      <div>
      
      <form ref="myForm">
      <h1>{this.state.title}</h1>
        <label>Nomor Pokok Mahasiswa</label>
        <input type="number" ref="txtNpm" placeholder="Masukkan NPM" className="TextField"/>
        <label>Nama</label>
        <input type="text" ref="txtNama" placeholder="Masukkan Nama" className="TextField"/>
        <label>Tanggal lahir</label>
        <input type="date" ref="txtTL" placeholder="YYYY/MM/DD" className="TextField"/>
        <label>Agama</label>
        <input type="text" ref="txtAgama" placeholder="Masukkan Agama" className="TextField"/>
        <label>Jenis Kelamin</label>
        <input type="text" ref="txtJKelamin" placeholder="Masukkan Jenis Kelamin" className="TextField"/>
        <label>Email</label>
        <input type="text" ref="txtEmail" placeholder="Masukkan Email"  className="TextField"/>
        <button onClick={external => this.handleSubmit(external)} size="1g">Simpan</button>
      </form>
      <table>
        <tr>
          <th>NPM</th>
          <th>Nama</th>
          <th>Tanggal lahir</th>
          <th>Agama</th>
          <th>Jenis Kelamin</th>
          <th>Email</th>
        </tr>
        {
          employeeData.map( (data, i) =>
          <tr key={i}>
            <td>{data.npm}</td>
            <td>{data.nama}</td>
            <td>{data.tglLahir}</td>
            <td>{data.agama}</td>
            <td>{data.gender}</td>
            <td>{data.email}</td>
            <td>
              <button onClick={external =>this.handleEdit(i)}>Edit</button>
            </td>
            <td>
              <button onClick={external =>this.handleDelete(i)}>Delete</button>
            </td>
          </tr> )
        }
      </table>
      </div>
    )
  }

}

export default App;
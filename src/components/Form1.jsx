import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const ADD_NILAI = gql`
  mutation AddNilai(
    $nama: String!
    $nim: Int!
    $matkul: String!
    $nilai: Int!
  ) {
    insert_tb_dosen(
      objects: { nama: $nama, nim: $nim, matkul: $matkul, nilai: $nilai }
    ) {
      affected_rows
    }
  }
`;

const GET_DATA = gql`
  query GetData {
    tb_dosen {
      id
      nama
      nim
      matkul
      nilai
    }
  }
`;

const DELETE_NILAI = gql`
  mutation DeleteNilai($id: Int!) {
    delete_tb_dosen(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const UPDATE_NILAI = gql`
  mutation UpdateNilai(
    $id: Int!
    $nama: String!
    $nim: Int!
    $matkul: String!
    $nilai: Int!
  ) {
    update_tb_dosen(
      where: { id: { _eq: $id } }
      _set: { nama: $nama, nim: $nim, matkul: $matkul, nilai: $nilai }
    ) {
      affected_rows
    }
  }
`;

const Form1 = () => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [matkul, setMatkul] = useState('');
  const [nilai, setNilai] = useState('');
  const [addNilai] = useMutation(ADD_NILAI);
  const [deleteNilai] = useMutation(DELETE_NILAI);
  const [updateNilai] = useMutation(UPDATE_NILAI);

  const { loading, error, data, refetch } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddNilai = (e) => {
    e.preventDefault();
    addNilai({
      variables: {
        nama,
        nim: parseInt(nim),
        matkul,
        nilai: parseInt(nilai),
      },
    })
      .then(() => {
        setNama('');
        setNim('');
        setMatkul('');
        setNilai('');
        refetch(); // Refresh the data after adding a new entry
      })
      .catch((error) => {
        console.error('Error adding nilai:', error);
      });
  };

  const handleDelete = (id) => {
    deleteNilai({ variables: { id } })
      .then(() => {
        refetch(); // Refresh the data after deleting an entry
      })
      .catch((error) => {
        console.error('Error deleting nilai:', error);
      });
  };

  const handleUpdate = (id, updatedData) => {
    updateNilai({ variables: { id, ...updatedData } })
      .then(() => {
        refetch(); // Refresh the data after updating an entry
      })
      .catch((error) => {
        console.error('Error updating nilai:', error);
      });
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center p-5">
      <div className="md:w-1/2 lg:w-1/3 px-4 mr-10 py-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <h2 className="text-center text-3xl lg:text-4xl text-gray-800 font-semibold mb-8">
          Nilai Mahasiswa
        </h2>
        <form onSubmit={handleAddNilai} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="nama" className="sr-only">
                Nama
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nama"
              />
            </div>
            <div>
              <label htmlFor="nim" className="sr-only">
                NIM
              </label>
              <input
                id="nim"
                name="nim"
                type="number"
                required
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="NIM"
              />
            </div>
            <div>
              <label htmlFor="matkul" className="sr-only">
                Mata Kuliah
              </label>
              <input
                id="matkul"
                name="matkul"
                type="text"
                required
                value={matkul}
                onChange={(e) => setMatkul(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mata Kuliah"
              />
            </div>
            <div>
              <label htmlFor="nilai" className="sr-only">
                Nilai
              </label>
              <input
                id="nilai"
                name="nilai"
                type="number"
                required
                value={nilai}
                onChange={(e) => setNilai(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nilai"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Nilai
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 lg:w-2/3 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 mt-8 md:mt-0">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-500">Nama</th>
              <th className="py-2 px-4 border border-gray-500">NIM</th>
              <th className="py-2 px-4 border border-gray-500">Mata Kuliah</th>
              <th className="py-2 px-4 border border-gray-500">Nilai</th>
              <th className="py-2 px-4 border border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.tb_dosen.map((nilai) => (
              <tr key={nilai.id}>
                <td className="py-2 px-4 border border-gray-500">
                  {nilai.nama}
                </td>
                <td className="py-2 px-4 border border-gray-500">
                  {nilai.nim}
                </td>
                <td className="py-2 px-4 border border-gray-500">
                  {nilai.matkul}
                </td>
                <td className="py-2 px-4 border border-gray-500">
                  {nilai.nilai}
                </td>
                <td className="py-2 px-4 border border-gray-500">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => {
                      const updatedData = {
                        nama: prompt('Update Nama:', nilai.nama),
                        nim: parseInt(prompt('Update NIM:', nilai.nim)),
                        matkul: prompt('Update Mata Kuliah:', nilai.matkul),
                        nilai: parseInt(prompt('Update Nilai:', nilai.nilai)),
                      };
                      handleUpdate(nilai.id, updatedData);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(nilai.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form1;

import React from 'react'
import Navbar from '../components/Navbar'
import { gql, useQuery } from '@apollo/client';

const Contact = () => {

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

const { loading, error, data, refetch } = useQuery(GET_DATA);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <Navbar />
      {/* Coba coba */}
      <p class="my-6 text-3xl text-center dark:text-white">
                STUDENT REPORT CARD HOGWARTS SCHOOL
              </p>
      
<div class="container max-w-3xl px-4 mx-auto sm:px-8">
    <div class="py-8">
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr >
                            <th scope="col" class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                Nama
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                NIM
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                Mata Kuliah
                            </th>
                            <th scope="col" class="px-5 py-3 text-sm font-semibold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                Nilai
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {data.tb_dosen.map((nilai) => (
                          <tr>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div class="flex items-center">
                                  <div class="ml-3">
                                      <p class="text-gray-900 whitespace-no-wrap">
                                          {nilai.nama}
                                      </p>
                                  </div>
                              </div>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p class="text-gray-900 whitespace-no-wrap">
                              {nilai.nim}
                              </p>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p class="text-gray-900 whitespace-no-wrap">
                              {nilai.matkul}
                              </p>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200 text-center">
                              <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                  <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                  </span>
                                  <span class="relative">
                                  {nilai.nilai}
                                  </span>
                              </span>
                          </td>
                      </tr>
                      ) )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

        </div>
  )
}

export default Contact
import { SortBy, type User } from '../types.d'

interface Props {
  showColors: boolean
  users: User[]
  handleDelete: (email: string) => void
  changeSorting: (sort: SortBy) => void
}

export const UsersList = ({ users, showColors, handleDelete, changeSorting }: Props) => {
  return (
    <table width = '100%'>
        <thead>
            <tr>
                <th>Foto</th>
                <th className='pointer' onClick={() => { changeSorting(SortBy.NAME) }}>
                  Nombre
                </th>
                <th className='pointer' onClick={() => { changeSorting(SortBy.LAST) }}>
                  Apellido
                </th>
                <th className='pointer' onClick={() => {
                  changeSorting(SortBy.COUNTRY)
                }}>
                  País
                </th>
                <th>
                  Acciones
                </th>
            </tr>
        </thead>

        <tbody>
            {
                users.map((user, index) => {
                  const backgroundColor = index % 2 === 0 ? '#333' : '#555'
                  const color = showColors ? backgroundColor : 'transparent'
                  return (
                        <tr key={index} style={{ backgroundColor: color }}>
                           <td>
                            <img
                                src={user.picture.thumbnail}
                                alt={user.email}
                            />
                           </td>
                           <td>{user.name.first}</td>
                           <td>{user.name.last}</td>
                           <td>{user.location.country}</td>
                           <td>
                              <button onClick={() => {
                                handleDelete(user.email)
                              }}>
                                Borrar
                              </button>
                            </td>
                        </tr>
                  )
                })
            }
        </tbody>
    </table>
  )
}

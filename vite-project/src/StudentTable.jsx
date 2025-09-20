import React from 'react';

const StudentTable = () => {
    return (
        <div>
           <div className="w-1/2 mx-auto mt-20">
           <h1 className='text-3xl font-bold'>Student Marks Table</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Subject</th>
        <th>Mark</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Mahidul Kabir</td>
        <td>React</td>
        <td>68</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Osman Goni</td>
        <td>React</td>
        <td>95</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Hares Islam</td>
        <td>React</td>
        <td>86</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default StudentTable;
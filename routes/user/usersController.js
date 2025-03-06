// Get
const GetClientById = (connexion, { id }, callback) => {
  const query = "SELECT * FROM Client WHERE ID_Client = ?";
  console.log(`Query: ${query}`);
  connexion.query(query, [id], (err, rows) => {
    if (err) {
      console.error('Erreur:', err);
    } else {
      console.log('Resultat:', rows);
    }
    callback(err, rows);
  });
};

// Delete
const DeleteClientbyId = (connexion, { id }, callback) => {
  const query = "DELETE from Client WHERE ID_Client = ?";
  console.log(`Query: ${query}`);
  connexion.query(query, [id], (err, rows) => {
    if (err) {
      console.error('Erreur')
    } else {
      console.log('Resultat :', rows);
    }
    callback(err, rows);
  });
};

// Put
const UpdateNameClientbyId = (connexion, { name, id }, callback) => {
  const query = "UPDATE Client SET name = ? WHERE ID_Client = ?";
  console.log(`Query: ${query}`);
  connexion.query(query, [name, id], (err, rows) => {
    if (err) {
      console.error('Erreur:', err);
    } else {
      console.log('Resultat :', rows);
    }
    callback(err, rows);
  });
};

// Post
const AddClient = (connexion, { id, name, surname, num, mail }, callback) => {
  const query = "INSERT INTO Client (ID_Client, name, surname, num, mail) VALUES (?, ?, ?, ?, ?)";
  console.log(`Query: ${query}`);
  connexion.query(query, [id, name, surname, num, mail], (err, rows) => {
    if (err) {
      console.error('Erreur:', err);
    } else {
      console.log('Resultat :', rows);
    }
    callback(err, rows);
  });
};

module.exports = {
  GetClientById,
  DeleteClientbyId,
  UpdateNameClientbyId,
  AddClient
};
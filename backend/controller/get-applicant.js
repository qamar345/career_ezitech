const { connection } = require("../config/connection");

const GetLatestApplicants = (req, res) => {
  const sql = "SELECT * FROM `candidate_table` ORDER BY id DESC LIMIT 5";
  connection.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const GetAllApplicants = (req, res) => {
  const sql = "SELECT * FROM `candidate_table`";
  connection.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

const GetSingleApplicant = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM `candidate_table` WHERE `id` = ?";
  connection.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

module.exports = { GetLatestApplicants, GetAllApplicants, GetSingleApplicant };

const { SendMessage } = require("../api/whatsapp-api");
const { connection } = require("../config/connection");

const ApplyNow = (req, res) => {
  const {
    ETIID,
    candidateFullname,
    candidateEmail,
    candidatePhone,
    candidateCnic,
    candidateGender,
    candidateImage,
    candidateJoinDate,
    candidateDob,
    candidateUniversity,
    candidateDegree,
    candidateTechnology,
    contractDuration,
    previousWork,
  } = req.body.value;

  let candidatedata = [
    ETIID,
    candidateFullname,
    candidateEmail,
    candidatePhone,
    candidateCnic,
    candidateGender,
    candidateImage,
    candidateJoinDate,
    candidateDob,
    candidateUniversity,
    candidateDegree,
    candidateTechnology,
    contractDuration,
    previousWork,
  ];

  // console.log(candidatedata);

  const sql0 = "SELECT * FROM `candidate_table` WHERE `email`= (?)";
  connection.query(sql0, [candidateEmail], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      let flag = 0;

      for (let i = 0; i < data.length; i++) {
        if (data[0].email === candidateEmail) {
          flag = 1;
          return res.json({ exist: true });
        }
      }

      if (flag === 0) {
        const sql1 =
          "INSERT INTO `candidate_table` (`eti_id`, `name`, `email`, `phone`, `cnic`, `gender`, `image`, `join_date`, `birth_date`, `university`, `degree`, `technology`, `duration`, `previous_work`) VALUES (?)";

        connection.query(sql1, [candidatedata], (err, data) => {
          if (err) {
            console.log(err);
            return res.json(err);
          } else {
            if (data.affectedRows === 1) {
              createQueue(candidatePhone);

              setInterval(() => {
                if (queue.length > 0) {
                  SendMessage(getQueue().slice(1, 13));
                }
              }, 60000);
            }
            return res.json(data.affectedRows);
          }
        });
      }
    }
  });
};

let queue = [];

function createQueue(number) {
  queue.push(number);
}

function getQueue() {
  return queue.pop();
}

module.exports = { ApplyNow };
